/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// import axios from "axios";
import { IS_PROD, services } from "../../constants";
import { apiInstance } from "../../utils";
import type { ServiceData, ServiceKeys } from "../../constants";

class ApiService {
  async send<T>(
    serviceName: ServiceKeys,
    payload: Record<string, unknown> = {}
  ) {
    console.log("am here", payload);
    const service: ServiceData = { ...services[serviceName] };
    let afterReplace = "";
    let v: any;

    for (const option of Object.keys(payload)) {
      v = payload[option];

      afterReplace = service.url.replace(new RegExp(`{${option}}`, "m"), v);

      if (service.url !== afterReplace) {
        delete payload[option];
        service.url = afterReplace;
      }
    }
    console.log(service.url);
    const options = this.get(service);
    const headers: Record<string, string> = {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    };

    const { lang, token } = this.getTokenAndLang();
    console.log("s", lang, token);

    if (lang) {
      headers["accept-language"] = lang;
    }

    if (token) {
      console.log("tokeeeen parse", token);
      headers.authorization = JSON.parse(token);
    }
    console.log("optionss", options.type, options.url);
    return apiInstance
      .request<T>({
        url: options.url,
        method: options.type,
        headers,
        data: options.type !== "GET" ? payload : {},
        params: options.type === "GET" ? { ...payload, lang } : { lang },
      })
      .then(({ data }) => {
        console.log(data, "dasdsad");
        if (!IS_PROD) {
          console.log(`[${serviceName}]`, data);
        }
        return data;
      });
  }

  async upload<T>(serviceName: ServiceKeys, data: FormData) {
    const service: ServiceData = { ...services[serviceName] };
    const options = this.get(service);

    const headers: Record<string, string> = {
      "Content-Type": "multipart/form-data",
    };

    const { lang, token } = this.getTokenAndLang();
    if (lang) {
      headers["accept-language"] = lang;
    }

    if (token) {
      headers.authorization = JSON.parse(token);
    }

    return apiInstance
      .request<T>({
        url: options.url,
        method: options.type,
        headers,
        data,
        // params: { lang },
      })
      .then(({ data }) => {
        if (!IS_PROD) {
          console.log(`[${serviceName}]`, data);
        }
        return data;
      });
  }

  // async uploadToS3(file: File) {
  //   try {
  //     const url = (await this.send<{ url: string }>('getUploadAccess', { fileType: file.type }))
  //       .url;
  //     await axios.put(url, file);
  //     return url;
  //   } catch (error) {
  //     showToast('Error Upload Photo', 'error');
  //     return Promise.reject(error);
  //   }
  // }

  private get(service: ServiceData) {
    return { url: service.url, type: service.type };
  }

  private getTokenAndLang() {
    return {
      lang: localStorage.getItem("i18nextLng") || "en",
      token: localStorage.getItem("token") || "",
    };
  }
}

export default new ApiService();

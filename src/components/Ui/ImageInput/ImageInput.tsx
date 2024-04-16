import { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCloseCircle } from "react-icons/io";
import { deleteImage, uploadImage } from "../../../services";
// import Spinner from "../Spinner";
import Modal from "../../Helpers/Modal/Modal";
import trash from "../../../assets/icons/trash.gif";
import { showToast } from "../../../utils";
import { Spinner } from "react-bootstrap";
type ImageProp = { formik: any; name: string };
const NewImage: FC<ImageProp> = ({ name, formik }) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const formData = new FormData();

  const upload = async (data: FormData) => {
    try {
      setLoading(true);
      const { data: payload, message } = await uploadImage(data);
      console.log("data", payload.url, message);

      formik.setFieldValue(name, payload.url);
      setLoading(false);
    } catch (e) {
      console.log("err");
    } finally {
      setLoading(false);
    }
  };

  const deletePhoto = async (data: { image: string }) => {
    if (inputRef.current) {
      inputRef.current.value = ""; // Reset the value of the file input
    }
    const imageAfter = data.image.split("/uploads/")[1];
    console.log("ima", imageAfter);

    const { data: payload, message } = await deleteImage({
      image: data.image.split("/uploads/")[1],
    });
    console.log("data", payload, message);

    formik.setFieldValue(name, "");
  };
  // const [file, setFile] = useState("");
  return (
    <>
      <div className="d-flex align-items-center gap-2 mb-2">
        <div
          onClick={
            !formik.values.image
              ? () => {
                  if (inputRef.current) {
                    inputRef.current.value = "";
                    formik.setFieldValue(name, "");
                    // setFile(""); // Reset the value of the file input
                  }
                  inputRef.current?.click();
                }
              : () => {}
          }
          className="d-flex align-items-center justify-content-center rounded"
          style={{
            width: "70px",
            height: "70px",
            fontSize: "25px",
            backgroundColor: "#ddd", // border: "2px dashed #28334A",
          }}
        >
          {formik.values.image ? (
            <div className="w-100 h-100 position-relative" onClick={() => {}}>
              <img
                src={
                  "https://api-intercom-test.ventiosolutions.net" +
                  formik.values.image
                }
                className="w-100 h-100 rounded"
              />
              <div
                style={{
                  top: "-15px",
                  right: "-10px",
                  cursor: "pointer",
                }}
                className=" position-absolute"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <IoIosCloseCircle
                  style={{
                    color: "red",
                  }}
                />
              </div>
            </div>
          ) : (
            <>{loading ? <Spinner /> : "+"}</>
          )}
        </div>
        <div
          className=" d-flex flex-column align-items-start
         justify-content-between "
        >
          <span
            style={{
              color: "#ddd",
            }}
          >
            {t("inputs.photo")}
          </span>

          <span
            style={{
              color: "#28334A",
              cursor: "pointer",
              border: "unset",
              backgroundColor: "transparent",
            }}
            onClick={
              !formik.values.image
                ? () => {
                    if (inputRef.current) {
                      inputRef.current.value = "";
                      formik.setFieldValue(name, "");
                      // setFile(""); // Reset the value of the file input
                    }
                    inputRef.current?.click();
                  }
                : () => {}
            }
          >
            {t("inputs.uploadPhoto")}
            <input
              hidden
              ref={inputRef}
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  const file = e.target.files[0];

                  const validTypes = ["image/jpeg", "image/jpg", "image/png"];
                  if (!validTypes.includes(file.type)) {
                    showToast(t("toasts.imageTypes"), "error");
                    return;
                  }
                  // Check file size (5MB = 5 * 1024 * 1024 bytes)
                  if (file.size > 5 * 1024 * 1024) {
                    showToast(t("toasts.imageSize"), "error");
                    return;
                  }
                  formData.append("image", file);
                  upload(formData);
                  // const fileUrl = URL.createObjectURL(file);
                  // console.log("file", fileUrl);
                  // setFile(fileUrl);
                }
              }}
            />
          </span>
        </div>
      </div>

      {formik?.touched[name] && formik?.errors[name] ? (
        <div className="error">
          <small style={{ color: "red" }}>{formik?.errors[name]}</small>
        </div>
      ) : null}
      {/* <div className="error text-danger">errrrrr</div> */}

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={async () => {
          await deletePhoto({ image: formik.values.image });
          setIsOpen(false);
          showToast("Photo Deleted Successfully", "success");
        }}
        modalIcon={trash}
        confirmBtnStyle="dangerous"
        closeBtnText={t("actions.cancel")}
        confirmBtnText={t("actions.delete")}
        modalTitle={t("image.deleteImage")}
        modalMsg={t("image.confirmDelete")}
      ></Modal>
    </>
  );
};

export default NewImage;

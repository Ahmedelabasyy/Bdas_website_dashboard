import {
  AdminFormData,
  NotificationState,
  AnnouncementDetail,
  VisitRequest,
  VmsSettingState,
} from "../../types/types";
import api from "./api";

export const loginUser = async (loginPayload: {
  email: string;
  password: string;
  type: string;
}) => {
  return await api.send<{
    data: { token: string; user: any };
    message: string;
  }>("loginUser", loginPayload);
};

// Residents
export const getResidents = async () => await api.send<any>("getResidents");

export const getOneResident = async (id: string) =>
  await api.send<any>("getOneResident", { id });

export const createResident = async (payload: any) =>
  await api.send<any>("createResident", { ...payload });

export const updateResident = async ({ id, ...payload }: any) =>
  await api.send<any>("updateResident", {
    id,
    ...payload,
  });

export const deleteResident = async (id: string) =>
  await api.send<void>("deleteResident", { id });

export const suspendResident = async (id: string, payload: any) =>
  await api.send("suspendResident", { id, ...payload });

export const getUnits = async (payload?: any) =>
  await api.send<any>("getUnits", { ...payload });

// resident requests
export const getAllResidentsRequests = async (
  limit: number,
  searchValue?: string
  // status?: number | string
) =>
  await api.send<any>("getAllResidentsRequests", {
    limit,
    searchValue: searchValue ? searchValue : "",
    // status: status ? status : "",
  });

export const getUserRequest = async (id: string) =>
  await api.send<any>("getUserRequest", { id });

export const actionRequest = async ({ id, ...payload }: any) =>
  await api.send<any>("actionRequest", {
    ...payload,
    id,
  });

// Roles
export const getRoles = async (limit?: number, searchValue?: string) =>
  api.send<any>("getRoles", {
    limit,
    searchValue: searchValue ? searchValue : "",
  });

export const getOneRole = async (id: string) =>
  await api.send<any>("getOneRole", { id });

export const forgetPassword = async (email: string) =>
  await api.send<{
    data: any;
    message: string;
  }>("forgetPassword", { email });

export const sendOtp = async (otpPayload: { email: string; otp: string }) =>
  await api.send<{
    data: any;
    message: string;
  }>("sendOtp", otpPayload);

export const changePassword = async (otpPayload: {
  email: string;
  otp: string;
  password: string;
  confirmPassword: string;
}) =>
  await api.send<{
    data: any;
    message: string;
  }>("changePassword", otpPayload);

//  changePassword;
export const createRole = async (payload: any) =>
  await api.send<any>("createRole", { ...payload });

export const deleteRole = async (id: string) =>
  await api.send<void>("deleteRole", { id });

export const updateRole = async ({ id, ...payload }: any) =>
  await api.send<any>("updateRole", {
    ...payload,
    id,
  });

// permissions
export const getAllPermissions = async () =>
  await api.send<any>("getAllPermissions");

// Building
export const getAllBuildings = async () =>
  api.send<{ data: { rows: any[] }; count: number }>("getAllBuildings");

// Building
export const getAllIntercoms = async () =>
  api.send<{ data: { rows: any[] }; count: number }>("getAllIntercoms");

// Units
export const getAllUnits = async (payload: {
  searchValue?: string;
  buildingsIds: string;
  pageNumber?: any;
}) =>
  await api.send<{ data: { rows: any[]; count: number } }>(
    "getAllUnits",
    payload
  );

export const addUnit = async (payload: {
  name: string;
  buildingId: string;
  doorBirdUser: string;
  doorBirdPassword: string;
}) =>
  await api.send<{ data: { rows: any[] }; count: number }>("addUnit", payload);

export const getUnitResident = async (payload: {
  id: string;
  limit?: number;
}) =>
  await api.send<{ data: { rows: any[]; count: number } }>(
    "getUnitResident",
    payload
  );

export const getAllAdmins = async (payload: {
  searchValue: string;
  status: string;
  buildingsIds: string;
}) => await api.send<{ data: any; message: string }>("getAllAdmins", payload);

export const getOneAdmin = async (payload: { id: string }) =>
  await api.send<{
    data: AdminFormData;
    message: string;
  }>("getOneAdmin", payload);
export const getAdminProfile = async () =>
  await api.send<{
    data: AdminFormData;
    message: string;
  }>("getAdminProfile");

export const updateAdminProfile = async (payload: {
  name: string;
  image?: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  phoneNumber: string;
  nationalId?: string | null;
}) =>
  await api.send<{
    data: {
      name: string;
      image: string;
      email: string;
      password: string;
      phoneNumber: string;
      confirmPassword: string;
      nationalId: string;
    };
    message: string;
  }>("updateAdminProfile", payload);

export const updateAdmin = async (payload: {
  id: string;
  name: string;
  image?: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  phoneNumber: string;
  nationalId?: string;

  roleId?: string;
  buildingsIds?: string[];
}) =>
  await api.send<{
    data: {
      name: string;
      image: string;
      email: string;
      password: string;
      phoneNumber: string;
      confirmPassword: string;
      nationalId: string;
      role?: { id: string; name: string };
      lastLogin?: string;
      buildingsIds?: { id: string; name: string }[];
    };
    message: string;
  }>("updateAdmin", payload);

export const addAdmin = async (payload: {
  name: string;
  image: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
  nationalId: string;
  roleId: string;
  buildingsIds: string[];
}) => await api.send<{ data: any; message: string }>("createAdmin", payload);

export const changeAdminStatus = async (payload: {
  id: string;
  status: string;
}) =>
  await api.send<{ data: any; message: string }>("changeAdminStatus", payload);

export const deleteOneAdmin = async (payload: { id: string }) =>
  await api.send<{ data: any; message: string }>("deleteAdmin", payload);
/////////////// image endpoints//////////////////////////////////////////////////////
export const uploadImage = async (payload: FormData) =>
  await api.upload<{ data: { url: string }; message: string }>(
    "uploadImage",
    payload
  );

export const deleteImage = async (payload: { image: string }) =>
  await api.send<{ data: { fileName: string }; message: string }>(
    "deleteImage",
    payload
  );
////////////////////end of image endpoints///////////////////////
export const deleteUnit = async (id: string) =>
  await api.send<void>("deleteUnit", { id });

export const getOneUnit = async (payload: { id: string }) =>
  await api.send<any>("getOneUnit", payload);

export const updateUnit = async (
  id: string,
  payload: {
    name: string;
    buildingId: string;
    doorBirdUser: string;
    doorBirdPassword: string;
  }
) => await api.send<any>("updateUnit", { id, ...payload });

export const getUnitUsers = async (payload: { id: string }) =>
  await api.send<{ data: { rows: any[] }; count: number }>(
    "getUnitUsers",
    payload
  );

// visits
export const getAllVisits = async (payload: {
  searchValue?: string;
  buildingsIds?: string;
  pageNumber?: any;
  status?: any;
  unitsIds?: any;
  from?: any;
  to?: any;
}) =>
  await api.send<{ data: { rows: any[]; count: number } }>(
    "getAllVisits",
    payload
  );

export const cancelVisit = async (id: string) =>
  await api.send<void>("cancelVisit", { id });

export const getAllHostVisitors = async (payload: {
  id: string;
  limit?: number;
}) =>
  await api.send<{ data: { rows: any[]; count: number } }>(
    "getAllHostVisitors",
    payload
  );

export const getOneVisit = async (payload: { id: string }) =>
  await api.send<any>("getOneVisit", payload);

export const addVisit = async (payload: {
  subject: string;
  fromDate: string;
  toDate: string;
  reason: string;
  building: string;
  unit: string;
  userId: string;
}) =>
  await api.send<{ data: { rows: any[] }; count: number }>("addVisit", payload);
// visitors
export const getAllVisitors = async () => await api.send<any>("getAllVisitors");

export const deleteVisitor = async (id: string) =>
  await api.send<void>("deleteVisitor", { id });

export const getOneVisitor = async (id: string) =>
  await api.send<any>("getOneVisitor", { id });

export const updateVisitor = async ({ id, ...payload }: any) =>
  await api.send<any>("updateVisitor", {
    id,
    ...payload,
  });

export const checkEmail = async (payload: { email: string }) =>
  await api.send<{ data: any; message: string }>("checkEmail", payload);

export const createVisitor = async (payload: any) =>
  await api.send<any>("createVisitor", payload);

export const createExistingVisitor = async (payload: any) =>
  await api.send<any>("createExistingVisitor", payload);

export const getVisitsForVisitor = async () =>
  await api.send<any>("getVisitsForVisitor");

// visit requests

export const getAllVisitRequests = async (payload: {
  limit: number;
  searchValue: string;
  unitsIds: string;
  buildingsIds: string;
  status: string | number;
}) =>
  await api.send<{ data: any; message: string }>(
    "getAllVisitRequests",
    payload
  );

export const getOneVisitRequest = async (payload: { id: string }) =>
  await api.send<{
    data: VisitRequest;
    message: string;
  }>("getOneVisitRequest", payload);

export const deleteVisitRequest = async (payload: { id: string }) =>
  await api.send<{
    data: VisitRequest;
    message: string;
  }>("deleteVisitRequest", payload);

export const acceptRejectVisitRequests = async (payload: {
  id: string;
  acceptedIds: string[];
  rejectedIds: string[];
}) =>
  await api.send<{
    data: VisitRequest;
    message: string;
  }>("acceptRejectVisitRequests", payload);

export const getVmsSettings = async () =>
  await api.send<{
    data: VmsSettingState;
    message: string;
  }>("getVmsSettings");

export const updateVmsSettings = async (payload: VmsSettingState) =>
  await api.send<{
    data: VmsSettingState;
    message: string;
  }>("updateVmsSettings", payload);

// Announcement
export const getAdminsOfBuildings = async ({ id }: any) =>
  await api.send<any>("getAdminsOfBuildings", { id, limit: 100000 });

// Notifications
export const getAllNotifications = async (payload: {
  type: string;
  pageNumber: number;
}) => api.send<NotificationState>("getAllNotifications", payload);

export const getOneNotification = async (payload: { id: string }) =>
  api.send<{ data: any; message: string }>("getOneNotification", payload);
export const getAllAnnouncment = async (payload: {
  limit: number;
  searchValue: string;
  recieverType: string;
  buildingsIds: string;
  fromDate: string;
  toDate: string;
  method: string;
}) =>
  await api.send<{ data: any; message: string }>("getAllAnnouncments", payload);

// Announcements
export const getAllAnnouncementsNoties = async (payload: {
  type: string;
  pageNumber: number;
}) => api.send<NotificationState>("getAllAnnouncementsNoties", payload);
export const getOneAnnouncment = async (payload: { id: string }) =>
  await api.send<{
    data: AnnouncementDetail;
    message: string;
  }>("getOneAnnouncment", payload);
export const cloneAnnouncment = async (payload: { id: string }) =>
  await api.send<{
    data: AnnouncementDetail;
    message: string;
  }>("cloneAnnouncment", payload);

export const createAnnouncement = async (payload: any) =>
  await api.send<any>("createAnnouncement", payload);

export const resendClonedAnnouncement = async (payload: any) =>
  await api.send<any>("resendClonedAnnouncement", payload);

export const deleteOneAnnouncment = async (payload: { id: string }) =>
  await api.send<{
    data: VisitRequest;
    message: string;
  }>("deleteAnnouncment", payload);

export const resendAnnouncment = async (payload: { id: string }) =>
  await api.send<{
    data: VisitRequest;
    message: string;
  }>("resendAnnouncment", payload);

// global endpoints
export const getAllBuildingsGlobal = async () =>
  api.send<{ data: { rows: any[] }; count: number }>("getAllBuildingsGlobal");

export const getUnitsGlobal = async (payload: { id: string }) =>
  await api.send<any>("getUnitsGlobal", { ...payload, limit: 1000000 });

export const getAllAdminsForBuildingGlobal = async (payload: { id: string }) =>
  api.send<{ data: { rows: any[] }; count: number }>(
    "getAllAdminsForBuilding",
    { ...payload, limit: 1000000 }
  );
export const getAllUsersForUnitGlobal = async (payload: { id: string }) =>
  api.send<{ data: { rows: any[] }; count: number }>("getAllUsersForUnit", {
    ...payload,
    limit: 1000000,
  });
export const getAllVisitorsForUserGlobal = async (payload: { id: string }) =>
  api.send<{ data: { rows: any[] }; count: number }>("getAllVisitorsForUser", {
    ...payload,
    limit: 1000000,
  });

export type ServiceData = {
  url: string;
  type: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
};

export type ServiceKeys = keyof typeof services;

export const services = {
  loginUser: { url: "auth/v1/login/dashboard", type: "POST" },
  login: { url: "login", type: "POST" },

  // Residents
  getResidents: {
    url: "/users/v1/dashboard?search={searchValue}",
    type: "GET",
  },
  getOneResident: {
    url: "/users/v1/dashboard/{id}",
    type: "GET",
  },
  createResident: { url: "users/v1/dashboard", type: "POST" },
  updateResident: { url: "users/v1/dashboard/{id}", type: "PUT" },
  deleteResident: { url: "users/v1/dashboard/{id}", type: "DELETE" },
  suspendResident: { url: "users/v1/dashboard/suspend/{id}", type: "PUT" },
  getUnits: {
    url: "units/v1/dashboard",
    type: "GET",
  },
  // resident requests
  getAllResidentsRequests: {
    url: "users/v1/dashboard/requests?limit={limit}&search={searchValue}",
    type: "GET",
  },
  getUserRequest: {
    url: "users/v1/dashboard/requests/{id}",
    type: "GET",
  },
  actionRequest: { url: "users/v1/dashboard/requests/{id}", type: "PUT" },

  // Roles
  getRoles: {
    url: "roles/v1/dashboard?search={searchValue}",
    type: "GET",
  },
  getOneRole: { url: "roles/v1/dashboard/{id}", type: "GET" },
  createRole: { url: "roles/v1/dashboard", type: "POST" },
  updateRole: { url: "roles/v1/dashboard/{id}", type: "PUT" },
  deleteRole: { url: "roles/v1/dashboard/{id}", type: "DELETE" },

  // getRolesPermissions: { url: "rolespermissions", type: "GET" },
  getAllPermissions: {
    url: "permissions/v1/dashboard?pageNumber=1&limit=50",
    type: "GET",
  },
  forgetPassword: { url: "admins/v1/dashboard/forget_password", type: "POST" },

  sendOtp: {
    url: "admins/v1/dashboard/otp",
    type: "POST",
  },

  changePassword: {
    url: "admins/v1/dashboard/change_password",
    type: "PUT",
  },

  // Buildings
  getAllBuildings: { url: "buildings/v1/dashboard", type: "GET" },
  // doorbird
  getAllIntercoms: { url: "doorbird/v1/dashboard", type: "GET" },

  // Units Endpoints
  getAllUnits: {
    url: "units/v1/dashboard?search={searchValue}&buildingsIds={buildingsIds}&pageNumber={pageNumber}&limit=5",
    type: "GET",
  },
  getOneUnit: { url: "units/v1/dashboard/{id}", type: "GET" },
  updateUnit: { url: "units/v1/dashboard/{id}", type: "PUT" },
  deleteUnit: { url: "units/v1/dashboard/{id}", type: "DELETE" },
  addUnit: { url: "units/v1/dashboard", type: "POST" },
  getUnitResident: {
    url: "units/v1/dashboard/{id}/residents?limit={limit}",
    type: "GET",
  },
  getAllAdmins: {
    url: "admins/v1/dashboard?search={searchValue}&limit=4",
    type: "GET",
  },
  getOneAdmin: { url: "admins/v1/dashboard/{id}", type: "GET" },
  getAdminProfile: { url: "admins/v1/dashboard/profile", type: "GET" },
  updateAdminProfile: { url: "admins/v1/dashboard/profile", type: "PUT" },
  createAdmin: { url: "admins/v1/dashboard", type: "POST" },
  updateAdmin: { url: "admins/v1/dashboard/{id}", type: "PUT" },
  deleteAdmin: { url: "admins/v1/dashboard/{id}", type: "DELETE" },
  changeAdminStatus: { url: "admins/v1/dashboard/action/{id}", type: "PUT" },
  uploadImage: { url: "upload/image", type: "POST" },
  deleteImage: { url: "upload/{image}", type: "DELETE" },
  getUnitUsers: {
    url: "users/v1/dashboard?unitId={id}&pageNumber={pageNumber}&limit=4",
    type: "GET",
  },

  // Visits
  getAllVisits: {
    url: "/visits/v1/dashboard/?search={searchValue}&limit=4",
    type: "GET",
  },

  getOneVisit: { url: "/visits/v1/dashboard/{id}", type: "GET" },
  cancelVisit: { url: "/visits/v1/dashboard/{id}/cancel", type: "PUT" },
  getAllHostVisitors: {
    url: "/global/v1/dashboard/users/{id}/visitors?limit={limit}",
    type: "GET",
  },
  addVisit: { url: "/visits/v1/dashboard/", type: "POST" },
  // visitors
  getAllVisitors: {
    url: "visitors/v1/dashboard?search={searchValue}",
    type: "GET",
  },
  deleteVisitor: { url: "visitors/v1/dashboard/{id}", type: "DELETE" },
  getOneVisitor: {
    url: "visitors/v1/dashboard/{id}",
    type: "GET",
  },
  updateVisitor: { url: "visitors/v1/dashboard/{id}", type: "PUT" },
  checkEmail: { url: "visitors/v1/dashboard/check_email", type: "POST" },
  createVisitor: { url: "visitors/v1/dashboard", type: "POST" },
  createExistingVisitor: {
    url: "visitors/v1/dashboard/add_existing_visitor",
    type: "POST",
  },
  getVisitsForVisitor: {
    url: "/visitors/v1/dashboard/{id}/visits",
    type: "GET",
  },

  // visit request
  getAllVisitRequests: {
    url: "visits/v1/dashboard/requests?buildingsIds={buildingsIds}&unitsIds={unitsIds}&search={searchValue}&limit={limit}&status={status}",
    type: "GET",
  },

  getOneVisitRequest: { url: "visits/v1/dashboard/requests/{id}", type: "GET" },
  deleteVisitRequest: {
    url: "visits/v1/dashboard/requests/{id}",
    type: "DELETE",
  },
  acceptRejectVisitRequests: {
    url: "visits/v1/dashboard/requests/{id}",
    type: "PUT",
  },

  // vms settings
  getVmsSettings: { url: "visits/settings/v1/dashboard/", type: "GET" },
  updateVmsSettings: {
    url: "visits/settings/v1/dashboard/{id}",
    type: "PUT",
  },

  // announcement
  getAdminsOfBuildings: {
    url: "global/v1/dashboard/buildings/{id}/admins",
    type: "GET",
  },

  // Notifications
  getAllNotifications: {
    url: "/notifications/v1/dashboard/my_notifications?type={type}&pageNumber={pageNumber}&limit=6",
    type: "GET",
  },

  getAllAnnouncementsNoties: {
    url: "/notifications/v1/dashboard/my_notifications?type={type}&pageNumber={pageNumber}&limit=6",
    type: "GET",
  },

  getOneNotification: {
    url: "/notifications/v1/dashboard/my_notifications/{id}",
    type: "GET",
  },
  getAllAnnouncments: {
    url: "notifications/v1/dashboard/announcement?search={searchValue}&buildingsIds={buildingsIds}&limit={limit}&method={method}&recieverType={recieverType}&fromDate={fromDate}&toDate={toDate}",
    type: "GET",
  },

  getOneAnnouncment: {
    url: "notifications/v1/dashboard/announcement/{id}",
    type: "GET",
  },
  cloneAnnouncment: {
    url: "/notifications/v1/dashboard/announcement/clone/{id}",
    type: "GET",
  },
  createAnnouncement: {
    url: "notifications/v1/dashboard/announcement",
    type: "POST",
  },
  resendClonedAnnouncement: {
    url: "notifications/v1/dashboard/announcement/clone",
    type: "POST",
  },
  deleteAnnouncment: {
    url: "notifications/v1/dashboard/announcement/{id}",
    type: "DELETE",
  },
  resendAnnouncment: {
    url: "notifications/v1/dashboard/announcement/resend/{id}",
    type: "POST",
  },

  // global endpoints
  getAllBuildingsGlobal: { url: "global/v1/dashboard/buildings", type: "GET" },
  getUnitsGlobal: {
    url: "global/v1/dashboard/buildings/{id}/units",
    type: "GET",
  },
  getAllAdminsForBuilding: {
    url: "/global/v1/dashboard/buildings/{id}/admins",
    type: "GET",
  },
  getAllUsersForUnit: {
    url: "/global/v1/dashboard/units/{id}/users",
    type: "GET",
  },
  getAllVisitorsForUser: {
    url: "/global/v1/dashboard/users/{id}/visitors",
    type: "GET",
  },
} as const;

export const IS_PROD = false;

export const API_URL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL
  : IS_PROD
  ? "https://api-intercom-test.ventiosolutions.net/"
  : "https://api-intercom-test.ventiosolutions.net/";
// : "http://54.220.203.34:3000";

// export const allPermissions = {
//   listTenants: "List Residents",
//   editTenant: "Edit Resident",
//   tenantRequestsList: "List Residents Requests",
//   tenantDetails: "View Resident Details",
//   tenantRequestAction: "Accept/Reject Residents Requests",
//   suspendTenant: "Suspend Resident",
//   addTenant: "Add New Resident",
//   deleteTenant: "Delete Resident",
//   tenantRequestDetails: "View Residents Request Details",
//   cloneMessage: "clone communication message",
//   sendMessage: "send new communication message",
//   deleteMessage: "delete communication message",
//   resendMessage: "resend communication message",
//   messageDetails: "view communication messages details",
//   listMessages: "list communications messages",
//   listVisits: "List Visits",
//   editVisit: "edit visit",
//   visitRequestAction: "Accept/Reject Visits Requests",
//   visitDetails: "View Visit Details",
//   addVisit: "Add New Visit",
//   cancelVisit: "Cancel Visit",
//   viewVisitRequestDetails: "View Visits Requests Details",
//   deleteVisit: "delete visit",
//   listVisitRequests: "List Visits Requests",
//   deleteVisitRequest: "Delete Expired Visit Request",
//   enableElevators: "enable elevators",
//   addUnit: "Add New Unit",
//   deleteUnit: "Delete Unit",
//   listUnits: "List Units",
//   editUnit: "Edit Unit",
//   unitDetails: "View Unit Details",
//   listAlarms: "list alarms",
//   alarmStatus: "change alarm status",
//   editVisitor: "Edit Visitor",
//   addVisitor: "Add New Visitor",
//   listVisitors: "List Visitors",
//   deleteVisitor: "Delete Visitor",
//   visitorDetails: "View Visitor Details",
//   vmsSettings: "Edit Available Times",
//   viewIntercom: "View Intercom",
//   listAnnouncements: "List Of Announcements",
//   deleteAnnouncements: "Delete Announcement",
//   cloneAnnouncment: "Clone Announcement",
//   sendAnnouncement: "Send New Announcement",
//   resendAnnouncment: "Resend Announcement",
//   viewAnnouncement: "View Announcement Details",
// };

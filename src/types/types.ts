export type AdminFormData = {
  name: string;
  image?: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  phoneNumber: string;
  nationalId?: string;
  role?: any;
  roleId?: string;
  buildingsIds?: string[];
  buildings?: any;
  status?: number;
  units?: [];
};

export type Option = {
  label: string;
  value: string | number;
};
export type VisitProgress = 0 | 1 | 2 | 3 | 4 | 5;

export type Visitor = {
  id: string;
  name: string;
  image: string;
  email: string;
};

export type VisitRequest = {
  id: string;
  subject: string;
  reason: string;
  fromDate: string;
  toDate: string;
  visitProgress: VisitProgress;
  building: number | string;
  unit: string;
  user: string;
  visitors: Visitor[];
};

export type VisitorState = { acceptedIds: string[]; rejectedIds: string[] };

export type VmsSettingState = {
  id: string;
  availableArrivalTime: string;
  availableLeaveTime: string;
};

export type VmsSettingPayload = {
  availableArrivalTime: string | number;
  availableLeaveTime: string | number;
};

export type Status = {
  status: string;
  id: number | string;
};

export type Notification = {
  id: string;
  body: string;
  createdAt: string;
  type: number;
  itemId: string;
  itemType: string;
  seen: boolean;
};

export type NotificationState = {
  data: {
    rows: Notification[];
    count: number;
    hasUnreadNotifications: boolean;
    hasUnreadAnnouncements: boolean;
  };
};
export type Announcement = {
  id: string;
  title: string;
  type: string;
  receiverType: string;
  createdBy: string;
  createdAt: string;
  icon: string;
  body: string;
  itemId?: string;
  itemType?: null;
  seen?: boolean;
};

export type AnnouncementDetail = {
  // type: string;
  id: string;
  body: string;
  title: string;
  createdBy: string;
  createdAt: string;
  residanceType?: number;
  building: { id: string; name: string };
  admins?: { id: string; name: string; image?: string }[];
  units?: { id: string; name: string; image?: string }[];
  allUnits?: boolean;
  recieverType?: number | string;
  count: number;
  method: number;
};

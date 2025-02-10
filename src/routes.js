import React from "react";
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import ForgotPassword from "views/examples/ForgotPassword";
import UpdatePassword from "views/examples/UpdatePassword";
import Login from "views/examples/Login.js";
import Companies from "Master/Master/Companies/Companies"
import Services from "Master/Master/Services/Services";
import Clients from "Master/Master/Clients/Clients";
import Vendors from "Master/Master/Vendors/Vendors";
import Roles from "Master/Master/Roles/Roles";
import Users from "Master/Master/Users/Users";
import ExpenseTypes from "Master/Master/ExpenseTypes/ExpenseTypes";
import Holidays from "Master/Master/Holidays/Holidays";
import Pages from "Master/RolesAndPermissions/Pages/Pages";
import Permissions from "Master/RolesAndPermissions/Pages/Permissions/Permissions";
import Projects from "Master/ProjectManagement/Projects/Projects";
import ProjectResources from "Master/ProjectManagement/ProjectResources/ProjectResources";
import Credentials from "Master/ProjectManagement/Credentials/Credentials";
import AddOnServices from "Master/ProjectManagement/AddOnServices/AddOnServices";
import ScopeOfWorks from "Master/ProjectManagement/ScopeOfWorks/ScopeOfWorks";
import Task from "Master/ProjectManagement/Tasks/Tasks";
import TaskLogs from "Master/ProjectManagement/Task Logs/TaskLogs";
import Amcs from "Master/AmcManagement/Amcs/Amcs";
import AmcTask from "Master/AmcManagement/AmcTask/AmcTask";
import AmcTimelienes from "Master/AmcManagement/AmcTimelines/AmcTimelines";
import Attendances from "Master/EmployeeManagement/Attendances/Attendances";
import Breaks from "Master/EmployeeManagement/Breaks/Breaks";
import Leaves from "Master/EmployeeManagement/Leaves/Leaves";
import Issues from "Master/EmployeeManagement/Issues/Issues";
import Complaints from "Master/EmployeeManagement/Complaints/Complaints";
import Notifications from "Master/EmployeeManagement/Notifications/Notifications";
import Meetings from "Master/EmployeeManagement/Meetings/Meetings";
import FeedbackFroms from "Master/FeedbackManagement/FeedbackForm/FeedbackFroms";
import Questions from "Master/FeedbackManagement/Questions/Questions";
import Answers from "Master/FeedbackManagement/Answers/Answers";
import Ratings from "Master/FeedbackManagement/Ratings/Ratings";
import Leads from "Master/LeadManagement/Leads/Leads";
import FollowUps from "Master/LeadManagement/FollowUps/FollowUps";
import Proposals from "Master/LeadManagement/Proposals/Proposals";
import CallLogs from "Master/LeadManagement/CallLogs/CallLogs";
import Invoices from "Master/BillManagement/Invoices/Invoices";
import InvoiceDetails from "Master/BillManagement/InvoiceDetails/InvoiceDetails";
import Payments from "Master/BillManagement/Payments/Payments";
import Expenses from "Master/BillManagement/Expenses/Expenses";
//const Users = React.lazy(() => import("./pages/users/Users"));



const routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
 {/* {
    path: "/users",
    name: "Users",
    icon: "ni ni-bullet-list-67 text-red",
    component: Users,
    layout: "/admin",
  }, */},
  {
    path: "/companies",
    name: "Companies",
    icon: "ni ni-bullet-list-67 text-red",
    component:Companies,
    layout: "/admin",
  },
  {
    path: "/services",
    name: "Services",
    icon: "ni ni-bullet-list-67 text-red",
    component:Services,
    layout: "/admin",
  },
  {
    path: "/clients",
    name: "Clients",
    icon: "ni ni-bullet-list-67 text-red",
    component:Clients,
    layout: "/admin",
  },
  {
    path: "/vendors",
    name: "Vendors",
    icon: "ni ni-bullet-list-67 text-red",
    component:Vendors,
    layout: "/admin",
  },
  {
    path: "/roles",
    name: "Roles",
    icon: "ni ni-bullet-list-67 text-red",
    component:Roles,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-bullet-list-67 text-red",
    component:Users,
    layout: "/admin",
  },
  {
    path: "/expensetypes",
    name: "ExpenseTypes",
    icon: "ni ni-bullet-list-67 text-red",
    component:ExpenseTypes,
    layout: "/admin",
  },
  {
    path: "/holidays",
    name: "Holid",
    icon: "ni ni-bullet-list-67 text-red",
    component:Holidays,
    layout: "/admin",
  },
  {
    path: "/pages",
    name: "Pages",
    icon: "ni ni-bullet-list-67 text-red",
    component:Pages,
    layout: "/admin",
  },
  {
    path: "/permissions",
    name: "Permissions",
    icon: "ni ni-bullet-list-67 text-red",
    component:Permissions,
    layout: "/admin",
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "ni ni-bullet-list-67 text-red",
    component:Projects,
    layout: "/admin",
  },
  {
    path: "/projectresources",
    name: "Roles",
    icon: "ni ni-bullet-list-67 text-red",
    component:ProjectResources,
    layout: "/admin",
  },
  {
    path: "/credentials",
    name: "Credentials",
    icon: "ni ni-bullet-list-67 text-red",
    component:Credentials,
    layout: "/admin",
  },
  {
    path: "/addonServices",
    name: "Add On Services",
    icon: "ni ni-single-02 text-yellow",
    component: AddOnServices,
    layout: "/admin",
  },
  {
    path: "/scopeofWorks",
    name: "Scope Of Works",
    icon: "ni ni-single-02 text-yellow",
    component: ScopeOfWorks,
    layout: "/admin",
  },
  {
    path: "/task",
    name: "Task",
    icon: "ni ni-single-02 text-yellow",
    component: Task,
    layout: "/admin",
  },
  {
    path: "/tasklogs",
    name: "Task Logs",
    icon: "ni ni-single-02 text-yellow",
    component: TaskLogs,
    layout: "/admin",
  },
  {
    path: "/amcs",
    name: "Task Logs",
    icon: "ni ni-single-02 text-yellow",
    component:Amcs,
    layout: "/admin",
  },
  {
    path: "/amctask",
    name: "Task Logs",
    icon: "ni ni-single-02 text-yellow",
    component:AmcTask,
    layout: "/admin",
  },
  {
    path: "/amctimelines",
    name: "Amc Time lienes",
    icon: "ni ni-single-02 text-yellow",
    component:AmcTimelienes,
    layout: "/admin",
  },
  {
    path: "/attendances",
    name: "Attendances",
    icon: "ni ni-single-02 text-yellow",
    component:Attendances,
    layout: "/admin",
  },
  {
    path: "/breaks",
    name: "Breaks",
    icon: "ni ni-single-02 text-yellow",
    component:Breaks,
    layout: "/admin",
  },
  {
    path: "/leaves",
    name: "Leaves",
    icon: "ni ni-single-02 text-yellow",
    component:Leaves,
    layout: "/admin",
  },
  {
    path: "/issues",
    name: "Issues",
    icon: "ni ni-single-02 text-yellow",
    component:Issues,
    layout: "/admin",
  },
  {
    path: "/complaints",
    name: "Complaints",
    icon: "ni ni-single-02 text-yellow",
    component:Complaints,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ni ni-single-02 text-yellow",
    component:Notifications,
    layout: "/admin",
  },
  {
    path: "/meetings",
    name: "Meetings",
    icon: "ni ni-single-02 text-yellow",
    component:Meetings,
    layout: "/admin",
  },
  {
    path: "/feedbackFroms",
    name: "FeedbackFroms",
    icon: "ni ni-single-02 text-yellow",
    component:FeedbackFroms,
    layout: "/admin",
  },
  {
    path: "/questions",
    name: "Questions",
    icon: "ni ni-single-02 text-yellow",
    component:Questions,
    layout: "/admin",
  },
  {
    path: "/answers",
    name: "Answers",
    icon: "ni ni-single-02 text-yellow",
    component:Answers,
    layout: "/admin",
  },
  {
    path: "/retings",
    name: "Ratings",
    icon: "ni ni-single-02 text-yellow",
    component:Ratings,
    layout: "/admin",
  },
  {
    path: "/leads",
    name: "Leads",
    icon: "ni ni-single-02 text-yellow",
    component:Leads,
    layout: "/admin",
  },
  {
    path: "/followUps",
    name: "FollowUps",
    icon: "ni ni-single-02 text-yellow",
    component:FollowUps,
    layout: "/admin",
  },
  {
    path: "/proposals",
    name: "Proposals",
    icon: "ni ni-single-02 text-yellow",
    component:Proposals,
    layout: "/admin",
  },
  {
    path: "/callLogs",
    name: "CallLogs",
    icon: "ni ni-single-02 text-yellow",
    component:CallLogs,
    layout: "/admin",
  },
  {
    path: "/invoices",
    name: "Invoices",
    icon: "ni ni-single-02 text-yellow",
    component:Invoices,
    layout: "/admin",
  },
  {
    path: "/invoiceDetails",
    name: "InvoiceDetails",
    icon: "ni ni-single-02 text-yellow",
    component:InvoiceDetails,
    layout: "/admin",
  },
  {
    path: "/payments",
    name: "Payments",
    icon: "ni ni-single-02 text-yellow",
    component:Payments,
    layout: "/admin",
  },
  {
    path: "/expenses",
    name: "Expenses",
    icon: "ni ni-single-02 text-yellow",
    component:Expenses,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/forgot-password",
    name: "Forgot Password",
    icon: "ni ni-circle-08 text-pink",
    component: ForgotPassword,
    layout: "/auth",
  },
  {
    path: "/update-password",
    name: "Update Password",
    icon: "ni ni-circle-08 text-pink",
    component: UpdatePassword,
    layout: "/auth",
  },
];
export default routes;

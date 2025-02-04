import { TbLayoutDashboard } from "react-icons/tb";
import { FiBarChart2, FiBookOpen } from "react-icons/fi";
import { LuSparkle, LuSettings } from "react-icons/lu";
import { BiBookmarkMinus } from "react-icons/bi";

export const sections = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <TbLayoutDashboard size={24} />,
  },
  {
    name: "Analysis",
    path: "/dashboard/analysis",
    icon: <FiBarChart2 size={24} />,
  },
  {
    name: "News & Report",
    path: "/dashboard/reports",
    icon: <FiBookOpen size={24} />,
  },
  {
    name: "Exclusive report",
    path: "/dashboard/exclusivereport",
    icon: <LuSparkle size={24} />,
  },
  {
    name: "Watchlist",
    path: "/dashboard/watchlist",
    icon: <BiBookmarkMinus size={24} />,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: <LuSettings size={24} />,
  },
];

export const notifications = [
  {
    img: "/user1.png",
    name: "David Osapolo",
    minAgo: "2",
    body1: "Invited",
    highlightedText: "Aliyu Tosin",
    body2: "to the La’organisation",
    content: "",
    type: "Invite",
    status: "offline",
    isRead: false,
  },
  {
    img: "/user2.png",
    name: "Gideon Osama",
    minAgo: "5",
    body1: "Commented In",
    highlightedText: "PMS Price Analysis",
    body2: "",
    content:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id.”",
    type: "Comment",
    status: "online",
    isRead: false,
  },
  {
    img: "/alertIcon.png",
    name: "Price Drop Alert",
    minAgo: "30",
    body1: "",
    highlightedText: "PMS Falls Below ₦500/Liter",
    body2: "",
    content:
      "The price of Premium Motor Spirit (PMS) has dropped to ₦495 per litre. This is a 3% decrease from last week.",
    type: "Alert",
    status: "offline",
    isRead: false,
  },
  {
    img: "/user2.png",
    name: "Gideon Osama",
    minAgo: "5",
    body1: "Mentioned you in",
    highlightedText: "PMS Price Analysis",
    body2: "",
    content:
      "“@john Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id.”",
    type: "Mention",
    status: "online",
    isRead: false,
  },
];

export const popularQueries = [
  "Show me the current price of ICE Brent Crude.",
  "What is the historical price trend for PMS in the last 6 months?",
  "Compare AGO prices in Lagos and Port Harcourt.",
  "Set an alert for when LPG prices drop below ₦300 per liter.",
  "Generate a report on the price volatility of AGO over the past year.",
];

export const products = [
  { id: "PMS", name: "Petroleum Motor Spirit" },
  { id: "AGO", name: "Automotive Gas Oil" },
  { id: "DPK", name: "Dual Purpose Kerosene" },
  { id: "ICE", name: "ICE Brent Crude" },
  { id: "LPG", name: "Liquified Petroleum Gas" },
];

export const rawdata = [
  {
    state: "Abia",
    date: "2024-11-30",
    prices: {
      price1: 1205.63,
      price2: 1159.38,
      price3: 1342.86,
      price4: 1300,
    },
    zone: "South East",
  },
  {
    state: "Abuja",
    date: "2024-11-30",
    prices: {
      price1: 1352.86,
      price2: 1084.44,
      price3: 1150,
      price4: 1291.67,
    },
    zone: "North Central",
  },
  {
    state: "Adamawa",
    date: "2024-11-30",
    prices: {
      price1: 1205,
      price2: 1161.67,
      price3: 1399.44,
      price4: 1325.56,
    },
    zone: "North East",
  },
  {
    state: "Akwa Ibom",
    date: "2024-11-30",
    prices: {
      price1: 1189.43,
      price2: 1119.38,
      price3: 1375,
      price4: 1368.57,
    },
    zone: "South South",
  },
  {
    state: "Anambra",
    date: "2024-11-30",
    prices: {
      price1: 1264.29,
      price2: 1141.25,
      price3: 1400,
      price4: 1500,
    },
    zone: "South East",
  },
  {
    state: "Bauchi",
    date: "2024-11-30",
    prices: {
      price1: 1302.14,
      price2: 1197.5,
      price3: 1457.14,
      price4: 1400,
    },
    zone: "North East",
  },
  {
    state: "Bayelsa",
    date: "2024-11-30",
    prices: {
      price1: 1222,
      price2: 1150,
      price3: 1400,
      price4: 1351.67,
    },
    zone: "South South",
  },
  {
    state: "Benue",
    date: "2024-11-30",
    prices: {
      price1: 1185,
      price2: 1152.78,
      price3: 1500,
      price4: 1450,
    },
    zone: "North Central",
  },
  {
    state: "Borno",
    date: "2024-11-30",
    prices: {
      price1: 1209.44,
      price2: 1181.44,
      price3: 1475,
      price4: 1333.33,
    },
    zone: "North East",
  },
  {
    state: "Cross River",
    date: "2024-11-30",
    prices: {
      price1: 1182.5,
      price2: 1160.75,
      price3: 1200,
      price4: 1180,
    },
    zone: "South South",
  },
  {
    state: "Delta",
    date: "2024-11-30",
    prices: {
      price1: 1217.5,
      price2: 1167.5,
      price3: 1480,
      price4: 1342.86,
    },
    zone: "South South",
  },
  {
    state: "Ebonyi",
    date: "2024-11-30",
    prices: {
      price1: 1181.67,
      price2: 1197.5,
      price3: 1500,
      price4: 1290,
    },
    zone: "South East",
  },
  {
    state: "Edo",
    date: "2024-11-30",
    prices: {
      price1: 1390,
      price2: 1146.25,
      price3: 1237.5,
      price4: 1437.5,
    },
    zone: "South South",
  },
  {
    state: "Ekiti",
    date: "2024-11-30",
    prices: {
      price1: 1227.78,
      price2: 1117.78,
      price3: 1438.29,
      price4: 1408.33,
    },
    zone: "South West",
  },
  {
    state: "Enugu",
    date: "2024-11-30",
    prices: {
      price1: 1231.88,
      price2: 1161.25,
      price3: 1321.43,
      price4: 1425,
    },
    zone: "South East",
  },
  {
    state: "Gombe",
    date: "2024-11-30",
    prices: {
      price1: 1186.25,
      price2: 1136,
      price3: 1443.75,
      price4: 1381.25,
    },
    zone: "North East",
  },
  {
    state: "Imo",
    date: "2024-11-30",
    prices: {
      price1: 1225,
      price2: 1160.63,
      price3: 1347.14,
      price4: 1387.5,
    },
    zone: "South East",
  },
  {
    state: "Jigawa",
    date: "2024-11-30",
    prices: {
      price1: 1270,
      price2: 1142.22,
      price3: 1425,
      price4: 1460,
    },
    zone: "North West",
  },
  {
    state: "Kaduna",
    date: "2024-11-30",
    prices: {
      price1: 1214.44,
      price2: 1122.22,
      price3: 1300,
      price4: 1266.25,
    },
    zone: "North West",
  },
  {
    state: "Kano",
    date: "2024-11-30",
    prices: {
      price1: 1277.14,
      price2: 1174.88,
      price3: 1400,
      price4: 1350,
    },
    zone: "North West",
  },
  {
    state: "Katsina",
    date: "2024-11-30",
    prices: {
      price1: 1194.29,
      price2: 1113.75,
      price3: 1321.43,
      price4: 1376,
    },
    zone: "North West",
  },
  {
    state: "Kebbi",
    date: "2024-11-30",
    prices: {
      price1: 1272.86,
      price2: 1181.25,
      price3: 1400,
      price4: 1350,
    },
    zone: "North West",
  },
  {
    state: "Kogi",
    date: "2024-11-30",
    prices: {
      price1: 1170.63,
      price2: 1106.88,
      price3: 1425,
      price4: 1362.5,
    },
    zone: "North Central",
  },
  {
    state: "Kwara",
    date: "2024-11-30",
    prices: {
      price1: 1275,
      price2: 1276.25,
      price3: 1225,
      price4: 1300,
    },
    zone: "North Central",
  },
  {
    state: "Lagos",
    date: "2024-11-30",
    prices: {
      price1: 1147.39,
      price2: 1060.27,
      price3: 1475,
      price4: 1216.92,
    },
    zone: "South West",
  },
  {
    state: "Nasarawa",
    date: "2024-11-30",
    prices: {
      price1: 1185,
      price2: 1135,
      price3: 1500,
      price4: 1300,
    },
    zone: "North Central",
  },
  {
    state: "Niger",
    date: "2024-11-30",
    prices: {
      price1: 1172,
      price2: 1106.25,
      price3: 1400,
      price4: 1397,
    },
    zone: "North Central",
  },
  {
    state: "Ogun",
    date: "2024-11-30",
    prices: {
      price1: 1160,
      price2: 1061.56,
      price3: 1350,
      price4: 1314.29,
    },
    zone: "South West",
  },
  {
    state: "Ondo",
    date: "2024-11-30",
    prices: {
      price1: 1325,
      price2: 1162.5,
      price3: 1190,
      price4: 1530,
    },
    zone: "South West",
  },
  {
    state: "Osun",
    date: "2024-11-30",
    prices: {
      price1: 1171,
      price2: 1085.63,
      price3: 1191,
      price4: 1425.71,
    },
    zone: "South West",
  },
  {
    state: "Oyo",
    date: "2024-11-30",
    prices: {
      price1: 1149.5,
      price2: 1059.38,
      price3: 1310,
      price4: 1357.5,
    },
    zone: "South West",
  },
  {
    state: "Plateau",
    date: "2024-11-30",
    prices: {
      price1: 1394.44,
      price2: 1155.56,
      price3: 1311.11,
      price4: 1316.67,
    },
    zone: "North Central",
  },
  {
    state: "Rivers",
    date: "2024-11-30",
    prices: {
      price1: 1341.67,
      price2: 1166.25,
      price3: 1160,
      price4: 1530,
    },
    zone: "South South",
  },
  {
    state: "Sokoto",
    date: "2024-11-30",
    prices: {
      price1: 1222.86,
      price2: 1142.86,
      price3: 1300,
      price4: 1282.5,
    },
    zone: "North West",
  },
  {
    state: "Taraba",
    date: "2024-11-30",
    prices: {
      price1: 1215.56,
      price2: 1142.56,
      price3: 1581.25,
      price4: 1337.5,
    },
    zone: "North East",
  },
  {
    state: "Yobe",
    date: "2024-11-30",
    prices: {
      price1: 1270,
      price2: 1153.33,
      price3: 1348.89,
      price4: 1196.11,
    },
    zone: "North East",
  },
  {
    state: "Zamfara",
    date: "2024-11-30",
    prices: {
      price1: 1255,
      price2: 1181.25,
      price3: 1200,
      price4: 1276.25,
    },
    zone: "North West",
  },
];

export const watchlistData = [
  {
    name: "PMS",
    fullName: "Premium Motor Spirit",
    data: [
      { day: "Day 1", price: 900.5 },
      { day: "Day 2", price: 800.0 },
      { day: "Day 3", price: 950.0 },
      { day: "Day 4", price: 850.0 },
      { day: "Day 5", price: 750.0 },
      { day: "Day 6", price: 650.0 },
      { day: "Day 7", price: 700.0 },
      { day: "Day 8", price: 850.0 },
      { day: "Day 9", price: 1000.0 },
      { day: "Day 10", price: 900.0 },
      { day: "Day 11", price: 1050.0 },
      { day: "Day 12", price: 950.0 },
      { day: "Day 13", price: 1050.0 },
      { day: "Day 14", price: 1100.0 },
      { day: "Day 15", price: 1200.0 },
    ],
  },
  {
    name: "AGO",
    fullName: "Automotive Gas Oil",
    data: [
      { day: "Day 1", price: 950.5 },
      { day: "Day 2", price: 700.0 },
      { day: "Day 3", price: 600.0 },
      { day: "Day 4", price: 750.0 },
      { day: "Day 5", price: 650.0 },
      { day: "Day 6", price: 820.0 },
      { day: "Day 7", price: 700.0 },
      { day: "Day 8", price: 850.0 },
      { day: "Day 9", price: 950.0 },
      { day: "Day 10", price: 820.0 },
      { day: "Day 11", price: 900.0 },
      { day: "Day 12", price: 750.0 },
      { day: "Day 13", price: 860.0 },
      { day: "Day 14", price: 810.0 },
      { day: "Day 15", price: 950.0 },
    ],
  },
  {
    name: "ICE",
    fullName: "ICE Brent Crude",
    data: [
      { day: "Day 1", price: 350.5 },
      { day: "Day 2", price: 270.0 },
      { day: "Day 3", price: 400.0 },
      { day: "Day 4", price: 500.0 },
      { day: "Day 5", price: 600.0 },
      { day: "Day 6", price: 450.0 },
      { day: "Day 7", price: 550.0 },
      { day: "Day 8", price: 650.0 },
      { day: "Day 9", price: 700.0 },
      { day: "Day 10", price: 590.0 },
      { day: "Day 11", price: 800.0 },
      { day: "Day 12", price: 720.0 },
      { day: "Day 13", price: 850.0 },
      { day: "Day 14", price: 900.0 },
      { day: "Day 15", price: 950.0 },
    ],
  },
  {
    name: "DPK",
    fullName: "Dual Purpose Kerosene",
    data: [
      { day: "Day 1", price: 330.5 },
      { day: "Day 2", price: 500.0 },
      { day: "Day 3", price: 400.0 },
      { day: "Day 4", price: 600.0 },
      { day: "Day 5", price: 550.0 },
      { day: "Day 6", price: 700.0 },
      { day: "Day 7", price: 650.0 },
      { day: "Day 8", price: 750.0 },
      { day: "Day 9", price: 800.0 },
      { day: "Day 10", price: 950.0 },
      { day: "Day 11", price: 850.0 },
      { day: "Day 12", price: 900.0 },
      { day: "Day 13", price: 1000.0 },
      { day: "Day 14", price: 1100.0 },
      { day: "Day 15", price: 1200.0 },
    ],
  },
];

export const depotData = {
  PMS: [
    {
      station: "NIPCO",
      location: "Lagos",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 350,
      })),
    },
    {
      station: "Oando PLC",
      location: "Rivers",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 350,
      })),
    },
    {
      station: "MRS Oil Nigeria",
      location: "Oyo",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 350,
      })),
    },
    {
      station: "Total Nigeria PLC",
      location: "Abuja",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 350,
      })),
    },
    {
      station: "Conoil PLC",
      location: "Kano",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 350,
      })),
    },
    {
      station: "Ardova PLC",
      location: "Enugu",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 350,
      })),
    },
    {
      station: "Chipet PLC",
      location: "Kaduna",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 350,
      })),
    },
    {
      station: "Hassan PLC",
      location: "Benin",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 350,
      })),
    },
  ],
  DPK: [
    {
      station: "NIPCO",
      location: "Lagos",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 350,
      })),
    },
    {
      station: "Oando PLC",
      location: "Rivers",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 350,
      })),
    },
    {
      station: "MRS Oil Nigeria",
      location: "Oyo",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 350,
      })),
    },
  ],
  LPG: [
    {
      station: "NIPCO",
      location: "Lagos",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 1200 + Math.random() * 100,
      })),
    },
    {
      station: "Oando PLC",
      location: "Rivers",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 1200 + Math.random() * 100,
      })),
    },
    {
      station: "MRS Oil Nigeria",
      location: "Oyo",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 1200 + Math.random() * 100,
      })),
    },
  ],
  AGO: [
    {
      station: "NIPCO",
      location: "Lagos",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 100,
      })),
    },
    {
      station: "Oando PLC",
      location: "Rivers",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 100,
      })),
    },
    {
      station: "MRS Oil Nigeria",
      location: "Oyo",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 100,
      })),
    },
  ],
  ICE: [
    {
      station: "NIPCO",
      location: "Lagos",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 100,
      })),
    },
    {
      station: "Oando PLC",
      location: "Rivers",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 100,
      })),
    },
    {
      station: "MRS Oil Nigeria",
      location: "Oyo",
      data: [...Array(15)].map((_, i) => ({
        day: `Day ${i + 1}`,
        price: 900 + Math.random() * 100,
      })),
    },
  ],
};

export const airportData = [
  { name: "Murtala Muhammed International", flights: 12489 },
  { name: "Nnamdi Azikiwe International", flights: 934489 },
  { name: "Mallam Aminu Kano International", flights: 10722 },
  { name: "Port Harcourt International", flights: 9823 },
  { name: "Akanu Ibiam International", flights: 489 },
  { name: "Murtala Muhammed Domestic", flights: 89 },
];
export const flightData = {
  international: [
    {
      date: "24 Jan",
      arrivalsCommercial: 120000,
      departuresCommercial: 110000,
      arrivalsMilitary: 30000,
      departuresMilitary: 28000,
      arrivalsPrivate: 25000,
      departuresPrivate: 23000,
    },
    {
      date: "31 Jan",
      arrivalsCommercial: 130000,
      departuresCommercial: 125000,
      arrivalsMilitary: 35000,
      departuresMilitary: 34000,
      arrivalsPrivate: 26000,
      departuresPrivate: 24000,
    },
    {
      date: "7 Feb",
      arrivalsCommercial: 150000,
      departuresCommercial: 140000,
      arrivalsMilitary: 38000,
      departuresMilitary: 36000,
      arrivalsPrivate: 27000,
      departuresPrivate: 25000,
    },
    {
      date: "14 Feb",
      arrivalsCommercial: 160000,
      departuresCommercial: 155000,
      arrivalsMilitary: 40000,
      departuresMilitary: 39000,
      arrivalsPrivate: 28000,
      departuresPrivate: 26000,
    },
  ],
  domestic: [
    {
      date: "24 Jan",
      arrivalsCommercial: 360000,
      departuresCommercial: 330000,
      arrivalsMilitary: 90000,
      departuresMilitary: 84000,
      arrivalsPrivate: 75000,
      departuresPrivate: 69000,
    },
    {
      date: "31 Jan",
      arrivalsCommercial: 390000,
      departuresCommercial: 375000,
      arrivalsMilitary: 105000,
      departuresMilitary: 102000,
      arrivalsPrivate: 78000,
      departuresPrivate: 72000,
    },
    {
      date: "7 Feb",
      arrivalsCommercial: 450000,
      departuresCommercial: 420000,
      arrivalsMilitary: 114000,
      departuresMilitary: 108000,
      arrivalsPrivate: 81000,
      departuresPrivate: 75000,
    },
    {
      date: "14 Feb",
      arrivalsCommercial: 480000,
      departuresCommercial: 465000,
      arrivalsMilitary: 120000,
      departuresMilitary: 117000,
      arrivalsPrivate: 84000,
      departuresPrivate: 78000,
    },
  ],
};

export const reports = {
  31: [
    {
      title: "PMS - Aug 12-17",
      file: "",
    },
    {
      title: "DPK - Aug 12-17",
      file: "",
    },
    {
      title: "AGO - Aug 12-17",
      file: "",
    },
    {
      title: "ICE - Aug 12-17",
      file: "",
    },
  ],
  30: [
    {
      title: "PMS - Aug 12-17",
      file: "",
    },
    {
      title: "DPK - Aug 12-17",
      file: "",
    },
    {
      title: "AGO - Aug 12-17",
      file: "",
    },
    {
      title: "ICE - Aug 12-17",
      file: "",
    },
  ],
  29: [
    {
      title: "PMS - Aug 12-17",
      file: "",
    },
    {
      title: "DPK - Aug 12-17",
      file: "",
    },
    {
      title: "AGO - Aug 12-17",
      file: "",
    },
    {
      title: "ICE - Aug 12-17",
      file: "",
    },
  ],
  28: [
    {
      title: "PMS - Aug 12-17",
      file: "",
    },
    {
      title: "DPK - Aug 12-17",
      file: "",
    },
    {
      title: "AGO - Aug 12-17",
      file: "",
    },
    {
      title: "ICE - Aug 12-17",
      file: "",
    },
  ],
};

export const dollarRates = [
  { time: "24 Jan, 2025", price: 1200 },
  { time: "25 Jan, 2025", price: 1350 },
  { time: "26 Jan, 2025", price: 980 },
  { time: "27 Jan, 2025", price: 1420 },
  { time: "28 Jan, 2025", price: 1100 },
  { time: "29 Jan, 2025", price: 1250 },
  { time: "30 Jan, 2025", price: 1470 },
];

export const news = [
  {
    paper: "Vanguard",
    tags: [{ tag: "ICE", color: "#00796B" }],
    title:
      "Shareholders Enjoy a Massive Windfall as BP Expands Global Operations",
    content:
      "BP’s shareholders can expect a multibillion-dollar payout this year after the oil giant reported better than expected quarterly profits of almost $2.8 billion and set out plans to develop a new oil hub in the Gulf of Mexico.",
    img: "",
  },
  {
    paper: "Vanguard",
    tags: [{ tag: "ICE", color: "#00796B" }],
    title: "Eni granted regulator consent for NAOC sales to Oando",
    content:
      "BP’s shareholders can expect a multibillion-dollar payout this year after the oil giant reported better than expected quarterly profits of almost $2.8 billion and set out plans to develop a new oil hub in the Gulf of Mexico.",
    img: "",
  },
  {
    paper: "Vanguard",
    tags: [{ tag: "ICE", color: "#00796B" }],
    title: "Eni granted regulator consent for NAOC sales to Oando",
    content:
      "BP’s shareholders can expect a multibillion-dollar payout this year after the oil giant reported better than expected quarterly profits of almost $2.8 billion and set out plans to develop a new oil hub in the Gulf of Mexico.",
    img: "",
  },
  {
    paper: "Vanguard",
    tags: [{ tag: "ICE", color: "#00796B" }],
    title: "Eni granted regulator consent for NAOC sales to Oando",
    content:
      "BP’s shareholders can expect a multibillion-dollar payout this year after the oil giant reported better than expected quarterly profits of almost $2.8 billion and set out plans to develop a new oil hub in the Gulf of Mexico.",
    img: "",
  },
];

export const PMSWeekData = [
  { day: "MON", price: 400.5 },
  { day: "TUE", price: 800.0 },
  { day: "WED", price: 950.0 },
  { day: "THU", price: 850.0 },
  { day: "FRI", price: 750.0 },
  { day: "SAT", price: 650.0 },
  { day: "SUN", price: 910.0 },
];

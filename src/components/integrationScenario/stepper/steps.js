import Dummy1 from "../stepperSelector/dummy.1.component";
import Dummy2 from "../../dummy/dummy.2.component";
import RouteBuilder from "../stepperSelector/route.builder.component";

export const Steps = [
    {stepDesc: "Pattern", component: Dummy1, btnDesc: "Next"},
    {stepDesc: "Test", component: Dummy2, btnDesc: "Next"},
    {stepDesc: "Route Builder", component: RouteBuilder, btnDesc: "Finish"}
];

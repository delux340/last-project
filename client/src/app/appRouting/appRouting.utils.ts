import { Route } from "@angular/router"
import { SignUpComponent } from "../components/sign-up/sign-up.component"
import { SignInComponent } from "../components/sign-in/sign-in.component"
import { HomeComponent } from "../components/home/home.component"
import { TokenGaurdService } from "../services/tokenGaurd/token-gaurd.service"

interface CustomRoute extends Route {
    children?: Array<CustomRoute>;
    title?: string;
    isVisible?: boolean;
}

export const routes: Array<CustomRoute> = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "signup", title: "Sign Up", isVisible: true, component: SignUpComponent },
    { path: "signin", title: "Sign In", isVisible: true, component: SignInComponent },
    { path: "home", title: "Home", isVisible: true, component: HomeComponent,canActivate:[TokenGaurdService] }
]

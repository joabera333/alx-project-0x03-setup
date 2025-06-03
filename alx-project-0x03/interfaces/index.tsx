// Button component interface

import { ReactNode } from "react";

export interface ButtonProps {
	buttonLabel: string;
	buttonSize?: string;
	buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
	action?: () => void;
}

export interface PageRouteProps {
	pageRoute: string;
}

// Layout component interface
/*export interface LayoutProps {
	children: React.ReactNode;
	showHeader?: boolean;
	showFooter?: boolean;
}
*/

export interface LayoutProps {
	children: ReactNode;
}

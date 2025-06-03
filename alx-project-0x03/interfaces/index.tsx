// Button component interface
export interface ButtonProps {
	action: () => void;
	buttonLabel: string;
	buttonBackgroundColor: "blue" | "green" | "orange";
	className?: string;
}

// Layout component interface
export interface LayoutProps {
	children: React.ReactNode;
	showHeader?: boolean;
	showFooter?: boolean;
}

// Page routing interface
export interface PageRouteProps {
	pageRoute: string;
}

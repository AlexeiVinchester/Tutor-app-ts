import { Container } from "@mui/material";
import { PageHeaderWrapperProps } from "./interface/PageHeaderWrapper.interface";

const PageHeaderWrapper = ({ children, heightInPx }: PageHeaderWrapperProps) => {
    return (
        <div className={`w-full bg-bg-info h-[${heightInPx}px]`}>
            <Container>
                <div className="flex flex-col items-center justify-between pt-10 sm:flex-row">
                    {children}
                </div>
            </Container>
        </div>
    );
};

export { PageHeaderWrapper };


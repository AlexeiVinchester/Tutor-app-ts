import { Container } from "@mui/material";
import { IChildren } from "../../share/interfaces/children.interface"
import React from "react";

const StatisticsMainWrapper = React.memo(({ children }: IChildren) => {
    return (
        <div className="flex flex-col min-h-full pb-10 bg-statistics-back">
            <Container>
                {children}
            </Container>
        </div>
    );
});

export { StatisticsMainWrapper };

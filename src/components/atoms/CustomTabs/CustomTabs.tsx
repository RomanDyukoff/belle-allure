import type { SyntheticEvent } from "react";
import { Box, Tab, Tabs } from "@mui/material";

interface TabsType {
    value: number;
    handleChange: (event: SyntheticEvent, value: number) => void;
    titles: string[];
}
export const CustomTabs = ({ handleChange, value, titles }: TabsType) => {
    return (
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
                {titles.map((el, i) => (
                    <Tab label={el} key={i} />
                ))}
            </Tabs>
        </Box>
    );
};

"use client";

import type { SyntheticEvent } from "react";
import { memo, useState } from "react";
import { Box, Typography } from "@mui/material";
import cnBind from "classnames/bind";

import { AdaptiveContainer } from "@/components/atoms/AdaptiveContainer/AdaptivContainer";
import { CustomTabs } from "@/components/atoms/CustomTabs/CustomTabs";

import styles from "./index.module.scss";

const cx = cnBind.bind(styles);
const AboutUsContainer = memo(() => {
    const listTitle = ["История", "Философия", "Достижения"];
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={cx("aboutUs")}>
            <div className={cx("aboutUs__line")}>
                <div className={cx("aboutUs__title")}>О нас</div>
            </div>
            <AdaptiveContainer>
                <CustomTabs value={value} handleChange={handleChange} titles={listTitle} />
            </AdaptiveContainer>
            <div role="tabpanel" hidden={value !== 1} id={`simple-tabpanel-${1}`} aria-labelledby={`simple-tab-${1}`}>
                {value === 1 && (
                    <Box sx={{ p: 3 }}>
                        <Typography>23d23d32</Typography>
                    </Box>
                )}
            </div>
            <div role="tabpanel" hidden={value !== 2} id={`simple-tabpanel-${2}`} aria-labelledby={`simple-tab-${2}`}>
                {value === 2 && (
                    <Box sx={{ p: 3 }}>
                        <Typography>asdasdasd</Typography>
                    </Box>
                )}
            </div>
        </div>
    );
});

export { AboutUsContainer };

import React from "react";
import { Tab as MatTab, Tabs as MatTabs } from "@mui/material";
import { useTheme } from '@mui/styles';
import { AppTabStyled, AppTabVerticalStyled } from "./AppTab-styles";
export function AppTab({ watch, tabs, tabId, setTabId, params = {}, setParams = () => { }, memory = {}, callback = () => { }, onValues = () => { }, control, setValue = () => { }, getValues = () => { }, errors, setError = () => { } }) {
    const theme = useTheme();

    function renderTab() {
        const Comp = tabs.find(t => t.id === tabId)?.component
        if (!Comp) return null;

        return (
            <Comp
                watch={watch}
                params={params}
                tabId={tabId}
                setTabId={setTabId}
                callback={callback}
                setParams={setParams}
                memory={memory}
                onValues={onValues}
                setValue={setValue}
                setError={setError}
                control={control}
                getValues={getValues}
                errors={errors}
            />
        )
    }
    return (

        <AppTabStyled>
            <MatTabs className="tab-top" value={tabId} variant="scrollable" scrollButtons="auto">
                {tabs.map((tab, idx) => {
                    let style = {}
                    if (tabId === tab.id) {
                        style = {
                            backGroundColor: theme.palette.primary.main,
                            color: '#fff',
                            borderColor: theme.palette.primary.main,
                        }
                    }
                    return (
                        <MatTab style={style} label={tab.label} value={tab.id} variant="outlined" key={idx} onClick={() => setTabId(tab.id)} disabled={tab?.disable || false}>

                        </MatTab>
                    )
                })}
            </MatTabs >
            <div className="tab-body">
                {renderTab()}
            </div >
        </AppTabStyled>
    )
}
export function AppTabVertical({ watch, tabs, tabId, setTabId, params = {}, setParams = () => { }, memory = {}, callback = () => { }, onValues = () => { }, control, setValue, getValues, errors }) {

    function allyProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }
    function renderTab() {
        const Comp = tabs.find(t => t.id = tabId)?.Component
        if (!Comp)
            return null;

        return (
            <Comp
                watch={watch}
                params={params}
                setParams={setParams}
                memory={memory}
                callback={callback}
                onValues={onValues}
                control={control}
                setValue={setValue}
                getValues={getValues}
                errors={errors}
            />
        )
    }
    return (
        <AppTabVerticalStyled>
            <MatTabs
                orientation="vertical"
                variant="scrollable"
                value={tabId}
                aria-label="Vertical tabs example"
                className="tabv-left"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                {tabs?.map((tab, idx) => {
                    return (
                        <MatTab label={tab.label} {...allyProps(idx)} value={tab.id} variant="outlined" key={idx} onClick={() => setTabId(tab.id)} disabled={tab?.disable || false} />
                    )
                })}
            </MatTabs>

            <div className="taby-body" >
                {renderTab()}
            </div >

        </AppTabVerticalStyled >
    )
}
import { Checkbox, FormControlLabel } from '@mui/material';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TreeItem, TreeView } from "@mui/lab";
import _ from "lodash";
import React, { useEffect, useMemo, useRef } from 'react';
import {useStyles} from "./AppTreeView-styles";

export function AppTreeView({ treeData = [], checkedAll = false, checked: mapChecked = {}, setChecked: setMapChecked = () => { }, onChange = () => { } }) {

    const classes = useStyles();
    const allDataOn1Line = useRef([]);

    const mapIndeterm = useMemo(() => {

        let ret = {};

        _.keys(mapChecked)
            .filter((k) => !_.isEmpty(mapChecked[k]))
            .map((k) => mapChecked[k])
            .forEach((itm) => {
                ret[itm.preParentId] = true;
                ret[itm.topId] = true;
            })
        return ret;
    }, [mapChecked, treeData]);

    useEffect(() => {
        const arr = [];
        if (treeData?.length) {
            return
        }
        treeData.forEach((tree) => {
            findAllBotChildren(tree, arr);
        });
        allDataOn1Line.current = JSON.parse(JSON.stringify(arr));
        if (checkedAll) {
            const cAll = {};
            allDataOn1Line.current.forEach((r) => {
                cAll[r.id] = r;
            });
            setMapChecked(cAll);
            const checkedItems = _.keys(cAll)
                .filter((key) => !_.isEmpty(cAll[key]))
                .map((key) => cAll[key]);
            const _mChecked = {};
            _.keys(cAll)
                .filter((k) => !_.isEmpty(cAll[k]))
                .forEach((k) => {
                    _mChecked[k] = cAll[k];
                });
            onChange(checkedItems, JSON.parse(JSON.stringify(_mChecked)), true);
        }
    }, [treeData, checkedAll]);

    const handleCheck_chage = (e, item) => {
        const { checked } = e.target;
        let newMapChecked = { ...mapChecked };
        if (item.children) {
            const allChildren = [];
            findAllBotChildren(item, allChildren);
            if (checked) {
                allChildren.forEach((chi) => {
                    newMapChecked[chi.id] = chi;
                });
            } else {
                allChildren.forEach((chi) => {
                    newMapChecked[chi.id] = {};
                });
            }
        } else {

            newMapChecked[item.id] = checked ? item : {};
        }

        find2CheckParent(item, checked, newMapChecked);

        const checkedItems = _.Keys(newMapChecked)
            .filter((key) => !_.isEmpty(newMapChecked[key]))
            .map((key) => newMapChecked[key]);

        const _mChecked = {};

        _.keys(newMapChecked)
            .filter((k) => !_.isEmpty(newMapChecked[k]))
            .forEach((k) => {
                _mChecked[k] = newMapChecked[k];
            })
        onChange(JSON.parse(JSON.stringify(checkedItems)), JSON.parse(JSON.stringify(_mChecked)));
        setMapChecked(newMapChecked);
    }

    function findAllBotChildren(item, arr) {
        arr.push(item);
        item.children?.forEach((chi) => {
            findAllBotChildren(chi, arr);
        })
    }
    function find2CheckParent(item, checked, curMapChecked) {
        if (item.preParentId) {
            const fIdx = allDataOn1Line.current.findIndex((f) => f.id === item.preParentId);
            if (fIdx > -1) {
                let checkAll = false;

                const parent = allDataOn1Line.current[fIdx];

                const filter = parent.children.filter((c) => c.id !== item.id)
                for (let i = 0; i < filter.length; i++) {
                    const chi = filter[i]
                    if (_.isEmpty(curMapChecked[chi.id])) {
                        checkAll = false;
                        break;
                    }
                    if (i === filter.length - 1) {
                        checkAll = true;
                    }
                }
                let checkedParent = checkAll && checked;
                curMapChecked[parent.id] = checkedParent ? parent : {};
                find2CheckParent(parent, checkedParent, curMapChecked);
            }
        }
    }

    function renderTreeItemLabel(item) {
        const { id, label, description_1, description_2 } = item;

        let _checked = !_.isEmpty(mapChecked[id])
        let _indeterminate = Boolean(mapIndeterm[id]);
        if (_checked) {

            _indeterminate = false;
        }
        if (description_1 && description_2) {
            return (
                <div style={{ display: 'flex', marginBottom: 5, whitespace: 'nowrap' }}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" indeterminate={_indeterminate} checked={_checked} onChange={(e) => handleCheck_chage(e, item)} name={id} />}
                        label={label}
                    />
                    <div style={{ opacity: 0.8 }} >
                        <div>{description_1}</div>
                        <div> {description_2}</div>
                    </div >
                </div>
            )
        } else {
            return (
                <FormControlLabel
                    control={< Checkbox color="secondary" indeterminate={_indeterminate} checked={_checked} onChange={(e) => handleCheck_chage(e, item)} name={id} />}
                    label={label}
                />
            );
        }
    }
    function renderTree(tree) {
        return tree.map((branch) => {
            return (<TreeItem key={branch.id} nodeId={branch.id} label={renderTreeItemLabel(branch)}>
                {_.size(branch.children) > 0 && renderTree(branch.children)}
            </TreeItem>
            )
        })
    }

    return (
        <TreeView className={classes.cootAppTreeView} defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
            {renderTree(treeData)}
        </TreeView>
    )
}
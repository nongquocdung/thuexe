import {
  Box,
  Checkbox,
  IconButton,
  Radio,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ChevronLeftIcon from "@mui/IconS-material/ChevronLeft";
import ChevronRightIcon from "@mui/IconS-material/ChevronRight";
import DescSortIcon from "@mui/IconS-material/KeyboardArrowDown";
import AscSortIcon from "@mui/IconS-material/KeyboardArrowUp";
import MoreVertIcon from "@mui/IconS-material/MoreVert";
import NoneSortIcon from "@mui/IconS-material/UnfoldMore";
import _ from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { AppLoading } from "../AppLoading"; 
import AppMenu from "../AppMenu"; 
import { AppSelect } from "../AppSelect/AppSelect"; 
import { AppButton } from "../AppButton/AppButton"; /////////////////////
import { PageSizeItems } from "./AppTable-const"; 
import { useStyles } from "./AppTable.styled";

const CONFIG_DEFAULT = {
  isPagination: true,
  maxHeight: 500,
  hasCheckbox: false,
  hasNoCol: true,
  hasRadio: false,
  isMarginBot: false,
  checkById: false,
  hasHead: true,
  isStickyHeader: true,
  localPagination: false,
  hasFunc: true,
  setHeight: true,
};

export const TABLE_EVENT_NAME = {
  ACTION: "ACTION",
  CHANGE_CHECK: "CHANGE_CHECK",
  CHANGE_RADIO: "CHANGE_RADIO",
  CHANGE_PAGE: "CHANGE_PAGE",
  LINK: "LINK",
  DELETE: "delete",
  CHANGE_PAGE_SIZE: "CHANGE_PAGE_SIZE",
  SORT: "SORT",
  EDIT: "edit",
  VIEW: "view",
  ICON_CLICK: "ICON_CLICK",
  BUTTON: "BUTTON",
};

export const TABLE_CONST = {
  DELETE: "delete",
  EDIT: "edit",
  VIEW: "view",
};
export function AppTable({
  loading = false,
  head = [],
  rows = [],
  moreCols = [],
  mapChecked = {}, // index
  setMapChecked = () => {}, // index
  mCheckedId = {}, // id
  setMCheckedId = () => {}, //id
  radioVal = null,
  setRadioVal = () => {},
  page = 1,
  setPage = () => {},
  total: inTotal = 1,
  pageSize = 20,
  setPageSize = () => {},
  callBack = () => {},
  config: inConfig = {},
  readOnly = false,
  screenName = null,
} = {}) {
  const classes = useStyles();
  const config = {
    ...CONFIG_DEFAULT,
    ...inConfig,
  };

  // const [page, setPage] = useState(inPage);
  const [checkedAll, setCheckedAll] = useState(true);
  // const [checkedRows, setCheckedRows]= useState({});
  const [anchorEl, setAnchorEl] = useState();
  const [mapSort, setMapSort] = useState({});

  useEffect(() => {
    if (screenName) {
      // save by screen name
      const pageSizeLocal = localStorage.getItem(`${screenName}_pageSize`);
      pageSizeLocal && setPageSize(pageSizeLocal);
    }
  }, []);

  useEffect(() => {
    setCheckedAll(false);
    // setCheckedRows({});
  }, [rows]);

  useEffect(() => {
    const mapS = initSort(head);
    setMapSort(mapS);
  }, [head]);

  const totalPage = useMemo(() => {
    if (!pageSize) {
      return 0;
    }
    let ret;

    if (config.localPagination) {
      ret = _.ceil(_.size(rows) / pageSize);
    } else {
      ret = _.ceil(inTotal / pageSize);
    }

    return ret;
  }, [inTotal, rows, pageSize]);
  const mRows = useMemo(() => {
    if (config.localPagination) {
      return _.take(_.drop(rows, (page - 1) * pageSize), pageSize);
    }
    return rows;
  }, [rows, pageSize, page]);
  useEffect(() => {
    if (page > totalPage && totalPage > 0) {
      setPage(totalPage);
    }
  }, [mRows, totalPage]);
  function handleChangePage(numChange) {
    if (config.localPagination) {
      setPage((pre) => parseInt(pre) + parseInt(numChange));
      handleCallback(TABLE_EVENT_NAME.CHANGE_PAGE, {
        page: parseInt(page) + parseInt(numChange),
        number: numChange,
        ...getKeySort(),
      });
    } else {
      handleCallback(TABLE_EVENT_NAME.CHANGE_PAGE, {
        page: page,
        number: numChange,
        ...getKeySort(),
      });
    }
  }
  const onChangePage = (e) => {
    const { value } = e.target;
    setPage(value);
  };
  const handlePageSize_callback = (pageSize) => {
    if (screenName) {
      localStorage.setItem(`${screenName}_pageSize`, pageSize);
    }
    handleCallback(TABLE_EVENT_NAME.CHANGE_PAGE_SIZE, {
      pageSize,
      ...getKeySort(),
    });
  };
  const goToPage = (e) => {
    if (e.keyCode === 13) {
      onBlur();
    } else if (
      ![8, 37, 39, 40].includes(e.keyCode) &&
      (e.keyCode < 48 || e.keyCode > 57)
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const onBlur = () => {
    let _page = parseInt(page);

    if (page === "" || parseInt(page) < 1) {
      _page = 1;
    } else if (parseInt(page) > totalPage) {
      _page = totalPage;
    }
    setPage(_page);

    handleCallback(TABLE_EVENT_NAME.CHANGE_PAGE, {
      page: _page,
      number: 0,
      ...getKeySort(),
    });
  };
  const handleChangeCheckedAll = (e) => {
    setCheckedAll(e.target.checked);

    let ret = {};

    let ret2 = {};

    if (e.target.checked) {
      if (_.size(rows)) {
        rows.forEach((row, idx) => {
          ret2[row?.id] = true;

          ret[idx] = true;
        });
      }
    }

    let getRet = config?.checkById ? ret2 : ret;
    handleCallback(TABLE_EVENT_NAME.CHANGE_CHECK, getRet);
    setMCheckedId(getRet);
    setMapChecked(ret);
  };
  const handleChangeChecked = (e, index, row) => {
    const chk = e.target.checked;

    if (!chk && checkedAll) {
      setCheckedAll(false);
    } else if (chk) {
      let keys = [];
      if (config.checkById) {
        keys = _.keys(mCheckedId).filter(
          (id) => id !== row?.id && mCheckedId[id]
        );
      } else {
        keys = _.keys(mapChecked).filter((k) => index !== k && mapChecked[k]);
      }

      if (keys?.length >= rows.length - 1) {
        setCheckedAll(true);
      } else {
        setCheckedAll(false);
      }
    }

    if (config.checkById) {
      setMCheckedId((pre) => {
        const ret2 = {
          ...pre,
          [row?.id]: chk,
        };

        handleCallback(TABLE_EVENT_NAME.CHANGE_CHECK, ret2);
        return ret2;
      });
    } else {
      setMapChecked((pre) => {
        const ret = {
          ...pre,
          [index]: chk,
        };
        handleCallback(TABLE_EVENT_NAME.CHANGE_CHECK, ret);
        return ret;
      });
    }
  };

  const handleChangeRadio = (e, row, index) => {
    const { value } = e.target;
    handleCallback(TABLE_EVENT_NAME.CHANGE_RADIO, {
      row,
      selected: value,
    });
    setRadioVal(value);
  };

  const handleSort = (col) => {
    setMapSort((pre) => {
      let newType;

      if (["NONE", "DESC"].includes(pre[col.id].type)) {
        newType = "ASC";
      } else {
        newType = "DESC";
      }

      const ret = {
        id: col.id,

        type: newType,
      };

      handleCallback(TABLE_EVENT_NAME.SORT, ret);
      return {
        ...initSort(head),
        [col.id]: ret,
      };
    });
  };

  function handleCallback(eventName, data, id) {
    callBack({ eventName, data, headId: id });
  }
  function initSort(head) {
    const ret = {};

    head

      .filter((h) => h.sort)

      .forEach((h) => {
        const sort = {
          id: h.id,
          type: "NONE",
        };

        ret[h.id] = sort;
      });
    return ret;
  }

  function getKeySort() {
    const keys = Object.keys(mapSort).filter(
      (key) => mapSort[key].type !== "NONE"
    );
    if (keys.length > 0) {
      return {
        sortBy: mapSort[keys[0]].id,

        orderBy: mapSort[keys[0]].type,
      };
    }
    return {};
  }
  if (!_.size(head)) {
    return null;
  }
  function renderRows(row, rowIdx) {
    const ret = [];

    let clazzName = row.style || "";
    if (rowIdx % 2 === 0) {
      clazzName += "r-even";
    }
    let _style = {};

    if (row?.row_style) {
      _style = row?.row_style;
    }
    let align = (h) => (h.align ? `${h.align}` : "left");
    if (config.hasCheckbox) {
      let checked;
      if (config.checkById) {
        checked = Boolean(mCheckedId[row?.id]);
      } else {
        checked = Boolean(mapChecked[rowIdx]);
      }
      if (checked === undefined) {
        checked = false;
      }
      let _onChange = (e) => handleChangeChecked(e, rowIdx, row);
      if (readOnly) {
        _onChange = null;
      }
      const checkComp = (
        <TableCell
          className={`r-cell r-c-check ${clazzName}`}
          style={_style}
          key={`check-${rowIdx}`}
        >
          <Checkbox
            checked={checked}
            onChange={_onChange}
            inputProps={{ "aria-label": "primary checkbox" }}
            color="secondary"
          />
        </TableCell>
      );
      ret.push(checkComp);
    }
    if (config.hasRadio) {
      let checked = row.id?.toString() === radioVal?.toString();
      let _onChange = (e) => handleChangeRadio(e, row, rowIdx);

      if (readOnly) {
        _onChange = null;
      }

      const checkComp = (
        <TableCell
          className={`r-cell r-c-radio ${clazzName}`}
          style={_style}
          key={`radio-${rowIdx}`}
        >
          <Radio
            checked={checked}
            value={row.id}
            onChange={_onChange}
            inputProps={{ "aria-label": "primary radio" }}
            color="secondary"
          />
        </TableCell>
      );

      ret.push(checkComp);
    }
    if (config.hasNoCol) {
      const _pg = page > 0 ? page : 1;
      const seq = (_pg - 1) * pageSize + rowIdx + 1;
      const noComp = (
        <TableCell
          className={`r-cell r-c-no ${clazzName}`}
          style={_style}
          key={`no-${rowIdx + 1}`}
        >
          {seq}
        </TableCell>
      );
      ret.push(noComp);
    }
    head.forEach((h, idx) => {
      let _stl = {};
      if (!config.hasHeal) {
        _stl.width = h.width;

        _stl.minWidth = h.width;
        _stl.maxWidth = h.width;
      }
      if (!h.category) {
        let str = h.format
          ? h.format(
              row[h.id],
              row,
              (payload) => handleCallback(TABLE_EVENT_NAME.BUTTON, payload),
              h.id
            )
          : row[h.id];
        if (h.link) {
          if (!row.disLink && !row[`${h.id}_disLink`]) {
            str = (
              <a
                className="cell-link"
                onClick={() => {
                  handleCallback(TABLE_EVENT_NAME.LINK, row, h.id);
                }}
                style={{ color: "blue" }}
              >
                {" "}
                {str}
              </a>
            );
          } else {
            str = <a>{str}</a>;
          }
        } else if (h.iconLink) {
          str = (
            <div
              className="cell-link"
              onClick={() => {
                handleCallback(TABLE_EVENT_NAME.ICON_CLICK, row);
              }}
            >
              {str}
            </div>
          );
        }
        const render = h.component ? h.component(h.id, row) : str;
        const comp = (
          <TableCell
            className={`r-cell ${clazzName} ${h.class || ""}`}
            align={align(h)}
            style={{ ..._style, ..._stl }}
            key={idx}
          >
            {render}{" "}
          </TableCell>
        );

        ret.push(comp);
      } else if (h.category === "SELECT") {
        const Comp = (
          <TableCell key={idx} className="r-cell">
            <AppSelect
              items={h.items}
              value={row[h.id]}
              setValue={(val) => {
                handleCallback("SELECT", {
                  key: h.id,
                  value: val,
                  oldValue: row[h.id],
                  rowIndex: rowIdx,
                  row,
                });
                row[h.id] = val;
              }}
            />
          </TableCell>
        );

        ret.push(Comp);
      } else if (h.category === "MENU") {
        let Comp;

        if (!config.hasFunc || row.disAction) {
          Comp = null;
        } else {
          Comp = (
            <IconButton
              size="small"
              color="primary"
              onClick={(e) => {
                setAnchorEl({
                  open: true,
                  elementRef: e.target,
                  data: row,
                  rowIndex: rowIdx,
                });
              }}
            >
              <MoreVertIcon />{" "}
            </IconButton>
          );
        }
        Comp = (
          <TableCell
            key={idx}
            classhiame={`r-cell r-c-act ${clazzName}`}
            align={align(h)}
            style={_style}
          >
            {Comp}
          </TableCell>
        );
        ret.push(Comp);
      } else if (h.category === TABLE_EVENT_NAME.BUTTON) {
        let color = "primary";
        if (row.highlight) {
          color = "secondary";
        }
        let Comp;
        if (h.iconButton) {
          Comp = (
            <TableCell
              className={`r-cell ${clazzName} ${h.class || ""}`}
              align={align(h)}
              style={_style}
              key={idx}
            >
              <IconButton
                color={h.color || color}
                onClick={() =>
                  handleCallback(TABLE_EVENT_NAME.BUTTON, {
                    key: h.id,
                    rowIndex: rowIdx,
                    row,
                  })
                }
              >
                <h.iconButton />
              </IconButton>
            </TableCell>
          );
        } else {
          Comp = (
            <TableCell
              className={`r-cell ${clazzName} ${h.class || ""}`}
              align={align(h)}
              style={_style}
              key={idx}
            >
              <AppButton
                color={h.color || color}
                label={h.label_btn}
                onClick={() =>
                  handleCallback(TABLE_EVENT_NAME.BUTTON, {
                    key: h.id,
                    rowIndex: rowIdx,
                    row,
                  })
                }
              />
            </TableCell>
          );
        }
        ret.push(Comp);
      }
    });
    // second columns

    if (_.size(moreCols)) {
      moreCols.forEach((m, idx) => {
        const comp = (
          <TableCell
            className={`r-cell ${clazzName}`}
            align={align(m)}
            style={_style}
            key={`more-${idx}`}
          >
            {m.component(row[m.id])}
          </TableCell>
        );
        ret.push(comp);
      });
    }

    return ret;
  }
  function renderHead() {
    const ret = [];
    if (config.hasCheckbox) {
      let _onChange = handleChangeCheckedAll;

      if (readOnly) {
        _onChange = null;
      }
      const noComp = (
        <TableCell width={20} className="h-cell e-c-check" key={"checkall-a"}>
          <Checkbox
            className="chk-all"
            checked={checkedAll}
            onChange={_onChange}
            InputProps={{ "aria-label": "primary checkbox" }}
          />
        </TableCell>
      );
      ret.push(noComp);
    }
    if (config.hasRadio) {
      const noComp = (
        <TableCell width={50} className="h-cell" key={"radio-0"}>
          <Typography></Typography>{" "}
        </TableCell>
      );
      ret.push(noComp);
    }
    // no head

    if (config.hasNoCol) {
      const noComp = (
        <TableCell
          width={50}
          style={{ minWidth: 50, maxWidth: 50 }}
          className="h-cell"
          key={`ro-0`}
        >
          <Typography>No.</Typography>
        </TableCell>
      );
      ret.push(noComp);
    }
    // primary head

    head.forEach((h, idx) => {
      const cellProps = {};

      if (h.width) {
        cellProps.width = h.width;
        cellProps.style = {
          width: h.width,
          maxWidth: h.width,
          minWidth: h.width,
        };
      }
      cellProps.align = h.align ? h.align : "left";
      let lbl;
      if (h.sort) {
        const _type = _.get(mapSort, [h.id, "type"], "");
        let IconS;
        if (_type === "ASC") {
          IconS = AscSortIcon;
        } else if (_type === "DESC") {
          IconS = DescSortIcon;
        } else {
          IconS = NoneSortIcon;
        }
        lbl = (
          <div>
            {IconS !== NoneSortIcon && (
              <div
                variant="text"
                onClick={() => handleSort(h)}
                className={
                  h.align == "right"
                    ? "view-sort view-align-right"
                    : "view-sort"
                }
              >
                {h?.icon && <h.icon />}
                {!h?.icon && <Typography>{h.label}</Typography>}
                {IconS === NoneSortIcon && <IconS style={{ opacity: 0.3 }} />}
                {IconS !== NoneSortIcon && <IconS />}
              </div>
            )}
            {IconS === NoneSortIcon && (
              <div
                variant="text"
                onClick={() => handleSort(h)}
                className={
                  h.align === "right"
                    ? "view-sorted view-align-right"
                    : "view-sorted"
                }
              >
                {h?.icon && <h.ion />}
                {!h?.icon && <Typography>{h.label}</Typography>}
                {IconS === NoneSortIcon && <IconS style={{ opacity: 0.3 }} />}
                {IconS !== NoneSortIcon && <IconS />}
              </div>
            )}
          </div>
        );
      } else {
        lbl = h?.icon ? (
          <h.icon style={{ marginTop: 8, color: "white" }} />
        ) : (
          <Typography style={{ padding: "10px 0px " }}>{h.label}</Typography>
        );
      }
      if (!config.hasFunc && h.category === "MENU") {
      } else {
        const comp = (
          <TableCell {...cellProps} className="h-cell" key={`primary-${idx}`}>
            {lbl}
          </TableCell>
        );
        ret.push(comp);
      }
    });
    // second head

    if (_.size(moreCols)) {
      moreCols.forEach((m, idx) => {
        const cellProps = {};
        const _style = {};

        if (m.width) {
          cellProps.width = m.width;
          _style["width"] = m.width;
          _style["minWidth"] = m.width;
          _style["maxwidth"] = m.width;
        }
        cellProps.align = m.align ? m.align : "left";

        const comp = (
          <TableCell
            {...cellProps}
            style={_style}
            className="h-cell"
            key={`more-${idx}`}
          >
            {m.label}
          </TableCell>
        );
        ret.push(comp);
      });
    }
    return ret;
  }
  function renderMenu() {
    const findIdx = head.findIndex(
      (h) => h.id === _.lowerCase(TABLE_EVENT_NAME.ACTION)
    );

    if (findIdx < 0) {
      return null;
    }
    return (
      <AppMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        items={_.get(head, [findIdx, "items"], [])}
        onAction={(params) => {
          handleCallback(TABLE_EVENT_NAME.ACTION, params);
          setAnchorEl((pre) => {
            return {
              ...pre,
              open: false,
            };
          });
        }}
      />
    );
  }
  function renderPagination() {
    return (
      <Box className="t-footer">
        <Box className="f-left">
          <div className="l-page">
            <Typography> Rows per page: </Typography>
            <AppSelect
              Items={PageSizeItems}
              value={pageSize}
              setValue={setPageSize}
              callback={handlePageSize_callback}
            />
          </div>{" "}
        </Box>

        <Box className="f-right">
          <div className="r-page">
            {" "}
            <Typography>Page</Typography>
            <TextField
              size="small"
              variant="outlined"
              style={{ width: "80px", backgroundColor: "#fff" }}
              value={page}
              onChange={onChangePage}
              onKeyDown={goToPage}
              onBlur={onBlur}
            />
            <Typography>of (totalPage)</Typography>
          </div>

          <div className="r-actions">
            <IconButton
              size="small"
              color="primary"
              disabled={page <= 1 || loading}
              onClick={() => handleChangePage(-1)}
            >
              <ChevronLeftIcon fontSize="large" />
            </IconButton>
            <IconButton
              size="small"
              color="primary"
              disabled={page > totalPage || loading}
              onClick={() => handleChangePage(1)}
            >
              <ChevronRightIcon fontsize="large" />{" "}
            </IconButton>
          </div>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={classes.rootAppTable}>
      <TableContainer
        style={{ height: config.setHeight ? config.maxHeight : "unset" }}
      >
        <Table
          stickyHeader={config.isStickyHeader || false}
          className={classes.table}
          aria-label="app table"
        >
          {config.hasHead && (
            <TableHead className="t-head">
              <TableRow> {renderHead()}</TableRow>
            </TableHead>
          )}

          <TableBody className="t-body">
            {head &&
              mRows?.map((row, idx) => {
                return (
                  <TableRow key={idx} className="b-row">
                    {renderRows(row, idx)}
                  </TableRow>
                );
              })}
            {config.isMarginBot && (
              <TableRow>
                <TableCell
                  style={{ border: "none", height: "60px" }}
                ></TableCell>
              </TableRow>
            )}
            {renderMenu()}
          </TableBody>
        </Table>
      </TableContainer>
      {config.isPagination === true ? renderPagination() : ""}
      {loading && (
        <div className="loading">
          <AppLoading />
        </div>
      )}
    </Box>
  );
}

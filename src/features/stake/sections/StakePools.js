import React,{ useState, useEffect } from 'react';
import classNames from "classnames";
import { useTranslation } from 'react-i18next';
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CustomButtons from "components/CustomButtons/Button.js";
import Avatar from '@material-ui/core/Avatar';
import { isEmpty } from 'features/helpers/utils';
import {StyledTableCell,StyledTableRow,stakePoolsStyle} from "../jss/sections/stakePoolsStyle";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import leftImage from 'assets/img/stake-head-left.png';
import rightImage from 'assets/img/stake-head-right.png';
import { useFetchPoolsInfo } from '../redux/hooks';
import bgImage from "assets/img/d2.svg";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Icon from '@material-ui/core/Icon';
import stake_img from 'assets/img/stake_img.png';
import select_img from 'assets/img/select_img.png';
import loader_img from 'assets/img/loader_img.gif';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
const useStyles = makeStyles(stakePoolsStyle);

export default function StakePools(props) {
  

  const { fromPage } = props;
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const { pools, poolsInfo, fetchPoolsInfo } = useFetchPoolsInfo();

  //for select 
  const [stakeslct, setStakeslct] = React.useState('');
  const [wthdrw, setWthdrw] = React.useState('');
  const handleChange = (event) => {
    setStakeslct(event.target.value);
  };
  const handleChangeTwo = (event) => {
    setWthdrw(event.target.value);
  };
  ///progress slider
  const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 25,
      label: '25%',
    },
    {
      value: 50,
      label: '50%',
    },
    {
      value: 75,
      label: '75%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];
  function valuetext(value) {
    return `${value}%`;
  }
  ///withdraw slider
  const withdraw = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 25,
      label: '25%',
    },
    {
      value: 50,
      label: '50%',
    },
    {
      value: 75,
      label: '75%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];
  function withdrawvaluetext(value) {
    return `${value}%`;
  }
  useEffect(() => {
    fetchPoolsInfo();
  }, [fetchPoolsInfo]);

  return (
    <Grid container style={{paddingTop: '4px'}} className="for_drk_bg" id="container">
        
        <Grid item xs={6}>
          <h1 className="def_heading">Dark Magic</h1>
        </Grid>
        <Grid item xs={6} className="text-right">
          <label className="stk_lbl">Network Details:<span className="g_dot"></span><span>Matic</span></label>
        </Grid>
        <Grid item xs={12} className="mt-3">
          <div className="tbl_header">
            <Grid item sm={3}>
              Currency
              <div className="tbl_h_action">
                <Icon className="fa fa-chevron-up" />
                <Icon className="fa fa-chevron-down" />
              </div>
            </Grid>
            <Grid item sm={3}>
              BALANCE
              <div className="tbl_h_action">
                <Icon className="fa fa-chevron-up" />
                <Icon className="fa fa-chevron-down" />
              </div>
            </Grid>
            <Grid item sm={3}>
              DEPOSIT
              <div className="tbl_h_action">
                <Icon className="fa fa-chevron-up" />
                <Icon className="fa fa-chevron-down" />
              </div>
            </Grid>
            <Grid item sm={3}>
              APY
              <div className="tbl_h_action">
                <Icon className="fa fa-chevron-up" />
                <Icon className="fa fa-chevron-down" />
              </div>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} className="mt-3">
        <Accordion className="cstmaccrdn">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid
                container
                direction="row"
                alignItems="center"
                className="head_prnt"
              >
                <Grid item xs={3} >
                  <div className="d-flex fr_mbl_rsp">
                  <img
                    className="mr-3"
                    src={stake_img}
                    alt=""
                  />
                  <div className="stk_frt">
                    <h4>ETH</h4>
                    <p>Ethereum</p>
                  </div>
                  </div>
                </Grid>
                <Grid item xs={3} >
                  <h3>13.3324</h3>
                </Grid>
                <Grid item xs={3} >
                  <h5>0.00</h5>
                </Grid>
                <Grid item xs={3}>
                  <h5>0.00</h5>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                direction="row"
                alignItems="center"
                className="head_prnt"
                spacing={5}
              >
                <Grid item lg={6}>
                  <h6 className="dpst_ttl">Deposit <span>Balance: 23,2344.12345678 axmatic</span></h6>
                  <div className="d-flex input_bx">
                    <input className="input_fld" type="text" value="0.0000" />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={stakeslct}
                        displayEmpty
                        onChange={handleChange}
                        className="cstm_slct"
                      >
                        <MenuItem value="" disabled>
                          <img
                            className="mr-3"
                            src={select_img}
                            alt=""
                          />
                          Select
                        </MenuItem>
                        <MenuItem value={10}>
                          <img
                            className="mr-3"
                            src={select_img}
                            alt=""
                          />
                          AXMATIC
                        </MenuItem>
                        <MenuItem value={10}>
                          <img
                            className="mr-3"
                            src={select_img}
                            alt=""
                          />
                          AXMATIC
                        </MenuItem>
                        <MenuItem value={10}>
                          <img
                            className="mr-3"
                            src={select_img}
                            alt=""
                          />
                          AXMATIC
                        </MenuItem>
                    </Select>
                  </div>
                  <div className="progress_bx">
                  <Slider
                    defaultValue={90}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                  />
                  </div>
                  <div className="progress_action text-right mt-3">
                    <button className="btn btn-stk">Deposit</button>
                  </div>
                </Grid>
                <Grid item lg={6}>
                  <h6 className="dpst_ttl">Withdraw <span>Balance: 23,2344.12345678 axmatic</span></h6>
                  <div className="d-flex input_bx">
                    <input className="input_fld" type="text" value="0.0000" />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={wthdrw}
                        displayEmpty
                        onChange={handleChangeTwo}
                        className="cstm_slct"
                      >
                        <MenuItem value="" disabled>
                          <img
                            className="mr-3"
                            src={select_img}
                            alt=""
                          />
                          Select
                        </MenuItem>
                        <MenuItem value={10}>
                          <img
                            className="mr-3"
                            src={select_img}
                            alt=""
                          />
                          AXMATIC
                        </MenuItem>
                        <MenuItem value={10}>
                          <img
                            className="mr-3"
                            src={select_img}
                            alt=""
                          />
                          AXMATIC
                        </MenuItem>
                        <MenuItem value={10}>
                          <img
                            className="mr-3"
                            src={select_img}
                            alt=""
                          />
                          AXMATIC
                        </MenuItem>
                    </Select>
                  </div>
                  <div className="progress_bx progress_bx_rd">
                  <Slider
                    defaultValue={90}
                    getAriaValueText={withdrawvaluetext}
                    aria-labelledby="discrete-slider-custom"
                    step={10}
                    valueLabelDisplay="auto"
                    marks={withdraw}
                  />
                  </div>
                  <div className="progress_action text-right mt-3">
                    <button className="btn btn-stk btn-wthdrw">Withdraw</button>
                  </div>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion className="cstmaccrdn">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Grid
                container
                direction="row"
                alignItems="center"
                className="head_prnt"
              >
                <Grid item xs={3} >
                  <div className="d-flex fr_mbl_rsp">
                  <img
                    className="mr-3"
                    src={stake_img}
                    alt=""
                  />
                  <div className="stk_frt">
                    <h4>ETH</h4>
                    <p>Ethereum</p>
                  </div>
                  </div>
                </Grid>
                <Grid item xs={3} >
                  <h3>13.3324</h3>
                </Grid>
                <Grid item xs={3} >
                  <h5>0.00</h5>
                </Grid>
                <Grid item xs={3}>
                  <h5>0.00</h5>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      <Hidden xsDown>
        <GridItem>
          <Table className={classes.table} aria-label="customized table" >

            <TableBody classes={{
              root:classes.tableBodyRoot
            }}>
              {pools.map((pool, index) => (
                <StyledTableRow key={pool.name} style={{display: Boolean( index !== 1 && index !==2) ? "none" : "table-row"}}>
                  <StyledTableCell component="th">
                    <div className={classes.firstCell2}>
                      <div className={classes.firstCellContent2}>
                      <StyledTableCell component="th" >
                    <CustomButtons
                      href={`/#/stake/pool/${index + 1}`}
                      className={classes.stakeButton2}
                    >
                      Boost your rewards
                    </CustomButtons>
                  </StyledTableCell>
                      </div>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>


            
          </Table>
        </GridItem>
      </Hidden>
      <Hidden xsDown>
        <GridItem>
          <Table className={classes.table} aria-label="customized table" >
            <TableHead>
              <TableRow>
                <StyledTableCell >{t('Stake-Table-Pool')}</StyledTableCell>
                <StyledTableCell >{t('Stake-Table-Staked')}</StyledTableCell>
                <StyledTableCell >{t('Stake-Table-Total')}</StyledTableCell>
                <StyledTableCell >{t('Stake-Table-Apy')}</StyledTableCell>
                <StyledTableCell ></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody classes={{
              root:classes.tableBodyRoot
            }}>
              {pools.map((pool, index) => (
                <StyledTableRow key={pool.name} style={{display: Boolean(index !== 0 ) ? "none" : "table-row"}}>
                  <StyledTableCell component="th">
                    <div className={classes.firstCell}>
                      <div className={classes.avatarContainer}>           
                        <Avatar 
                          alt={pool.name}
                          src={require(`../../../images/${pool.name}-logo.png`)}
                          className={classNames({
                            [classes.avatar]:true,
                          })}
                          />
                      </div>
                      <div className={classes.firstCellContent}>
                        <div>{pool.name}</div>
                        <div>{pool.token}</div>
                      </div>
                    </div>
                  </StyledTableCell>

                  
                  {/* <StyledTableCell >$40,027,383.88</StyledTableCell> */}
                  <StyledTableCell >{poolsInfo[index].staked}</StyledTableCell>
                  <StyledTableCell >{poolsInfo[index].tvl}</StyledTableCell>
                  <StyledTableCell >{poolsInfo[index].apy}</StyledTableCell>
                  <StyledTableCell component="th" >
                    <CustomButtons
                      href={`/#/stake/pool/${index + 1}`}
                      className={classes.stakeButton}
                    >
                      {t('Stake-Button-Stake')}
                    </CustomButtons>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </GridItem>
      </Hidden>
      <div className="space-100 aaa"></div>
    


      <Hidden smUp>
        <GridItem>
        {pools.map((pool, index) => (
          <div key={`mobile-${index}`} className={classes.mobileContainer} style={{display: Boolean(index !== 0 ) ? "none" : "" }}>
            <div className={classes.avatarContainer} style={{width:'80px',height:'80px',borderRadius:'40px'}}>
              <Avatar 
                alt={pool.name}
                src={require(`../../../images/${pool.name}-logo.png`)}
                style={{width:'54px',height:'54px'}}
                />
            </div>
            <div className={classes.mobileHead}>
              <div style={{fontSize:'26px',lineHeight:'18px',fontWeight:'600',marginBottom:'14px'}}>{pool.name}</div>
              <div style={{fontSize:'18px',lineHeight:'14px',fontWeight:'500'}}>{pool.token}</div>
            </div>
            <div className={classes.mobileDetail}>
              <div style={{marginBottom:'10px'}}>{t('Stake-Table-Apy')+": "+poolsInfo[index].apy}</div>
              <div style={{marginBottom:'10px'}}>{t('Stake-Table-Staked')+": "+poolsInfo[index].staked}</div>
              <div style={{marginBottom:'12px'}}>{t('Stake-Table-Total')+": "+poolsInfo[index].tvl}</div>
            </div>
            <CustomButtons
              href={`/#/stake/pool/${index + 1}`}
              className={classes.stakeButton}
              style={{width:'180px',height:'44px'}}
            >
              {t('Stake-Button-Stake')}
            </CustomButtons>
          </div>
        ))}
        </GridItem>
      </Hidden>

      <Hidden smUp>
        <GridItem>
        {pools.map((pool, index) => (
          <div key={`mobile-${index}`} className={classes.mobileContainer} style={{display: Boolean(index !== 1 && index !==2) ? "none" : "" }}>
            <div className={classes.avatarContainer} style={{width:'80px',height:'80px',borderRadius:'40px'}}>
              <Avatar 
                alt={pool.name}
                src={require(`../../../images/${pool.name}-logo.png`)}
                style={{width:'54px',height:'54px'}}
                />
            </div>
  
            <CustomButtons
              href={`/#/stake/pool/${index + 1}`}
              className={classes.stakeButton}
              style={{width:'180px',height:'44px'}}
            >
               Boost
            </CustomButtons>
          </div>
        ))}
        </GridItem>
      </Hidden>

    </Grid>
  )
}

StakePools.defaultProps = {
  fromPage:'page',
}
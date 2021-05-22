import React from 'react';
import { FaTimes } from "react-icons/fa";

import Style from './style';

interface ISettings {
    close: (show: boolean) => void
}

const Settings = ({ close }: ISettings) => {
  
  return (
    <>
      <Style />

      <div className="overlay">
      
        <div className="formSetting">
            <div className="titleTimerSetting p-3">
                TIMER SETTING
                <FaTimes size={24} color={'#BBBBBB'} />
            </div>

            <div className="mr-3 ml-3" style={{borderTop: '1px solid #F0EDED'}}></div>

            <form className="mt-2 p-3" id="formTimeSettings" action="">
                <h6>Time (minutes)</h6>
                <div className="form-row timeMinutes">
                    <div className="form-group col-4">
                        <label className="m-0">Pomodoro</label>
                        <input onChange={()=>{}} type="number" className="form-control" value={25} />
                    </div>

                    <div className="form-group col-4">
                        <label className="m-0">Short Break</label>
                        <input onChange={()=>{}} type="number" className="form-control" value={5} />
                    </div>

                    <div className="form-group col-4">
                        <label className="m-0">Long Break</label>
                        <input onChange={()=>{}} type="number" className="form-control" value={15} />
                    </div>
                </div>

                <div className="mx-auto" style={{borderTop: '1px solid #F0EDED'}}></div>

                <div className="form-row mt-4 mb-4">
                    <div className="col-md-12">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                                Auto start next round?
                                <label className="switch m-0">
                                    <input onChange={()=>{}} type="checkbox" className="success" />
                                    <span className="slider"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mx-auto" style={{borderTop: '1px solid #F0EDED'}}></div>

                <div className="form-row mt-4 mb-4">
                    <div className="col-6 d-flex align-items-center">
                        <h6 className="m-0">Long Break interval</h6>
                    </div>

                    <div className="col-6 d-flex justify-content-end timeMinutes">
                        <input onChange={()=>{}} type="number" className="form-control" value={4} style={{width: '70px'}} />
                    </div>
                </div>

                <div className="mx-auto" style={{borderTop: '1px solid #F0EDED'}}></div>

                <div className="form-row mt-4 mb-4">
                    <div className="col-6 d-flex align-items-center">
                        <h6 className="m-0">Alarm Sound</h6>
                    </div>

                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <div className="m-0 form-group ">
                            <select onChange={()=>{}} defaultValue={3} id="inputState" className="form-control" style={{background: '#EFEFEF', border: 'none'}}>
                              <option value={1}>Bell</option>
                              <option value={2}>Bird</option>
                              <option value={3}>Digital</option>
                              <option value={4}>Kitchen</option>
                              <option value={5}>Wood</option>
                            </select>
                          </div>
                    </div>

                    <div className="col-12 d-flex justify-content-end align-items-center mt-3">
                        <div className="m-0 form-group d-flex align-items-center">
                            <label className="mr-3 mb-0">0</label>
                            <input onChange={()=>{}} type="range" min={1} max={100} value={50} />
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-content-end align-items-center mt-3">
                        <div className="m-0 form-group d-flex align-items-center">
                            <label className="mr-3 mb-0">repeat</label>
                            <input onChange={()=>{}} type="number" className="form-control" value={1} style={{width: '60px', border: 'none', background: '#EFEFEF'}} />
                        </div>
                    </div>
                </div>

                <div className="mx-auto" style={{borderTop: '1px solid #F0EDED'}}></div>

                <div className="form-row mt-4 mb-4">
                    <div className="col-6 d-flex align-items-center">
                        <h6 className="m-0">Ticking Sound</h6>
                    </div>

                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <div className="m-0 form-group">
                            <select onChange={()=>{}} defaultValue={2} id="inputState" className="form-control" style={{background: '#EFEFEF', border: 'none'}}>
                              <option value={1}>None</option>
                              <option value={2}>Ticking Fast</option>
                              <option value={3}>Ticking Slow</option>
                            </select>
                          </div>
                    </div>

                    <div className="col-12 d-flex justify-content-end align-items-center mt-3">
                        <div className="m-0 form-group d-flex align-items-center">
                            <label className="mr-3 mb-0">0</label>
                            <input onChange={()=>{}} type="range" min={1} max={100} value={50} />
                        </div>
                    </div>
                </div>
            </form>

            <div className="col-md-12 d-flex justify-content-end footerForm">
                <button onClick={() => close(false)} type="button" className="btn btn-secondary" style={{width: '70px', background: '#222222'}}>
                    OK
                </button>
            </div>
        </div>
      
      </div>
    </>
  );
}

export default Settings;
import React, { useState } from 'react';
import { FaCheckCircle, FaCog, FaEllipsisV, FaPlusCircle } from "react-icons/fa";

import Settings from '../../components/Settings';
import Timer from '../../components/Timer';

import { Header, Container, Style } from './styles';

const Home = () => {
    const [settings, setSettings] = useState(false);

    return(
        <>
            <Style />
        <div className="container">

            {settings && <Settings close={setSettings} />}

            <Header className="mb-5 py-3 d-flex justify-content-between">
                <div className="logo d-flex align-items-center">
                    <h3 className="d-flex align-items-center" style={{ fontSize: '20px' }}>
                        <FaCheckCircle size={20} className="mr-1" />
                        Pomofocus
                    </h3>
                </div>

                <div>
                    <button onClick={ () => setSettings(true) } className="d-flex align-items-center btn">
                        <FaCog size={18} />
                        <span className="ml-1">Setting</span>
                    </button>
                </div>
            </Header>

            <Container>
                
                <Timer />

                <div>
                    <div className="col-md-12 d-flex align-items-center justify-content-center p-3">
                        <div className="tasks d-flex">
                            <div className="p-0 col-md-6 d-flex align-items-center">
                                <h5>Tasks</h5>
                            </div>

                            <div className="p-0 col-md-6 d-flex justify-content-end">
                                <div className="threeDots position-relative d-flex align-items-center justify-content-center">
                                    <FaEllipsisV size={16} />

                                    <div className="tasksOptions">
                                        <div className="pl-3 mt-1">
                                            <a href="void">
                                                <i className="far fa-trash-alt mr-1"></i>
                                                Clear finished tasks
                                            </a>
                                        </div>
                                        
                                        <div className="pl-3 mt-1 mb-1">
                                            <a href="void">
                                                <i className="fas fa-check mr-1"></i>
                                                Clear act pomodoros
                                            </a>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto" style={{borderTop: '2px solid white'}}></div>

                    <div className="col-md-12 d-flex justify-content-center mt-2">
                        <ul className="m-0 d-block" id="add"></ul>
                    </div>

                    <div className="col-md-12 d-flex align-items-center justify-content-center p-3">
                        <div className="addTask">
                            <button type="button" className="d-flex align-items-center justify-content-center btn">
                                    <FaPlusCircle className="mr-2" />
                                    Add task
                                </button>
                        </div>
                    </div>

                    
                    <div className="col-md-12 d-flex align-items-center justify-content-center p-3">
                        <div className="taskNote">
                            <form action="" autoComplete={"off"}>
                                <div className="form-row mt-4 mb-4 mr-3 ml-3">
                                    <input type="text" id="workingOn" placeholder="What are you working on?" />
                                </div>

                                <div className="form-row mt-4 mb-2 mr-3 ml-3">
                                    <div className="col-12 p-0">
                                        <h6 className="mb-1">Est Pomodoros</h6>
                                    </div>
                                    
                                    <div className="col-12 d-flex p-0 timeMinutes">
                                        <input onChange={()=>{}} type="number" id="estPomodoros" className="form-control mr-3" value={1} style={{width: '70px', fontSize: '15px'}} />
                                        <button type="button" className="btn btn-light mr-1"><i className="fas fa-caret-up"></i></button>
                                        <button type="button" className="btn btn-light"><i className="fas fa-caret-down"></i></button>
                                    </div>
                                </div>

                                <div className="form-row mb-2 mr-3 ml-3" id="addNote">
                                    <a href="void"><i className="fas fa-plus fa-xs mr-1"></i>Add Note</a>
                                </div>

                                <div className="form-row mb-3 mr-3 ml-3">
                                    <textarea className="form-control" id="textAreaNotes" rows={3} placeholder="Some notes..."></textarea>
                                </div>
                            </form>

                            <div className="col-md-12 d-flex justify-content-end footer">
                                <button type="button" className="btn btn-secondary mr-1 btnCancel">Cancel</button>
                                {/* <button type="button" className="btn btn-secondary mr-1 btnCancel" onClick={closeTaskNote}>Cancel</button> */}
                                <button type="button" className="btn btn-secondary btnSave">Save</button>
                            </div>

                        </div>
                    </div>
                </div>

            </Container>
        </div>
        </>
    );
}

export default Home;
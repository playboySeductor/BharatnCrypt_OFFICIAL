import React from "react";
import styled from 'styled-components';
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import Newsdisplay from "../components/Newsdisplay" ;
import { useState,useEffect } from 'react';
import logo from './logo.jpeg';
import ClearIcon from '@material-ui/icons/Clear';
import {
  Container 
} from "@material-ui/core";
const Homepage = () => {
  const [showChat, setShowChat] = useState(false);
  return (
    <>
      <Banner />
      <CoinsTable />
      <Newsdisplay />
      <Container>
                {
                    showChat ? (
                        <div className="dark-bg-effect" onClick={() => setShowChat(false)}>
                            <ChatContainer>
                                <div className="top">
                                    <div className="tgher">
                                        <img src={logo} alt="" />
                                        <h1>nCrypto</h1>
                                    </div>
                                    <ClearIcon className="icon" onClick={() => setShowChat(false)} />
                                </div>
                                <div className="powered-by">
                                    nCrypto Services, powered by Dialogflow.
                                </div>
                                <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/a7858322-2e74-4ec4-b768-86612dbdb156"></iframe>
                            </ChatContainer>
                        </div>
                    ) : (
                        <ChatInitiater onClick={() => setShowChat(true)}>
                            <img src="https://www.jing.fm/clipimg/full/120-1205146_chat-icon-png-image-circle.png" alt="" />
                        </ChatInitiater>
                    )
                }
            </Container>
    </>
  );
};

export default Homepage;
const ChatContainer = styled.div`
    position: fixed;
    bottom: 80px;
    right: 20px;
    height: 70vh;
    width: 360px;
    background-color: white;
    border: 1px solid #ddcccc;
    border-radius: 20px;
    z-index: 10;
    overflow: hidden;

    iframe{
        height: 100%;
        width: 100%;
        border: none;
    }

    .top{
        position: absolute;
        top: 0;
        width: 100%;
        height: 80px;
        background-color: #1c2e4e;
        z-index: 11;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3px 10px;

        .tgher{
            display: flex;
            align-items: center;

            img{
                height: 2.6rem;
            }
        }

        h1{
            font-size: 1.8rem;
            color: #b1c6dd;
        }

        .icon{
            fill: white;
            font-size: 1.75rem;
            cursor: pointer;
        }
    }

    .powered-by{
        position: absolute;
        top: 80px;
        width: 100%;
        height: 30px;
        background-color: #fff3f3;
        z-index: 11;
        font-size: 0.7rem;
        padding: calc(15px - 0.35rem);
        color: grey;
    }


    @media only screen and (max-width: 600px){
        bottom: 20px;
        right: 5%;
        width: 90%;
        background-color: white;
        border: 1px solid #ddcccc;
        border-radius: 20px;
        z-index: 10;
        overflow: hidden;
    }
`
const ChatInitiater = styled.div`
    height: 60px;
    width: 60px;
    position: fixed;
    bottom: 70px;
    right: 10px;
    border-radius: 50%;
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    z-index: 100;
    
    img{
        height: 50%;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px){
        bottom: 25px;
    }
`
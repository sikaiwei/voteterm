"use client"

import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

import Link from "next/link";
import styles from "./page.module.css";
import { Input, label, Button, Tooltip } from "antd";
import { Web3Provider } from '../Web3Provider.jsx'
import { useContract } from '../useContract';



export default function Vote() {

    const [candidateName, setcandidateName] = useState("");
    const [candidateId, setcandidateId] = useState(-1);
    const { isActive, account,  connector,  provider } = useWeb3React();
    const {approve, addCandidate, vote, getAllCandidates, voteRes} = useContract();

    const ListComponent = ({ data }) => {  
        console.log("处理数据：", data)
        // 假设data是一个数组，包含你想要展示的数据  
        return (  
          <div>  
            {data.map((item, index) => (  
              // 为数组中的每个元素生成一个<div>元素  
              <div key={index}>{item.name} : {item.voteCount.toString()}  票</div>  
            ))}  
          </div>  
        );  
      }; 
  
    return (
        <div className={styles.page}>
        <main className={styles.main}>
        <Web3Provider>

            <Link href="/" className="">
            HOME
            </Link>
            <h1>vote</h1>
            <label>
            <p>======================================</p>

                    添加候选者 &nbsp;
                    <Input
                        type="text"
                        value={candidateName}
                        onChange={(e) => setcandidateName(e.target.value)}
                        className={styles.input}
                    />
                        <Button 
                        onClick={
                            async ()=>{
                                console.log(candidateName)
                                await addCandidate(candidateName);
                            }} 
                        type="primary" size="large">
                        添加
                    
                    </Button>
                <p>======================================</p>

                投票 ： 填写候选者ID，点击投票;
                    <Input
                        type="text"
                        value={candidateId}
                        onChange={(e) => setcandidateId(e.target.value)}
                        className={styles.input}
                    />
                        <Button 
                        onClick={
                            async ()=>{
                                await vote(candidateId);
                            }} 
                        type="primary" size="large">
                        投票
                    
                    </Button>
                <p>======================================</p>
                投票统计： &nbsp;
                
                        <Button 
                        onClick={
                            async ()=>{
                                await getAllCandidates();
                            }} 
                        type="primary" size="large">
                        刷新数据
                    
                    </Button>
                {/* <div>{voteRes.toString()}</div> */}
                <ListComponent data={voteRes} />  
                </label>

        </Web3Provider>
        </main>
        </div>
    )  
}
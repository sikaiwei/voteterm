// "use client"
import React, { useState, useEffect } from 'react';
import { Web3Provider } from '../Web3Provider.jsx'
import Link from "next/link";
import styles from './Navigate.css';
export default function Nav() {
    return (
        <Web3Provider>
            <nav className="navbar">

              <ul className="nav-list">
                
                <li><Link href="/">首页</Link></li>
                <li><Link href="/about">投票</Link></li>
                <li><Link href="/about">关于我们</Link></li>
                <li><a href="#">新闻</a></li>
                <li><a href="#">联系我们</a></li>
              </ul>

            </nav>
      </Web3Provider>
      )  
  }
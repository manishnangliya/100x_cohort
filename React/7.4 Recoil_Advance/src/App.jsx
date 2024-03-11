import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import {  notifications, sumSelector } from './store/atoms/atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <NotificationStatus/>
  </RecoilRoot> 
}

function checkMax(count){
  return count>=100?"99+":count
}

function NotificationStatus(){
  const [notificationCount,setNotificationCount] =useRecoilState(notifications)
  const totalCount = useRecoilValue(sumSelector);

  return (
    <>
      <button>Home</button>
      <RecoilRoot>
      <button>My Network ({checkMax(notificationCount.network)})</button>
      <button>Job ({checkMax(notificationCount.jobs)})</button>
      <button>Messaging  ({checkMax(notificationCount.messaging)})</button>
      <button>Notification ({checkMax(notificationCount.notifications)})</button>
      </RecoilRoot>
      <button>Me ({totalCount})</button>
    </>
  )
}

export default App

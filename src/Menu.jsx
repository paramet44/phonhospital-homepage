import React from 'react'
import { TbDownload } from "react-icons/tb";
import { GiMedicines, GiTakeMyMoney, GiAutoRepair } from "react-icons/gi";
import { PiWarningOctagonBold, PiHandFist } from "react-icons/pi";
import { TbNurse, TbReportAnalytics } from "react-icons/tb";
import { LuGauge } from "react-icons/lu";
import { FiDatabase } from "react-icons/fi";
import { MdContentPaste } from "react-icons/md";
import { RiMentalHealthLine, RiMailSendLine } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import phonhosLogo from './assets/phonhos-logo.png';
import publicHealthLogo from './assets/public-health.png';
import kphLogo from './assets/kphlogo.png';
import hosxpLogo from './assets/hosxp-logo.png';
import spsorchorLogo from './assets/spsorchor.png';
import './css/Menu.css';

const menuItems = [
    { icon: <img src={phonhosLogo} alt="" />, text: "เว็บไซด์โรงพยาบาลพล", link: "https://www.phonhospital.go.th/" },
    { icon: <img src={publicHealthLogo} alt="" />, text: "เว็บไซด์กระทรวงสาธารณสุข", link: "https://www.moph.go.th/" },
    { icon: <img src={publicHealthLogo} alt="" />, text: "เว็บไซด์ สสจ. ขอนแก่น", link: "https://www.kkpho.go.th/index.php" },
    { icon: <img src={kphLogo} alt="" />, text: "เว็บไซด์สหกรณ์ออมทรัพย์สาธารณสุขจังหวัดขอนแก่น", link: "https://kphcoop.com/" },
    { icon: <PiWarningOctagonBold className="button-icon" />, text: "โปรแกรมรายงานความเสี่ยง", link: "https://phon.thai-nrls.org/" },
    { icon: <BiMoneyWithdraw className="button-icon" />, text: "SmartSlip @ สสจ. ขอนแก่น", link: "https://smartslip.kkpho.go.th/home.php" },
    { icon: <GiTakeMyMoney className="button-icon" />, text: "สลิปเงินเดือนโรงพยาบาลพล", link: "https://phonhospital.go.th/salary/salary_select.php" },
    { icon: <img src={hosxpLogo} alt="" />, text: "แบบฟอร์มขอใช้ HOSxp", link: "https://docs.google.com/forms/d/e/1FAIpQLSeghEcR-KjNw30pL676cvjJwHNn5D1hg-3zS2a2xfmkmBusLQ/viewform" },
    { icon: <img src={hosxpLogo} alt="" />, text: "แบบฟอร์มขอข้อมูล HOSxp", link: "https://docs.google.com/forms/d/e/1FAIpQLSeghEcR-KjNw30pL676cvjJwHNn5D1hg-3zS2a2xfmkmBusLQ/viewform" },
    { icon: <FiDatabase className="button-icon" />, text: "HDC Data center สจจ. ขอนแก่น", link: "https://kkn.hdc.moph.go.th/hdc/main/index.php" },
    { icon: <TbReportAnalytics className="button-icon" />, text: "โปรแกรมลิขิตสมดุล", link: "https://likhit.phonhos.com" },
    { icon: <RiMentalHealthLine className="button-icon" />, text: "Non HR", link: "https://nonhr.moph.go.th/" },
    { icon: <PiHandFist className="button-icon" />, text: "ITA", link: "https://phonhospital.go.th/images/ita/ita_index1.html" },
    { icon: <MdContentPaste className="button-icon" />, text: "ระบบสารบรรณ", link: "http://mail.kkpho.go.th/archives/index.php" },
    { icon: <LuGauge className="button-icon" />, text: "KPI โรงพยาบาลพล", link: "https://docs.google.com/spreadsheets/d/1Qd7Z8UGDx0NW33vlF4y41NxNahfA-ohZ/edit?gid=2036094453#gid=2036094453" },
    { icon: <TbNurse className="button-icon" />, text: "เว็บฝ่ายการพยาบาล", link: "https://nurse.phonhospital.go.th/" },
    { icon: <GiMedicines className="button-icon" />, text: "เว็บกลุ่มงานเภสัชกรรมและคุ้มครองผู้บริโภค", link: "https://sites.google.com/kkumail.com/pharm-phon/home" },
    { icon: <TbDownload className="button-icon" />, text: "ดาวโหลดแบบฟอร์มต่างๆ", link: "https://forms.phonhos.com" },
    { icon: <GiAutoRepair className="button-icon" />, text: "แจ้งซ่อมคอมพิวเตอร์", link: "https://docs.google.com/forms/d/e/1FAIpQLSdAtpwdCRUR83gBz4z3HTRkMalf6sODIek-GxJ_gxLd3wtQnQ/viewform" },
    { icon: <img src={spsorchorLogo} alt="" />, text: "เว็บ New authentication", link: "https://authenservice.nhso.go.th/authencode/#/login" },
    { icon: <RiMailSendLine className="button-icon" />, text: "ส่งข้อมูลไฟแนนซ์ Hub data", link: "https://fdh.moph.go.th/hospital/" },
    { icon: <RiMailSendLine className="button-icon" />, text: "ส่งข้อมูล 43 แฟม สปสช.", link: "https://op.nhso.go.th/op/login/LoginAction.do" },
    { icon: <RiMailSendLine className="button-icon" />, text: "ส่งข้อมูล 43 แฟม HDC", link: "https://kkn.hdc.moph.go.th/hdc/main/index.php" }
];

function Menu() {
    return (
        <div className="group-menu">
            {menuItems.map((item, index) => (
                <a key={index} href={item.link} className="button" target="_blank" rel="noopener noreferrer">
                    {item.icon}
                    <span>{item.text}</span>
                </a>
            ))}
        </div>
    )
}

export default Menu;

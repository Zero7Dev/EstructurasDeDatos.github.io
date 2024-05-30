"use client";
import { ActiveLink } from '../Components/active-link/ActiveLink';
import InvoiceForm from "../Components/factura";
import Navbar from '../Components/Navbar';

const navItems=[
    {path:'/about',text:'About'},
    {path:'/contact',text:'Contact'},
    {path:'/camiones',text:'Camiones'},
    {path:'/princing',text:'Princing'},
    {path:'/viajes',text:'Viajes'},
    {path:'/conductores',text:'Conductores'},
]
export default function PricingPage(){
    return (
        <>
        
        {navItems.map(item=>(
        <ActiveLink key={item.path} path={item.path} text={item.text}/>    
        ))}
        <span className="txt-7lg"> 
        <InvoiceForm/></span>
        </>
    )
}
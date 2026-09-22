import { ImageResponse } from "next/og";
export const alt = "Trafexa Nordic — Digital products & engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
 return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"70px",background:"#f7f9fa",color:"#152a31",fontFamily:"sans-serif"}}><div style={{display:"flex",justifyContent:"space-between",fontSize:24}}><span>trafexa / NORDIC</span><span>SWEDEN / UNITED STATES</span></div><div style={{fontSize:82,lineHeight:1.05,letterSpacing:-4,display:"flex",flexDirection:"column"}}><span>Complex work.</span><span>Considered software.</span></div><div style={{fontSize:22,borderTop:"1px solid #d5dfe2",paddingTop:24,display:"flex"}}>Digital products & engineering · div3rsa.com</div></div>,size);
}

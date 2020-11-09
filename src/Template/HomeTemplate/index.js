// import React from 'react'
// import { Route } from 'react-router-dom'
// import Footer from '../../Component/Foter'
// import Header from '../../Component/Header'
// export const LayoutHeader = (props) => {
//     return (
//         <>
//             <Header />
//             {props.children}
//             <Footer />
//         </>
//     )
// }
// export const HomeTemplate = ({ Component, ...rest }) => {
//     return (
//         <Route {...rest} onUpdate={() => window.scrollTo(0, 0)} render={(props) => {
//             return (
//                     <LayoutHeader >
//                         <Component {...props} />
//                     </LayoutHeader>
//             )
//         }} />
//     )
// }
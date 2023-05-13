import React from "react";


      const ToDoList=({item})=>{
        return(
          <div className="float-contsiner">
            <div className="float-child">
            <h3>User id:{item.userId}</h3>
          <h2>Id:{item.id}</h2>
          <p>Status:{item.completed.toString()}</p>
          <p>Title:{item.title}</p>
            </div>
            </div>
        );
      }
      export default ToDoList;




















// const AlbumCard=({albumData})=>{
//     return(
//         <div className='album'>
//           <img src={albumData.thumbnailUrl} alt='N/A'/>
//           <h2>Id:{albumData.albumId}</h2>
//           <h3>Title:{albumData.title}</h3>
//           <h4>ID:{albumData.id}</h4>
//         </div>
//     );
// }

// export default AlbumCard;
// const ProductCard=({products})=>{
//     return(
//         <div className="product">
//             <div>
//                 <title>{products.title}</title>
//             </div>
//             <div>
//             <img src={products.image} alt={products.title}/>
//             </div>
//             <div>
//                 <h3>{products.category}</h3>
//             </div>
//         </div>
        
//     );
// }

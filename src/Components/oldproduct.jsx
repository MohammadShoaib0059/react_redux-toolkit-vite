
///old products
{/* <div className="p-2">
            <div className="text-center">
              <Card style={{ width: "17rem", height : "19rem"}}>
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ width: "120px", height: "120px", padding: "10px" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title style={{fontSize:"13px"}}>{item.title}</Card.Title>
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                  <Card.Text><b>rating</b> : {item.rating.rate}</Card.Text>
                  <Card.Text><b>count</b> : {item.rating.count}</Card.Text>
                  </div>
                 
                  
                </Card.Body>
                <Card.Footer style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <Card.Text>&#8377; : <b>{item.price}</b></Card.Text>
                  <Button variant="primary" onClick={() => AddToCart(item)}>
                    Add to Cart
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </div> */}

          ///// old cart Items
        //   <div>
        //   {cartItems.map((item) => {
        //     return (
        //       <div className="row p-2">
        //         <div className="text-center">
        //           <Card style={{ width: "17rem" }}>
        //             <div className="text-center">
        //               <Card.Img
        //                 variant="top"
        //                 src={item.image}
        //                 style={{ width: "120px", height: "120px", padding: "10px" }}
        //               />
        //             </div>
        //             <Card.Body>
        //               <Card.Title>{item.title}</Card.Title>
        //               <Card.Text>&#8377; : {item.price}</Card.Text>
        //             </Card.Body>
        //             <Card.Footer>
        //               <Button variant="danger" onClick={() => RemoveItem(item.id)}>
        //                 Remove Item
        //               </Button>
        //             </Card.Footer>
        //           </Card>
        //         </div>
        //       </div>
        //     );
        //   })}
        // </div>
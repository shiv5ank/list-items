import React from 'react'

class MyComponent extends React.Component{
constructor(){
    super();
        this.state={
            items:[]
        }
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => {
            this.setState({ items: data });
          });
      }
    render(){
        return(
            <div style={{width:"90vw",height:"85vh",overflow:"scroll",border:"1px solid black",margin:"20px auto"}}>{
                this.state.items.length!==0&&this.state.items.map((item)=>{
                    return(
                        <div key={item.id} style={{width:"80%",height:"44vh",boxShadow:"0 0 10px black",margin:"20px auto"}}>
                        <h2>{item.title}</h2>
                        <img width="150px" height="150px" src={item.image} alt="productimage"/>
                        <p style={{color:"blue"}}>$ {item.price}</p>
                        </div>
                    )
                })
                // {console.log(this.state.items)}
                // <h2>This is the Class Based Component</h2>
                }
                
            </div>
        )
    }
}
export default MyComponent

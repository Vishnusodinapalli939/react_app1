import './table.css'
// import img1 from './images'
function Table(){
    return(
        <div id="div">
            <table>
                <tr className='tr'>
                    <td>Col 1</td>
                    <td>Col 2</td>
                    <td>Col 3</td>
                    <td>Col 4</td>
                    <td>Col 5</td>
                </tr>
                <tr>
                    <td><img src={require('./images/img1.jpg')} alt="hello"></img></td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                    <td>Data 4</td>
                    <td><img src={require('./images/img5.jpg')} alt="hello"></img></td>
                </tr>
                <tr>
                    <td>Data 1</td>
                    <td><img src={require('./images/img2.jpg')} alt="hii"></img></td>
                    <td>Data 3</td>
                    <td><img src={require('./images/img4.jpg')} alt="hello"></img></td>
                    <td>Data 5</td>
                </tr>
                <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td><img src={require('./images/img3.jpg')} alt="hii"></img></td>
                    <td>Data 4</td>
                    <td>Data 5</td>
                </tr>
                <tr>
                    <td>Data 1</td>
                    <td><img src={require('./images/img2.jpg')} alt="hello"></img></td>
                    <td>Data 3</td>
                    <td><img src={require('./images/img4.jpg')} alt="hii"></img></td>
                    <td>Data 5</td>
                </tr>
                <tr>
                    <td><img src={require('./images/img1.jpg')} alt="hello"></img></td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                    <td>Data 4</td>
                    <td><img src={require('./images/img5.jpg')} alt="hii"></img></td>
                </tr>
            </table>
        </div>
    )
}
export default Table
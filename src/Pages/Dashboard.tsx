import PrimarySearchAppBar from '../Components/navbar'
import CustomizedTables from '../Components/Table'
import BasicSwitches from '../Components/Switch'
import CheckboxLabels from '../Components/Checkbox'
import RadiosCom from '../Components/Radio'
import GridCom from '../Components/Grid'
import DialogCom from '../Components/Dialogbox'
import BasicAlerts from '../Components/Alert'
import Navbar from "../Components/new-nav"
import Sec1 from '../Components/Section1'
import Sec2 from '../Components/Section2'
import Sec3 from '../Components/Section3'

export default function Home(){
    return(<>
    {/* <PrimarySearchAppBar value1="Singup" path="/Singup" value2="Login" path2="/Login"/> */}
    <Navbar value1="Singup" path="/Singup" value2="Login" path2="/Login" />
  <Sec1/>
  <Sec2/>
  <Sec3/>
    </>)
}
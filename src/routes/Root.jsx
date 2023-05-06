import CustomNavbar from '../components/Navbar/CustomNavbar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';

function Root() {
  const params = useParams()
  const isCategoryRoute = Boolean(params.id)

  return (
    <>
      <CustomNavbar/>
      <ItemListContainer isCategoryRoute={isCategoryRoute} categoryId={params.id}/>
    </>
  )
}

export default Root

import CardItem from './Sections/CardItem';
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import SearchInput from './Sections/SearchInput';
import axiosInstance from '../../utils/axios';
import { useEffect, useLayoutEffect, useState } from 'react';

const LandingPage = () => {
    /**더보기를 위한 state 정의 */
    const limit = 4;
    /**product들을 저장하는 배열 */
    const [products, setProducts] = useState([]);
    /**0은 초기 (맨 처음 데이터) 초기 skip 값은 0 */
    const [skip, setSkip] = useState(0);
    /**hasmore : 더 보여줄 게 있을 때만 더보기 버튼이 활성화 */
    const [hasMore, sethasMore] = useState(false);
    const [filters, setfilters] = useState({
        continents: [],
        price: [],
    });
    /** 처음 마운트 될 때 한번만 실행하게 된다 [] 빈배열 */
    useEffect(() => {
        fetchProducts({ skip, limit });
    }, []);

    /**초기에 보여줄 product들 디비에서 가져오기 */
    const fetchProducts = async ({ skip, limit, loadMore = false, filters = {}, searchTerm = '' }) => {
        const params = {
            skip,
            limit,
            filters,
            searchTerm,
        };
        try {
            const response = await axiosInstance.get('/products', { params });

            /**response로 받아온 product들이 하나씩 products에 들어간다 */
            setProducts(response.data.products);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <section>
            <div className="text-center m-7">
                <h2 className="text-2xl">여행 상품 사이트</h2>
            </div>

            {/*filter*/}
            <div className="flex gap-3">
                <div className="w-1/2">
                    <CheckBox />
                </div>
                <div className="w-1/2">
                    <RadioBox />
                </div>
            </div>

            {/**Search */}
            <div className="flex justify-end">
                <SearchInput />
            </div>

            {/**Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/*product 배열 하나씩 순회하면서 나열*/}
                {products.map((product) => (
                    <CardItem product={product} key={product._id} />
                ))}
            </div>

            {/**LoadMore hasMore 값이 true 일때만 버튼이 보임 */}
            {hasMore && (
                <div className="flex justify-center mt-5">
                    <button className="px-4 py-2 mt-5 text-white bg-black rounded-md hover:bg-gray-500">더보기</button>
                </div>
            )}
        </section>
    );
};

export default LandingPage;

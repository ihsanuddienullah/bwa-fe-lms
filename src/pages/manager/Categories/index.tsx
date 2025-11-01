import { Link } from 'react-router'
import CategoryCard from './_components/CategoryCard'
import useCustom from './hooks'
import type { ICategory } from './types'

const Category = () => {
  const { data, methods } = useCustom()

  return (
    <>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            Manage Categories
          </h1>
          <p className="text-[#838C9D] mt-[1]">Manage your courses category</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to={'/manager/categories/create'}
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            Add Category
          </Link>
        </div>
      </header>
      <section
        id="CourseList"
        className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
      >
        {data.categories.map((category: ICategory) => (
          <CategoryCard
            key={category._id}
            id={category._id}
            name={category.name}
            courses={category.courses}
            handleDeleteCategory={methods.handleDeleteCategory}
          />
        ))}
        <div id="Pagination" className="flex items-center gap-3">
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 bg-[#662FFF] text-white"
          >
            <span className="font-semibold text-sm leading-[21px]">1</span>
          </button>
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
          >
            <span className="font-semibold text-sm leading-[21px]">2</span>
          </button>
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
          >
            <span className="font-semibold text-sm leading-[21px]">3</span>
          </button>
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
          >
            <span className="font-semibold text-sm leading-[21px]">4</span>
          </button>
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
          >
            <span className="font-semibold text-sm leading-[21px]">5</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default Category

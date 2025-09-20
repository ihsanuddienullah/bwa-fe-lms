import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import useCustom from './hooks'

const PaymentStatus = () => {
  const { data } = useCustom()

  return (
    <div className="relative flex flex-col flex-1 p-[10px]">
      <div className="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#060A23] -z-10 rounded-[20px]">
        <img
          src="assets/images/backgrounds/background-glow.png"
          className="absolute bottom-0 transform -translate-x-1/2 left-1/2"
          alt=""
        />
      </div>
      <Navbar />

      {data.loading && (
        <div className="flex items-center justify-center h-full">
          <span className="font-semibold text-white">Loading...</span>
        </div>
      )}

      {!data.loading && !data.transaction && (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="font-extrabold text-[46px] leading-[69px] text-white text-center m-auto">
            Transaction not found
          </h1>
          <p className="font-medium text-lg text-white text-center mt-3">
            Please try again or contact support
          </p>
        </div>
      )}

      {!data.loading &&
        data.transaction &&
        data.transaction.status === 'pending' && (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="font-extrabold text-[46px] leading-[69px] text-white text-center m-auto">
              Waiting for Payment
            </h1>
            <p className="font-medium text-lg text-white text-center mt-3">
              Please complete your payment to access the dashboard
            </p>
          </div>
        )}

      {!data.loading &&
        data.transaction &&
        data.transaction.status === 'failed' && (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="font-extrabold text-[46px] leading-[69px] text-white text-center m-auto">
              Payment Failed
            </h1>
            <p className="font-medium text-lg text-white text-center mt-3">
              Please try again or contact support
            </p>
          </div>
        )}

      {!data.loading &&
        data.transaction &&
        data.transaction.status === 'success' && (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="font-extrabold text-[46px] leading-[69px] text-white text-center m-auto">
              Success Payment
            </h1>
            <p className="font-medium text-lg text-white text-center mt-3">
              Please sign in to access the dashboard
            </p>
          </div>
        )}

      <Link to="/sign-in">
        <div className="flex items-center justify-center gap-3 w-max mx-auto mt-5 rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
          <span className="font-semibold text-white">Sign in now</span>
        </div>
      </Link>
    </div>
  )
}

export default PaymentStatus

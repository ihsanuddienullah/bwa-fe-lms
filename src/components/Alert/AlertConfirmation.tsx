import { toast, type Toast } from 'react-hot-toast'

interface AlertConfirmationProps {
  successLabel: string
  t: Toast
  title: string
  handleConfirm: () => void
  confirmButtonColor?: string
}

const AlertConfirmation = ({
  successLabel,
  t,
  title,
  handleConfirm,
  confirmButtonColor = 'bg-red-500',
}: AlertConfirmationProps) => {
  return (
    <div className="">
      <p className="text-center">{title}</p>
      <div className="flex justify-center gap-2 mt-2">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            handleConfirm()
            toast.dismiss(t.id)
            toast.success(successLabel)
          }}
          className={`text-white px-3 py-1 rounded ${confirmButtonColor}`}
        >
          Yes
        </button>
      </div>
    </div>
  )
}

export default AlertConfirmation

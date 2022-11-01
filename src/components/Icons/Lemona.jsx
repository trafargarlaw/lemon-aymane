const Lemona = ({ width, height, fillColor, active }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={active ? 'opacity-100' : 'opacity-50'}
    >
      <path
        d="M0.170765 13.2979C0.0174873 13.6519 -0.0277378 14.0466 0.0400068 14.4393C0.167948 15.1811 0.71827 15.7759 1.40942 15.9194C1.77535 15.9955 2.14414 15.9504 2.47586 15.7893C2.92192 15.5727 3.39423 15.5289 3.80579 15.666C6.27769 16.4895 9.27464 15.5349 11.4409 13.2341C13.6072 10.9332 14.5243 7.73066 13.7773 5.07514C13.653 4.633 13.698 4.12734 13.9041 3.65125C14.0573 3.29726 14.1025 2.90264 14.0348 2.51002C13.9069 1.76824 13.3567 1.17341 12.6655 1.02983C12.5518 1.00618 12.4379 0.994223 12.3249 0.993811C12.074 0.992898 11.8277 1.04878 11.5989 1.15992C11.1529 1.3765 10.6806 1.42031 10.269 1.28319C7.79709 0.459578 4.80014 1.4143 2.6339 3.71511C0.467598 6.01593 -0.449484 9.21853 0.297487 11.8741C0.421807 12.3162 0.376824 12.8219 0.170765 13.2979Z"
        fill={fillColor}
      />
    </svg>
  )
}

export default Lemona

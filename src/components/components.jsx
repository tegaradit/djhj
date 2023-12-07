import __buttonLoading from "./__loadingButton";
import __loadingBoundary from "./__loadingBoundary";
import __cardTeacher from "./__cardTeacher";
import __navbar from "./__navbar";
import __cardProject from "./__cardProject";

export const LoadingBoundary = __loadingBoundary

/**
 * @param waitFor harus berisi data yang bernilai awal undefined
 * dan dapat berubah kembali ketika data sudah ada atau biasanya
 * waitfor di isi promise
 */
export const LoadingButton = __buttonLoading

export const CardTeacher = __cardTeacher
export const CardProject = __cardProject
export const Navbar = __navbar
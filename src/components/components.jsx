import __buttonLoading from "./__loadingButton";
import __loadingBoundary from "./__loadingBoundary";
import __card from "./__card";

export const LoadingBoundary = __loadingBoundary

/**
 * @param waitFor harus berisi data yang bernilai awal undefined
 * dan dapat berubah kembali ketika data sudah ada atau biasanya
 * waitfor di isi promise
 */
export const LoadingButton = __buttonLoading

export const Card = __card
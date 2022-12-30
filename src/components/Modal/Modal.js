import swal from 'sweetalert';

export const informSucess = (handal, text) => {
  swal({
    title: 'Thực hiện thành công',
    text: text ? text : `Thành công`,
    icon: 'success',
    // dangerMode: true,
    buttons: 'Đồng ý',
  }).then((yes) => {
    if (yes) {
      handal();
    }
  });
};
export const informError = (error) => {
  swal({
    title: 'Thực hiện thất bại',
    text: error ? error : 'Thất bại',
    icon: 'error',
    // dangerMode: true,
    buttons: 'Đồng ý',
  });
};
export const showApproveModal = (onAccept, title) => {
  swal({
    title: title ? title : 'Bạn có muốn chắc chắn nhận đơn hàng này không',
    icon: 'warning',
    // dangerMode: true,
    buttons: ['Hủy', 'Đồng Ý'],
  }).then((yes) => {
    if (yes) {
      onAccept();
    }
  });
};
export const showDeleteOderModal = (onAccept) => {
  swal({
    title: 'Bạn có muốn chắc chắn xóa hàng này không',
    icon: 'warning',
    // dangerMode: true,
    buttons: ['Hủy', 'Đồng Ý'],
  }).then((yes) => {
    if (yes) {
      onAccept();
    }
  });
};

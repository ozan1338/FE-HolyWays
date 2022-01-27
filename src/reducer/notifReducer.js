export const notifReducer = (state = {idSender : []}, action) => {
  switch (action.type) {
    case "NOTIF":
      //console.log(...state.notification);
      const alreadyExist = state?.idSender?.find(
        (item) => item.idSender === action.payload.idSender
      );
      if (alreadyExist) {
        return {
          ...state,
          notif: true
        }
      } else {
        return {
          ...state,
          idSender: [...state.idSender, action.payload],
          notif: true,
        }
      }

    case "NOTIF_DELETE":
      return {
        ...state,
        notif: false,
        idSender: state?.idSender.filter(item => item.idSender !== action.payload)
      };

    default:
      return state;
  }
};

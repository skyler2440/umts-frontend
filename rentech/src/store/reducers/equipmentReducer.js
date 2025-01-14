import { types } from "../actions";

const initialState = {
  equipment: 
    {
      catId: null,
      description: "",
      price: "",
      address: "",
      imageUrl: "",
      name: "",
    },
  
  isLoading: false,
  errors: null,
  isSuccess: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_EQUIP_LIST_START:
      return {
        ...state,
        isLoading: true,
        errors: null
      };
    case types.GET_EQUIP_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        equipment: payload
      };
    case types.GET_EQUIP_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };

    case types.GET_EQUIP_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errors: null
      };
    case types.GET_EQUIP_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        equipment: payload
      };
    case types.GET_EQUIP_ITEM_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };

    case types.POST_EQUIP_LIST_START:
      return {
        ...state,
        isLoading: true,
        errors: null
      };
    case types.POST_EQUIP_LIST_SUCCESS:
      const updatedPOSTEquipmentList = [...state.equipment, payload];
      return {
        ...state,
        isLoading: false,
        errors: null,
        equipment: updatedPOSTEquipmentList,
        isSuccess: true
      };
    case types.POST_EQUIP_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
        isSuccess: false
      };

    case types.PUT_EQUIP_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errors: null
      };
    case types.PUT_EQUIP_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        equipment: payload,
        isSuccess: true
      };
    case types.PUT_EQUIP_ITEM_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
        isSuccess: false
      };

    case types.DELETE_EQUIP_START:
      return {
        ...state,
        isLoading: true,
        errors: null
      };
    case types.DELETE_EQUIP_SUCCESS:
      const updatedEquipment = state.equipment.filter(
        item => item.id !== payload
      );
      return {
        ...state,
        isLoading: false,
        errors: null,
        equipment: updatedEquipment
      };
    case types.DELETE_EQUIP_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    default:
      return state;
  }
};

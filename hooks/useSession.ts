import { signIn, signOut } from "@/redux/features/login/sessionSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";

export function useSession() {
  const dispatch = useAppDispatch();
  const { session, isLoading } = useSelector(
    (state: RootState) => state.session
  );

  return {
    session,
    isLoading,
    signIn: (token: string) => dispatch(signIn(token)),
    signOut: () => dispatch(signOut()),
  };
}

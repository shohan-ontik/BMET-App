import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useCallback } from "react";

interface CustomBottomSheetProps extends BottomSheetModalProps {
  children: React.ReactNode;
  snapPoints?: string[];
  bottomSheetRef: React.RefObject<BottomSheetModal | null>;
  handleSheetChanges?: (index: number) => void;
}

export default function CommonSheet({
  children,
  snapPoints = ["80%", "90%", "100%"],
  bottomSheetRef,
  handleSheetChanges,
  ...props
}: Readonly<CustomBottomSheetProps>) {
  // Render backdrop component
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.2}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      android_keyboardInputMode="adjustResize"
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      {...props}
    >
      <BottomSheetView className="flex-1 h-full">{children}</BottomSheetView>
    </BottomSheetModal>
  );
}

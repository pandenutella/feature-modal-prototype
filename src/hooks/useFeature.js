import { useDispatch, useSelector } from "react-redux";
import { selectFeatures } from "../redux/modules/features/features.selector";
import {
  hideFeatureTips,
  setDoNotShowAgain,
  showFeatureTips,
} from "../redux/modules/features/features.slice";

const localStorageKey = "hidden_feature_tips";

const useFeature = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(selectFeatures);

  const showTips = (keys) => {
    let keysToShow = keys;

    const hiddenFeatureTipsRaw = localStorage.getItem(localStorageKey);
    const hiddenFeatureTips = hiddenFeatureTipsRaw
      ? JSON.parse(hiddenFeatureTipsRaw)
      : [];
    if (hiddenFeatureTips.length)
      keysToShow = keys.filter((key) => !hiddenFeatureTips.includes(key));

    if (!keysToShow.length) return;

    dispatch(showFeatureTips(keysToShow));
  };

  const toggle = (key, doNotShowAgain) =>
    dispatch(setDoNotShowAgain({ key, doNotShowAgain }));

  const hideTipsAsIs = () => dispatch(hideFeatureTips());

  const hideTips = () => {
    const keysToHidePermanently = data
      .filter((feature) => feature.doNotShowAgain)
      .map((feature) => feature.key);

    if (!keysToHidePermanently.length) {
      dispatch(hideFeatureTips());

      return;
    }

    const hiddenFeatureTipsRaw = localStorage.getItem(localStorageKey);
    const hiddenFeatureTips = hiddenFeatureTipsRaw
      ? JSON.parse(hiddenFeatureTipsRaw)
      : [];

    const updatedHiddenFeatureTips = [
      ...hiddenFeatureTips.filter(
        (key) => !keysToHidePermanently.includes(key)
      ),
      ...keysToHidePermanently,
    ];
    const updatedHiddenFeatureTipsRaw = JSON.stringify(
      updatedHiddenFeatureTips
    );

    localStorage.setItem(localStorageKey, updatedHiddenFeatureTipsRaw);
    dispatch(hideFeatureTips());
  };

  const clearHiddenTips = () => localStorage.removeItem(localStorageKey);

  return { showTips, toggle, hideTipsAsIs, hideTips, clearHiddenTips };
};

export default useFeature;

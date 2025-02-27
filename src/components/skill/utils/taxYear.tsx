export const getCurrentFafsaYear = () => {
  const currentYear = new Date().getFullYear();
  // FAFSA uses prior year tax information for the upcoming academic year
  return {
    academicYear: `${currentYear}-${currentYear + 1}`,
    taxYear: currentYear - 1,
    benefitsYears: `${currentYear - 1} or ${currentYear}`
  };
};

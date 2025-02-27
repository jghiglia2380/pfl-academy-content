import type { SkillBuilder as SkillBuilderType } from "../types";
import { CareerPath } from "./skill/career/CareerPath";
import { FafsaForm } from "./skill/fafsa/FafsaForm";
import { SmartGoals } from "./skill/smart/SmartGoals";
import { W4Form } from "./skill/w4/W4Form";
import { BudgetAllocation } from "./skill/budget/BudgetAllocation";
import { TaxCalculator } from "./skill/tax/TaxCalculator";
import { TaxEthics } from "./skill/ethics/TaxEthics";
import { TaxDocumentationScavengerHunt } from "./skill/tax-documentation-scavenger-hunt/TaxDocumentationScavengerHunt";
import { TaxDeductionsVsCredits } from "./skill/tax-deductions-vs-credits/TaxDeductionsVsCredits";
import { TaxPlanningChecklist } from "./skill/tax-panning/TaxPlanningChecklist";
import { FinancialInstitutionsServices } from "./skill/financial-institutions-services/FinancialInstitutionsServices";
import { BankAccountOpening } from "./skill/bank-account-opening/BankAccountOpening";
import { SavingVsInvesting } from "./skill/saving-vs-investing/SavingVsInvesting";
import { RuleOf72Exercise } from "./skill/rule-of-72/RuleOf72Exercise";
import { RiskReturnAnalysisExercise } from "./skill/risk-return-analysis/RiskReturnAnalysisExercise";
import { FinancialPlanningRolePlayExercise } from "./skill/financial-planning-role-play/FinancialPlanningRolePlayExercise";
import { RiskToleranceAssessment } from "./skill/risk-tolerance/RiskToleranceAssessment";
import { BankStatementExercise } from "./skill/bank-statement-exercise/BankStatementExercise";
import { RetirementPlanningWorksheet } from "./skill/retirement-planning-worksheet/RetirementPlanningWorksheet";
import { LoanComparisonExercise } from "./skill/loan-comparison/LoanComparisonExercise";
import { CreditSourcesExercise } from "./skill/credit-sources/CreditSourcesExercise";
import { CreditScoresExercise } from "./skill/credit-scores/CreditScoresExercise";
import { ConsumerCreditExercise } from "./skill/consumer-credit/ConsumerCreditExercise";
import { CollegeCostsExercise } from "./skill/college-costs/CollegeCostsExercise";
import { CreditCardComparisonExercise } from "./skill/credit-card-comparison/CreditCardComparisonExercise";
import { OnlineVsInStoreExercise } from "./skill/online-vs-in-store/OnlineVsInStoreExercise";
import { PhishingScamExercise } from "./skill/phishing-scam/PhishingScamExercise";
import { TheftProtectionExercise } from "./skill/theft-protection/TheftProtectionExercise";
import { HousingComparisonExercise } from "./skill/housing-comparison/HousingComparisonExercise";
import { ApartmentHuntingExercise } from "./skill/apartment-hunting/ApartmentHuntingExercise";
import { RentalBudgetPlanningExercise } from "./skill/rental-budget-planning/RentalBudgetPlanningExercise";
import { RiskScenarioExercise } from "./skill/risk-scenario/RiskScenarioExercise";
import { InsuranceChoicesExercise } from "./skill/insurance-choices/InsuranceChoicesExercise";
import { MedicalCostsExercise } from "./skill/medical-costs/MedicalCostsExercise";
import { GamblingEntertainmentExercise } from "./skill/gambling-entertainment/GamblingEntertainmentExercise";
import { ResponsibleGamblingExercise } from "./skill/responsible-gambling/ResponsibleGamblingExercise";
import { DebtManagementExercise } from "./skill/debt-management/DebtManagementExercise";
import { CharitableGivingExercise } from "./skill/charitable-giving/CharitableGivingExercise";
import { CharitableOrganiationsExercise } from "./skill/charitable-organiations/CharitableOrganiationsExercise";
import { LongevityAndRetirementExercise } from "./skill/longevity-and-retirement/LongevityAndRetirementExercise";

interface SkillBuilderProps {
  skillBuilder: SkillBuilderType;
  onComplete: (result: { completed: boolean; score?: number }) => void;
}

export function SkillBuilder({ skillBuilder, onComplete }: SkillBuilderProps) {
  return skillBuilder.type === "career-path" ? (
    <CareerPath skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "fafsa" ? (
    <FafsaForm skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "w4-form" ? (
    <W4Form skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "smart-goals" ? (
    <SmartGoals skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "budget-allocation" ? (
    <BudgetAllocation skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "tax-calculator" ? (
    <TaxCalculator skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "tax-ethics" ? (
    <TaxEthics skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "tax-documentation-scavenger-hunt" ? (
    <TaxDocumentationScavengerHunt
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "tax-deductions-vs-credits" ? (
    <TaxDeductionsVsCredits
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "tax-planning-checklist" ? (
    <TaxPlanningChecklist skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "financial-institutions-services" ? (
    <FinancialInstitutionsServices
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "bank-account-opening" ? (
    <BankAccountOpening skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "bank-statement-reconciliation" ? (
    <BankStatementExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "saving-investing-comparison" ? (
    <SavingVsInvesting skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "rule-of-72" ? (
    <RuleOf72Exercise skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "risk-return-analysis" ? (
    <RiskReturnAnalysisExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "financial-planning-role-play" ? (
    <FinancialPlanningRolePlayExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "risk-tolerance-assessment" ? (
    <RiskToleranceAssessment
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "retirement-planning-worksheet" ? (
    <RetirementPlanningWorksheet
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "longevity-retirement-planning-worksheet" ? (
    <LongevityAndRetirementExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "loan-comparison-exercise" ? (
    <LoanComparisonExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "credit-sources" ? (
    <CreditSourcesExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "credit-scores" ? (
    <CreditScoresExercise skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "consumer-credit" ? (
    <ConsumerCreditExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "college-costs" ? (
    <CollegeCostsExercise skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "credit-card-comparison" ? (
    <CreditCardComparisonExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "online-vs-in-store" ? (
    <OnlineVsInStoreExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "phishing-scam-video" ? (
    <PhishingScamExercise skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "theft-protection-checklist" ? (
    <TheftProtectionExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "housing-comparison" ? (
    <HousingComparisonExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "apartment-hunting" ? (
    <ApartmentHuntingExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "rental-budget-planning" ? (
    <RentalBudgetPlanningExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "risk-scenario-analysis" ? (
    <RiskScenarioExercise skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "insurance-choices" ? (
    <InsuranceChoicesExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "medical-costs" ? (
    <MedicalCostsExercise skillBuilder={skillBuilder} onComplete={onComplete} />
  ) : skillBuilder.type === "gambling-entertainment" ? (
    <GamblingEntertainmentExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "responsible-gambling" ? (
    <ResponsibleGamblingExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "debt-management" ? (
    <DebtManagementExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "charitable-giving" ? (
    <CharitableGivingExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : skillBuilder.type === "charitable-organiations" ? (
    <CharitableOrganiationsExercise
      skillBuilder={skillBuilder}
      onComplete={onComplete}
    />
  ) : (
    <div>Unknown skill builder type: {skillBuilder.type}</div>
  );
}

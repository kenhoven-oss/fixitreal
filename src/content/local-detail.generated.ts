/**
 * GENERATED FILE — DO NOT EDIT BY HAND.
 *
 * Produced by scripts/build-local-detail.mjs from the verified research JSON
 * under research/local/. Re-run that script to regenerate; a manual edit here
 * is lost on the next run and would put an unsourced figure on a live page.
 *
 * Every source URL below passed the official-host check in that script
 * (.gov/.us or a municipal code publisher). Lead-gen sites are denied.
 *
 * 102 metro(s); 401 metro x guide page(s) indexable.
 */
import type { LocalDetail } from "./local-detail-types.ts";

export const LOCAL_DETAIL: Record<string, LocalDetail> = {
  "albuquerque-nm": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Albuquerque Planning Department, Building Safety Division",
      "url": "https://www.cabq.gov/planning/building-safety-division"
    },
    "codeEdition": {
      "text": "Albuquerque enforces the state-adopted code set: the 2021 New Mexico Commercial Building Code, 2021 New Mexico Residential Building Code, 2021 New Mexico Existing Building Code, 2021 New Mexico Plumbing Code, 2021 New Mexico Mechanical Code and the 2020 New Mexico Electrical Code, which took effect in the city on September 28, 2023. On top of those the city enforces its own 2024 Uniform Administrative Code, which carries Albuquerque's amendments to the state codes along with the permit fee tables.",
      "sourceUrl": "https://www.cabq.gov/planning/building-safety-division/current-building-codes"
    },
    "permitPolicy": {
      "text": "Albuquerque issues permits only to a contractor licensed by the New Mexico Construction Industries Division, with two exceptions for homeowners: a homeowner may be permitted to build a single-family house or garage for their own use, and a homeowner may be issued an electrical or plumbing permit after passing a written city exam with a score of 75% or better. The city allows four hours for each exam, two attempts with a 30-day wait between them, and one passing exam per year. The city's permit page separately states that water heater installation and ductwork may only be done by a licensed contractor, and the homeowner guide says gas work always requires a licensed New Mexico contractor.",
      "sourceUrl": "https://www.cabq.gov/planning/building-safety-division/permits"
    },
    "registration": {
      "text": "There is no separate city trade licence. Permit issuance in Albuquerque is tied to a State of New Mexico Construction Industries Division contractor licence, unless the applicant is exempt under NMSA 60-13-3(D) or qualifies under the homeowner exceptions. The city's code names the licence classifications it recognises, including licensed electrical, mechanical and plumbing contractors, and for solar PV work an EE-98, EL-1 or ER-1 licence.",
      "sourceUrl": "https://www.cabq.gov/planning/documents/2024-uac-adopted.pdf"
    },
    "codeItems": [
      {
        "text": "Albuquerque rewrites the model rule on unlisted water heaters: where the plumbing code allows an unlisted heater to be approved case by case, the city's amendment says unlisted water heaters shall not be installed at all. The same amendment runs through the mechanical code, where unlisted central-heating furnaces, boilers, floor furnaces and wall furnaces are likewise banned outright rather than judged on clearances.",
        "sourceUrl": "https://www.cabq.gov/planning/documents/2024-uac-adopted.pdf"
      },
      {
        "text": "For a water heater in a residential garage the city deletes the model code's escape clause for appliances listed as flammable vapor ignition resistant, so an Albuquerque inspector applies the garage installation rule to every heater regardless of how the unit is listed.",
        "sourceUrl": "https://www.cabq.gov/planning/documents/2024-uac-adopted.pdf"
      },
      {
        "text": "Where two or more water heaters feed a common manifold, Albuquerque requires separate isolation valves on both the hot and the cold line within three feet of each heater — an addition the city makes to plumbing code section 606.5.",
        "sourceUrl": "https://www.cabq.gov/planning/documents/2024-uac-adopted.pdf"
      },
      {
        "text": "Albuquerque adds a gas shutoff the national codes do not call for: an additional full-bore gas shutoff valve downstream of the utility's gas meter, ahead of any distribution into the house piping. The city applies this to new systems and to re-pipes, so it can come up on a gas water heater job that reworks the gas line.",
        "sourceUrl": "https://www.cabq.gov/planning/documents/2024-uac-adopted.pdf"
      },
      {
        "text": "The city's plumbing amendments also set an Albuquerque-specific storm drainage design rainfall rate of two inches per hour, and require every cleanout to be sized for the largest diameter pipe in the run rather than the pipe it sits on.",
        "sourceUrl": "https://www.cabq.gov/planning/documents/2024-uac-adopted.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Installing or replacing a water heater in Albuquerque takes a plumbing/mechanical permit, and the city states the work may only be done by a licensed contractor — a homeowner cannot do their own gas water heater. The fee is the flat administrative charge on the permit application plus the per-item unit fees in the city's plumbing and mechanical fee tables, and the city inspects the finished work.",
        "sourceUrl": "https://www.cabq.gov/planning/documents/2024-uac-adopted.pdf",
        "fee": "$47.00 administrative charge applicable to all applications and additions to permit, plus the per-item unit fees in Table 112-D Plumbing Permit Fees and Table 112-C Mechanical Permit Fees (for example $6.00 per gas outlet, $10.00 gas line test with no outlets or appliances)",
        "feeAsOf": "2024 edition, City of Albuquerque Uniform Administrative Code"
      },
      "plumber-service-call": {
        "requirement": "Albuquerque prices a plumbing permit as a flat administrative charge plus a charge for each item of work, so a one-fixture call and a multi-fixture call are not priced the same. The city does not require a permit to clear a stoppage, fix a leak in a pipe, valve or fixture, pull and reset a water closet, or replace a plumbing fixture with the same type of configuration, as long as valves, pipes and fixtures are not rearranged.",
        "sourceUrl": "https://www.cabq.gov/planning/documents/2024-uac-adopted.pdf",
        "fee": "$47.00 administrative charge applicable to all applications and additions to permit, plus $10.00 per plumbing fixture (includes drain and vent), $14.00 water distribution system, $14.00 water service from property line to house, $28.00 house or building sewer including 2-way cleanout",
        "feeAsOf": "2024 edition, City of Albuquerque Uniform Administrative Code"
      },
      "electrician-service-call": {
        "requirement": "An electrical permit is required in Albuquerque to install an appliance, device, piece of equipment or wiring, and to add to, alter or replace existing appliances, devices, wiring or equipment. The fee is a flat administrative charge plus unit fees for what is installed. No permit is needed to swap a receptacle for one of the same type and configuration, to repair or replace a fixed listed appliance of the same type and rating in the same location, or to remove wiring.",
        "sourceUrl": "https://www.cabq.gov/planning/documents/2024-uac-adopted.pdf",
        "fee": "$47.00 administrative charge applicable to all applications and additions to permits, plus unit fees including $8.00 per panel, $8.00 per residential fixed appliance of 30 amps or over, $40.00 per meter loop, $1.50 each for the first 20 outlets and $0.90 each over 20",
        "feeAsOf": "2024 edition, City of Albuquerque Uniform Administrative Code"
      },
      "garbage-disposal-replacement": {
        "requirement": "Albuquerque publishes no permit line for a garbage disposal on its own. Its code does exempt replacing a plumbing fixture with the same type of configuration from needing a plumbing permit, and exempts repairing or replacing a fixed listed appliance of the same type and rating in the same location from needing an electrical permit; re-piping, rearranging valves or pipes, or new wiring falls outside those exemptions and is permit work.",
        "sourceUrl": "https://www.cabq.gov/planning/documents/2024-uac-adopted.pdf"
      }
    }
  },
  "anaheim-ca": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Anaheim Building Division",
      "url": "https://www.anaheim.gov/5252"
    },
    "codeEdition": {
      "text": "Anaheim enforces the California building standards that took effect statewide on 1 January 2026: the 2025 California Residential Code (2024 IRC), 2025 California Plumbing Code (2024 UPC), 2025 California Mechanical Code (2024 UMC) and 2025 California Electrical Code (NFPA 70-2023). Any local Anaheim amendments were not verifiable.",
      "sourceUrl": "https://up.codes/codes/california"
    },
    "permitPolicy": {
      "text": "In California a permit is pulled either by a licensed contractor or by the property owner as an owner-builder. A homeowner improving their principal residence is exempt from contractor licensing only if the work is done before sale, they have lived in the home for the 12 months before the work is finished, and they have not used the exemption on more than two structures in any three-year period.",
      "sourceUrl": "https://www.cslb.ca.gov/Consumers/Building_Officials/Owner_Builder_Overview.aspx"
    },
    "codeItems": [
      {
        "text": "California building departments are directed to verify, as a condition of issuing the permit, that the contractor's licence number used to pull it is valid and in good standing, and to require owner-builder verification under Health and Safety Code sections 19830, 19831 and 19832 on an owner-builder permit.",
        "sourceUrl": "https://www.cslb.ca.gov/Resources/GuidesAndPublications/CALBOGuidelines.pdf"
      },
      {
        "text": "An owner-builder may do most of the work themselves but is barred from doing well-drilling work (C-57 classification); any subcontractors they hire must be properly licensed.",
        "sourceUrl": "https://www.cslb.ca.gov/Consumers/Building_Officials/Owner_Builder_Overview.aspx"
      }
    ],
    "byGuide": {}
  },
  "anchorage-ak": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Municipality of Anchorage, Development Services Department (Building Safety)",
      "url": "https://www.muni.org/departments/public_works_infrastructure/development_services/permits_inspections/permits.php"
    },
    "codeEdition": {
      "text": "Anchorage adopts its own package of codes in Anchorage Municipal Code Title 23: the 2024 International Building, Mechanical, Residential, Fire, Energy Conservation, Existing Building and Fuel Gas Codes, the 2024 Uniform Plumbing Code (not the IPC), and the 2023 National Electrical Code, each by reference with local amendments. The current local amendments took effect May 18, 2026.",
      "sourceUrl": "https://www.muni.org/Documents/Departments/Public%20Works%20and%20Infrastructure/Development%20Services%20home/codes-handouts/Code%20Archive%202018/CH%2023.05.pdf"
    },
    "permitPolicy": {
      "text": "Inside the Building Safety Service Area, any owner, contractor or authorized agent must apply to the building official and get a permit before replacing any electrical, gas, mechanical or plumbing system, unless the code specifically exempts the work. Outside that service area the building permit, plan review and inspection process is optional, and only land use permits are required for new buildings, additions or a change of use.",
      "sourceUrl": "https://www.muni.org/departments/public_works_infrastructure/development_services/permits_inspections/residential_building_permits.php"
    },
    "registration": {
      "text": "Anchorage licenses trades itself on top of the state. Work regulated by Title 23 has to be administered by contractors licensed by both the State of Alaska and the Municipality in the relevant trade, and that licensing applies even when the work is exempt from needing a permit. Any contractor or journeyman doing gas piping, plumbing or sheet metal work must be tested and licensed by the Municipality, and it is unlawful to work as a plumber, gas fitter or sheet metal journeyman without a municipal journeyman certificate of qualification, or as a plumber or sheet metal trainee without a trainee certificate. A property owner is excepted: an owner may administer alterations to an existing structure and may do the work on their own existing structure or their own residence.",
      "sourceUrl": "https://www.muni.org/Documents/Departments/Public%20Works%20and%20Infrastructure/Development%20Services%20home/codes-handouts/Code%20Archive%202018/CH%2023.10.pdf"
    },
    "codeItems": [
      {
        "text": "Anchorage requires seismic strapping on water heaters, and its local amendment only relaxes it for very small tanks: a tank-type gas or electric heater of 10 gallons or less needs just one approved strap, placed as near the vertical middle of the heater as possible without blocking access to the controls.",
        "sourceUrl": "https://www.muni.org/Documents/Departments/Public%20Works%20and%20Infrastructure/Development%20Services%20home/codes-handouts/Code%20Archive%202018/CH%2023.25.pdf"
      },
      {
        "text": "Anchorage rewrote the drain pan rule. A water heater must sit in a watertight corrosion-resistant pan with a drain of at least 3/4 inch discharging to an approved location, and a water heater enclosure must have an approved floor drain. The floor drain is waived for a garage whose floor slopes to the exterior, for a heater with a listed flood-control safety device, and for an attic or above-ceiling install whose pan drains to an approved location; the pan itself is waived on a concrete slab on grade and in a garage where corrosion-resistant material covers the whole platform and turns up the adjoining walls at least two inches.",
        "sourceUrl": "https://www.muni.org/Documents/Departments/Public%20Works%20and%20Infrastructure/Development%20Services%20home/codes-handouts/Code%20Archive%202018/CH%2023.25.pdf"
      },
      {
        "text": "Where a water heater is in an Anchorage garage, the local amendment requires the relief valve piping to discharge to the floor over the edge of the platform rather than terminating wherever the manufacturer's generic instructions allow.",
        "sourceUrl": "https://www.muni.org/Documents/Departments/Public%20Works%20and%20Infrastructure/Development%20Services%20home/codes-handouts/Code%20Archive%202018/CH%2023.25.pdf"
      },
      {
        "text": "Anchorage lets a properly sized potable-water expansion tank stand in for water hammer arresters in a single-family or duplex home, provided it is installed on the cold water piping between the house shutoff valve and each water heater; if the expansion tank does not cure the water hammer, mechanical arresters are then required.",
        "sourceUrl": "https://www.muni.org/Documents/Departments/Public%20Works%20and%20Infrastructure/Development%20Services%20home/codes-handouts/Code%20Archive%202018/CH%2023.25.pdf"
      },
      {
        "text": "Anchorage sets a minimum rather than only a maximum hot water temperature: the hot water supplied to showers, tub-and-shower combinations and tub fillers must be at least 110 degrees Fahrenheit, except for engineered systems.",
        "sourceUrl": "https://www.muni.org/Documents/Departments/Public%20Works%20and%20Infrastructure/Development%20Services%20home/codes-handouts/Code%20Archive%202018/CH%2023.25.pdf"
      },
      {
        "text": "Anchorage's plumbing permit exemptions are narrow and specific: clearing stoppages, stopping leaks, pulling and resetting a water closet, and replacing a hose bibb, drinking fountain, wash fountain, sink or lavatory with its faucet, each only where no piping other than a trap or trap arm is replaced or rearranged. A water heater or other appliance swap is not on that list. On the electrical side the code does exempt repair or replacement of a fixed approved appliance of the same type and rating in the same location.",
        "sourceUrl": "https://www.muni.org/Documents/Departments/Public%20Works%20and%20Infrastructure/Development%20Services%20home/codes-handouts/Code%20Archive%202018/CH%2023.10.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Anchorage has a dedicated cheap permit for this job: a retrofit permit covers the like-for-like replacement of a water heater in a residential building of four or fewer dwelling units, needs no plan review, and includes two inspections in the fee. The inspector checks the Anchorage amendments - seismic strapping, the watertight pan with a 3/4-inch drain, and relief valve piping discharging over the platform edge in a garage.",
        "sourceUrl": "https://www.muni.org/Documents/Departments/Public%20Works%20and%20Infrastructure/Development%20Services%20home/codes-handouts/Code%20Archive%202018/CH%2023.10.pdf",
        "fee": "$175, 2 inspections included (retrofit permit, like-for-like water heater replacement in a residential building of 4 or fewer dwelling units); extra inspections $175 per hour, 1 hour minimum",
        "feeAsOf": "2026-05-18"
      },
      "plumber-service-call": {
        "requirement": "An electrical, plumbing or mechanical alteration to an Anchorage home of four or fewer dwelling units is a retrofit permit with no plan review, priced at a flat fee that includes two inspections; a second re-inspection of the same correction issue is charged at a higher rate than the first.",
        "sourceUrl": "https://www.muni.org/Documents/Departments/Public%20Works%20and%20Infrastructure/Development%20Services%20home/codes-handouts/Code%20Archive%202018/CH%2023.10.pdf",
        "fee": "$175, 2 inspections included (retrofit permit for an electrical, plumbing or mechanical alteration to a residential building of 4 or fewer dwelling units); inspections beyond those allotted $175 per hour (1 hour minimum); second and subsequent re-inspection of the same issue $265 per hour; unscheduled or after-hours inspection $350 per hour; Sunday or holiday inspection $400 per hour; backflow preventer test $175, 1 inspection",
        "feeAsOf": "2026-05-18"
      },
      "garbage-disposal-replacement": {
        "requirement": "Swapping a garbage disposal is not one of Anchorage's listed plumbing permit exemptions, so it falls under the retrofit permit for the like-for-like replacement of plumbing, mechanical and electrical equipment, fixtures and appliances, at the same flat fee with two inspections included.",
        "sourceUrl": "https://www.muni.org/Documents/Departments/Public%20Works%20and%20Infrastructure/Development%20Services%20home/codes-handouts/Code%20Archive%202018/CH%2023.10.pdf",
        "fee": "$175, 2 inspections included (retrofit permit, like-for-like replacement of plumbing, mechanical and electrical equipment, fixtures and appliances)",
        "feeAsOf": "2026-05-18"
      },
      "electrician-service-call": {
        "requirement": "Small electrical jobs in Anchorage are priced as flat retrofit permits rather than by project value: one new 20-amp circuit with up to six general purpose receptacles or light fixtures, or up to six receptacles or fixtures added to existing 20-amp circuits, each carry the same flat fee with two inspections included, and no plan review is required.",
        "sourceUrl": "https://www.muni.org/Documents/Departments/Public%20Works%20and%20Infrastructure/Development%20Services%20home/codes-handouts/Code%20Archive%202018/CH%2023.10.pdf",
        "fee": "$175, 2 inspections included (retrofit permit: one new 20 amp circuit with no more than six general purpose receptacles or light fixtures, or no more than six receptacles or fixtures added to existing 20 amp circuits); additional inspections $175 per hour, 1 hour minimum; code compliance inspection $175 per hour, 2 hour minimum, per inspector",
        "feeAsOf": "2026-05-18"
      }
    }
  },
  "arlington-tx": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Arlington Planning & Development Services (101 W. Abram St.)",
      "url": "https://www.arlingtontx.gov/Business/Planning-Development/Planning-Development/Permitting-Inspections"
    },
    "codeEdition": {
      "text": "Arlington's City Council adopted the 2021 editions of the International Codes and the 2020 National Electrical Code on November 1, 2022, and permit applications have had to comply since January 1, 2023. The city places the 2021 IBC, IRC, IECC, IEBC and ISPSC in its Construction Chapter, the 2021 IMC in its Mechanical Chapter, the 2021 IPC and IFGC in its Plumbing Chapter, the 2021 IFC in its Fire Prevention Chapter and the 2020 NEC in its Electrical Chapter, each with the city's own amendments written into the chapter.",
      "sourceUrl": "https://www.arlingtontx.gov/Business/Planning-Development/Building-Codes"
    },
    "permitPolicy": {
      "text": "Arlington issues trade permits only to a business registered with the Building Official, and the plumbing chapter says only the designated Master Plumber on that registration may request the inspections. There is a homeowner exemption: registration does not apply to alteration or repair work on a residential structure where the person doing the work owns it, lives there as their legal residence, and is not helped by anyone being paid. That homeowner is automatically treated as a registrant, but the permit itself is still required. The electrical chapter sets the same homeowner exemption and charges no registration fee for it.",
      "sourceUrl": "https://www.arlingtontx.gov/files/assets/city/v/2/city-secretary/documents/city-code-of-ordinances/plumbing-chapter.pdf"
    },
    "registration": {
      "text": "Arlington requires its own business registration on top of the state license before a contractor can pull a permit. The fee schedule prices a business registration recorded with the Building Official at $100.00 for one year or $175.00 for two years, and registration expires annually. An electrical registrant must file the TDLR-issued Electrical Contractor registration certificate and name a Master of Record registered with TDLR, and must carry general liability insurance of at least $300,000 per occurrence with a $600,000 aggregate plus a $300,000 products-and-completed-operations aggregate. A plumbing registrant must name the licensed Master Plumber or Landscape Irrigator who represents the firm; a registrant working in city right-of-way must carry $500,000 per-occurrence public liability insurance and name the city as certificate holder.",
      "sourceUrl": "https://www.arlingtontx.gov/files/assets/city/v/1/planning-and-development-services/documents/permit-applications-amp-forms/planning-development-services-fee-schedule_10.1.2026_1.pdf"
    },
    "codeItems": [
      {
        "text": "Arlington will not let a replacement water heater sit on the garage floor. The city's building inspections FAQ says an electric or gas water heater in or reachable from a garage has to be raised 18 inches above the floor when it is replaced, because the thermostat sparks when it cuts in and gasoline vapour settles at floor level. Arlington notes it once allowed electric heaters directly on a garage floor and no longer does.",
        "sourceUrl": "https://www.arlingtontx.gov/Business/Planning-Development/Planning-Development/Permitting-Inspections/Building-Permits-Inspections-FAQs"
      },
      {
        "text": "Arlington rewrote the attic water heater rules in its Plumbing Chapter. An attic holding a water heater needs an unobstructed passageway at least 30 inches high and 22 inches wide, no more than 20 feet long, with continuous solid flooring at least 24 inches wide, a level service space at least 30 by 30 inches at the service side, and a clear access opening of at least 20 by 30 inches. Access has to be by a permanent stair, a pull-down stair rated for 300 lb, or a door from an upper floor — an access panel only with the code official's prior approval. The city also added its own section requiring a light fixture switched at the passageway opening and a receptacle within 25 feet of the heater, and requires a stairway or fixed ladder where the platform is more than eight feet above the floor.",
        "sourceUrl": "https://www.arlingtontx.gov/files/assets/city/v/2/city-secretary/documents/city-code-of-ordinances/plumbing-chapter.pdf"
      },
      {
        "text": "Arlington added its own rule for corrugated stainless steel gas tubing, which matters on a gas water heater changeout. A shutoff valve on a CSST system has to be supported by an approved termination fitting or equivalent support sized for the valve, and the support has to sit no more than 12 inches from the centre of the valve so vibration cannot work the valve loose.",
        "sourceUrl": "https://www.arlingtontx.gov/files/assets/city/v/2/city-secretary/documents/city-code-of-ordinances/plumbing-chapter.pdf"
      },
      {
        "text": "Arlington amended NEC 230.70(A)(1) so the service disconnecting means must be at a readily accessible location either outside the building or inside at the nearest point where the service conductors enter. It also amended NEC 422.31(B) so that for a permanently connected appliance rated over 300 volt-amperes — a tank water heater or a disposer, for instance — the branch-circuit switch or breaker counts as the disconnect only where it is within sight of and readily accessible to the appliance, or can be locked open and is readily accessible to it.",
        "sourceUrl": "https://www.arlingtontx.gov/files/assets/city/v/2/city-secretary/documents/city-code-of-ordinances/electrical-code-chapter.pdf"
      },
      {
        "text": "Arlington gives itself room on arc-fault breakers in older houses. Its amendment to NEC 210.12(A) waives AFCI breakers where an existing panelboard or breaker is simply being replaced, the branch circuit itself is not being repaired, replaced, extended or altered, and the dwelling was built before January 1, 2002.",
        "sourceUrl": "https://www.arlingtontx.gov/files/assets/city/v/2/city-secretary/documents/city-code-of-ordinances/electrical-code-chapter.pdf"
      },
      {
        "text": "If a house in Arlington loses electric or gas service, the city runs a defined restoration path rather than leaving it to the utility. An electrician or plumber pulls the permit, a same-day inspection is requested (available for occupied homes and businesses only), and only then does the city send the release to Oncor or Atmos to turn the service back on. Same-day and after-hours inspections are both priced at $200.00 in the fee schedule.",
        "sourceUrl": "https://www.arlingtontx.gov/Business/Planning-Development/Planning-Development/Permitting-Inspections/Emergency-Electrical-Gas-Services"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Arlington requires a permit and inspection to replace a water heater — the city names it as one of the most common homeowner permits — and the inspector will expect a unit in or off the garage to be raised 18 inches above the floor.",
        "sourceUrl": "https://www.arlingtontx.gov/files/assets/city/v/1/planning-and-development-services/documents/permit-applications-amp-forms/planning-development-services-fee-schedule_10.1.2026_1.pdf",
        "fee": "$100.00 base permit fee plus $20.00 for the first water heater (and $7.50 for each additional water heater) for plumbing work not tied to a building permit",
        "feeAsOf": "Effective October 1, 2026 (Resolution No. 26-288)"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work in Arlington that is not part of a building permit carries a base permit fee plus a charge for each item of work, and the permit can only be issued to a city-registered business that names its Master Plumber — unless you are the homeowner doing the repair yourself in the house you live in.",
        "sourceUrl": "https://www.arlingtontx.gov/files/assets/city/v/1/planning-and-development-services/documents/permit-applications-amp-forms/planning-development-services-fee-schedule_10.1.2026_1.pdf",
        "fee": "$100.00 base permit fee, plus item fees such as $15.00 water line, $15.00 sewer line, $30.00 to replace fixtures for the first five ($7.50 each after, capped at $600.00 per address), $30.00 for the first indoor backflow device",
        "feeAsOf": "Effective October 1, 2026 (Resolution No. 26-288)"
      },
      "electrician-service-call": {
        "requirement": "Arlington requires an electrical permit before any electrical equipment over 24 volts is installed, altered or added to, and electrical work not tied to a building permit is billed as a base fee plus per-item charges; a reinspection, emergency inspection or same-day inspection each costs extra.",
        "sourceUrl": "https://www.arlingtontx.gov/files/assets/city/v/1/planning-and-development-services/documents/permit-applications-amp-forms/planning-development-services-fee-schedule_10.1.2026_1.pdf",
        "fee": "$100.00 base permit fee, plus item fees such as $35.00 for a service or sub panel up to 200 amps, $60.00 for 201–400 amps, $75.00 over 400 amps, $0.50 per opening for the first 100 lights, outlets, fixtures, switches and receptacles, and $200.00 for a reinspection, emergency or same-day inspection",
        "feeAsOf": "Effective October 1, 2026 (Resolution No. 26-288)"
      }
    }
  },
  "arlington-va": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Arlington County Department of Community Planning, Housing and Development, Inspection Services Division",
      "url": "https://www.arlingtonva.us/Government/Programs/Building/Permits"
    },
    "codeEdition": {
      "text": "Arlington County enforces the Virginia Uniform Statewide Building Code, which the state Board of Housing and Community Development writes and amends; localities enforce it rather than writing their own technical amendments. The 2021 Virginia codes took effect January 18, 2024, adopting the 2021 I-codes referenced through the Virginia Construction Code and the 2020 National Electrical Code.",
      "sourceUrl": "https://www.dhcd.virginia.gov/codes"
    },
    "permitPolicy": {
      "text": "Arlington's electrical ordinance lets a homeowner pull their own permit: a permit may be issued to a person whether registered or not for work in a single-family dwelling or townhouse used only as a residence, provided that person is the bona fide owner or the owner's agent. Otherwise the work has to be permitted by a registered electrical contractor or master electrician, and depending on who holds the permit the county may require a Permit Authorization Affidavit. All permits are applied for online through Permit Arlington, and half the total permit fee is due as a non-refundable filing fee at application.",
      "sourceUrl": "https://www.arlingtonva.us/files/sharedassets/public/v/1/building/documents/fee-schedules/fy27-isd-fee-schedule.pdf"
    },
    "registration": {
      "text": "Arlington publishes no county trade registration fee or bond for plumbers and electricians; its electrical ordinance refers to a registered electrical contractor or master electrician, and the Trade Name Registration link on the county's permit pages goes to the Virginia State Corporation Commission's business entity filings rather than to a county trade licence.",
      "sourceUrl": "https://www.arlingtonva.us/files/sharedassets/public/v/1/building/documents/fee-schedules/fy27-isd-fee-schedule.pdf"
    },
    "codeItems": [
      {
        "text": "Replacing a gas water heater or any other fuel-burning appliance in an existing Arlington home triggers a vent and chimney check under Virginia Construction Code M1801.1.1 and G2425.1.1: the vent or chimney has to be correctly sized and clean, free of obstruction, defects and deterioration. Where the county does not inspect it, the installer has to sign Arlington's Vent/Chimney Certification, giving their DPOR licence number, and hand it to the inspector.",
        "sourceUrl": "https://www.arlingtonva.us/wp-content/uploads/sites/38/2016/09/Vent_Chimney_Certification.pdf"
      },
      {
        "text": "Arlington splits plumbing replacements by fuel. Replacing fixtures or other elements on gas-fuelled equipment needs a permit and inspections, while on equipment that is not gas-fuelled a replacement of the same type, size and location needs no permit at all.",
        "sourceUrl": "https://www.arlingtonva.us/Government/Programs/Building/Permits/Plumbing-Gas"
      },
      {
        "text": "On the electrical side, replacing a fixture, appliance or wiring of the same type, size and location needs no Arlington permit, unless the item sits in a plenum or penetrates fire-rated or smoke-protected construction, in which case a building permit is required.",
        "sourceUrl": "https://www.arlingtonva.us/Government/Programs/Building/Permits/Electrical"
      },
      {
        "text": "Any Arlington plumbing permit that includes a backflow device cannot be finaled until a cross connection inspection is done, and that inspection has to be requested through a separate cross connection application. The county charges a cross connection inspection fee of $103.",
        "sourceUrl": "https://www.arlingtonva.us/Government/Programs/Building/Permits/Plumbing-Gas"
      },
      {
        "text": "Plumbing permits involving fixtures often get a second review by the county's Department of Environmental Services to validate drainage fixture units, and a fixture count may be required with the application. A new or relocated water heater in a building the code treats as commercial needs an approved building permit before the plumbing/gas permit can be applied for.",
        "sourceUrl": "https://www.arlingtonva.us/Government/Programs/Building/Permits/Plumbing-Gas"
      },
      {
        "text": "Virginia deletes NEC Section 210.8(F) in its entirety from the NFPA 70 it enforces, so the national rule extending GFCI protection to outdoor outlets serving equipment such as air conditioners does not apply in Arlington.",
        "sourceUrl": "https://law.lis.virginia.gov/admincode/title13/agency5/chapter63/section300/"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a gas water heater in Arlington needs a plumbing/gas permit and inspections, including a vent and chimney check; swapping an electric water heater for the same type, size and location in the same place does not need a permit.",
        "sourceUrl": "https://www.arlingtonva.us/files/sharedassets/public/v/1/building/documents/fee-schedules/fy27-isd-fee-schedule.pdf",
        "fee": "Plumbing: base permit fee $139 per address per permit for replacing or setting fixtures and appliances, plus $60 each for all other plumbing fixtures, drains and appliances; minimum fee $149 for one- and two-family detached dwellings and townhouses not more than 3 stories; plus a 2% USBC Code Academy levy and a 10% automation enhancement surcharge",
        "feeAsOf": "July 1, 2026"
      },
      "plumber-service-call": {
        "requirement": "Adding, removing or relocating a plumbing fixture, appliance or pipe in Arlington needs a plumbing/gas permit, charged as a base fee per permit plus a charge per fixture, with a minimum fee for houses and townhouses.",
        "sourceUrl": "https://www.arlingtonva.us/files/sharedassets/public/v/1/building/documents/fee-schedules/fy27-isd-fee-schedule.pdf",
        "fee": "Base permit fee $139 per address, per permit; all other plumbing fixtures, drains and appliances $60 each plus the base fee; water services, new, replace or repair $174 each; building sewer repair, relocate or lower $174 each; minimum fee $149 for one- and two-family detached dwellings and townhouses not more than 3 stories; plus a 2% USBC Code Academy levy and a 10% automation enhancement surcharge",
        "feeAsOf": "July 1, 2026"
      },
      "electrician-service-call": {
        "requirement": "Adding, removing or relocating wiring, fixtures or appliances in Arlington needs an electrical permit, priced by circuit, by group of devices and by service size, with a minimum fee for a house or townhouse.",
        "sourceUrl": "https://www.arlingtonva.us/files/sharedassets/public/v/1/building/documents/fee-schedules/fy27-isd-fee-schedule.pdf",
        "fee": "Minimum permit fee $186 for one- and two-family detached dwellings and townhouses not more than 3 stories; each circuit $22.56 plus the $175 base fee; each 4 devices, receptacles or switch outlets $28.99 plus the $175 base fee; receptacle outlets greater than 20 amperes $75 per outlet; service equipment, first 500 amperes, original installation or replacement $272; sub-panels $72 each; disconnects $75 each; plus a 2% USBC Code Academy levy and a 10% automation enhancement surcharge",
        "feeAsOf": "July 1, 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "Arlington counts a disposal as a fixed appliance, so swapping one for the same type, size and location needs no permit, while installing or relocating one needs a permit and is charged as a fixed appliance.",
        "sourceUrl": "https://www.arlingtonva.us/files/sharedassets/public/v/1/building/documents/fee-schedules/fy27-isd-fee-schedule.pdf",
        "fee": "Fixed appliances (disposals are named in the list): first appliance $75; each additional, not including circuits, $42; plus a 2% USBC Code Academy levy and a 10% automation enhancement surcharge",
        "feeAsOf": "July 1, 2026"
      }
    }
  },
  "atlanta-ga": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Atlanta Office of Buildings, Department of City Planning",
      "url": "https://www.atlantaga.gov/government/departments/city-planning/about-dcp/office-of-buildings"
    },
    "codeEdition": {
      "text": "Georgia sets mandatory statewide construction codes that apply in Atlanta. The current ones are the 2024 International Building, Residential, Plumbing, Mechanical, Fuel Gas and Swimming Pool and Spa Codes, each with Georgia Amendments, together with the 2023 National Electrical Code with Georgia Amendments and the 2015 International Energy Conservation Code with Georgia supplements. The Georgia Amendment packets for 2026 took effect January 1, 2026.",
      "sourceUrl": "https://dca.georgia.gov/node/19231"
    },
    "permitPolicy": {
      "text": "Georgia strips the administrative chapter out of its residential code and leaves Chapter 1 in only as a guide for local governments writing their own procedures. That means who may apply for a permit in Atlanta, what it costs and how it is inspected come from the city's own ordinances rather than from the state code. Georgia also deletes the plumbing and electrical chapters of the residential code outright and substitutes the state plumbing and electrical codes, so a water heater or wiring job in an Atlanta house is judged against the IPC and NEC, not against the IRC chapters a national guide would quote.",
      "sourceUrl": "https://dca.georgia.gov/document/document/irc-2026-amendment-packet-2024-edition/download"
    },
    "codeItems": [
      {
        "text": "Georgia rewrote the relief-valve discharge rules effective January 1, 2026. The pipe may not tie into the drainage system, must run full size to the air gap, must serve only that one relief device, and must end without a threaded connection and without any valve or tee. It has to terminate somewhere the occupants can see, no more than 6 inches above and at least two pipe diameters above the floor or the flood level rim of the waste receptor, and a trapped section must be drainable at its low point.",
        "sourceUrl": "https://dca.georgia.gov/document/document/ipc-2026-amendment-packet-2024-edition/download"
      },
      {
        "text": "Georgia is unusually specific about the thermal expansion tank. One is required where the cold water reaching a storage water heater passes a check valve, pressure reducing valve or backflow preventer, and it must be connected downstream of all of those and of the shut-off valves, at least 18 inches in developed length from the heater's cold water inlet fitting, and sized so system pressure stays within the code limit.",
        "sourceUrl": "https://dca.georgia.gov/document/document/ipc-2026-amendment-packet-2024-edition/download"
      },
      {
        "text": "Georgia added a minimum-size table for residential water heaters. A replacement has to meet a first-hour rating set by the number of bedrooms and bathrooms, running from 40 gallons for a small one-bedroom house up to 72 gallons at six bedrooms with three and a half baths. Tankless units and houses beyond six bedrooms or three and a half baths are sized to the manufacturer's instructions instead.",
        "sourceUrl": "https://dca.georgia.gov/document/document/ipc-2026-amendment-packet-2024-edition/download"
      },
      {
        "text": "Georgia's electrical amendments widen ground-fault protection in a house: every 125-volt through 250-volt receptacle within six feet of the top inside edge of a sink bowl needs it, as do receptacles at bathtubs and showers within six feet, laundry areas and indoor damp or wet locations. Georgia also requires ground-fault protection on the circuit or outlet feeding a dishwasher or a sump pump, and replacing outdoor equipment means that outlet has to gain protection.",
        "sourceUrl": "https://dca.georgia.gov/document/document/nec-2026-amendment-packet-2023-edition/download"
      },
      {
        "text": "Georgia replaces the national arc-fault list with its own. Arc-fault protection is required on 120-volt, 15- and 20-amp branch circuits serving family rooms, dining rooms, living rooms, parlors, libraries, dens, bedrooms, sunrooms, recreation rooms, closets, hallways and similar areas, which is a narrower list than the unamended code uses.",
        "sourceUrl": "https://dca.georgia.gov/document/document/nec-2026-amendment-packet-2023-edition/download"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "A water heater in an Atlanta house is inspected against the Georgia plumbing code, and since January 2026 the inspector checks the relief-valve discharge pipe against a twelve-point list, the position of the thermal expansion tank, and whether the new tank meets Georgia's minimum first-hour rating for the house's bedroom and bathroom count.",
        "sourceUrl": "https://dca.georgia.gov/document/document/ipc-2026-amendment-packet-2024-edition/download"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work in an Atlanta house follows the Georgia State Minimum Standard Plumbing Code, because Georgia deletes the plumbing chapters from the residential code and substitutes the International Plumbing Code with its own amendments.",
        "sourceUrl": "https://dca.georgia.gov/document/document/irc-2026-amendment-packet-2024-edition/download"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Atlanta is judged against the 2023 National Electrical Code as amended by Georgia, which puts ground-fault protection on any receptacle within six feet of a sink bowl and on dishwasher and sump pump circuits, and limits arc-fault protection to a named list of rooms.",
        "sourceUrl": "https://dca.georgia.gov/document/document/nec-2026-amendment-packet-2023-edition/download"
      },
      "garbage-disposal-replacement": {
        "requirement": "A disposal receptacle in an Atlanta kitchen sits within six feet of the sink bowl, so Georgia's electrical amendments require it to be on ground-fault protection.",
        "sourceUrl": "https://dca.georgia.gov/document/document/nec-2026-amendment-packet-2023-edition/download"
      }
    }
  },
  "austin-tx": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Austin Development Services Department",
      "url": "https://www.austintexas.gov/development-services"
    },
    "codeEdition": {
      "text": "Austin's technical codes sit in City Code Chapter 25-12, with the current local amendments effective July 10, 2025. The city adopts the 2024 International Building, Energy Conservation, Existing Building, Fire, Property Maintenance, Residential, Swimming Pool and Spa and Wildland-Urban Interface Codes. Unusually for Texas, Austin uses the 2024 Uniform Plumbing Code and the 2024 Uniform Mechanical Code rather than the international plumbing and mechanical codes. Its electrical code is the 2023 National Electrical Code, with the 2026 NEC effective September 1, 2026.",
      "sourceUrl": "https://www.austintexas.gov/page/building-technical-codes"
    },
    "permitPolicy": {
      "text": "Austin lets an unlicensed homeowner do their own electrical, mechanical or plumbing work under a Homestead Permit, but the bar is specific: the owner must have a homestead exemption on file with the county appraisal district, must live in the house as their principal residence, must do the work personally, and must not have taken a homestead permit on another residence in the previous 12 months. The homestead permit does not cover the main electric service, refrigerant work on a ducted HVAC system, LP-gas plumbing or an auxiliary water system. Everyone else, including a homeowner acting as their own general contractor, has to register with Building and Trade Contractor Services before a building or trade permit can be issued.",
      "sourceUrl": "https://www.austintexas.gov/development-services/homeowners-permit"
    },
    "registration": {
      "text": "Austin requires city registration on top of the state credential. A mechanical, electrical or plumbing trade contractor must hold the state license for that trade and also register with Austin's Building and Trade Contractor Services before being assigned to a trade permit, and must update the city registration whenever the state license changes. A general contractor must register too, including a homeowner acting as their own general contractor, though Texas does not license general contractors. Registration has to be in place before a building or trade permit can be activated.",
      "sourceUrl": "https://www.austintexas.gov/development-services/contractor-registration"
    },
    "codeItems": [
      {
        "text": "Austin amends the Uniform Plumbing Code to require an approved expansion tank in the cold water distribution piping downstream of the pressure regulator, to absorb thermal expansion and hold the regulator's pressure setting. A tank on a drinking water system has to meet NSF 61 and be sized and installed to the manufacturer's instructions. Only a system designed by a registered design professional may substitute relief valves set at 100 psi or less.",
        "sourceUrl": "https://services.austintexas.gov/edims/document.cfm?id=453142"
      },
      {
        "text": "In an Austin house, a storage water heater over 17 gallons may not go in an attic or above a ceiling unless it is reachable through a vertical door opening in an occupied space on the same floor level. A hatch in the ceiling does not satisfy the city's rule.",
        "sourceUrl": "https://services.austintexas.gov/edims/document.cfm?id=453142"
      },
      {
        "text": "Austin also limits how high a storage water heater over 17 gallons may be mounted. Above eight feet off the finished floor it needs permanent access rated for a 300-pound concentrated load, permanent lifting equipment designed by a registered professional, or lifting-equipment access from the entry point to the appliance.",
        "sourceUrl": "https://services.austintexas.gov/edims/document.cfm?id=453142"
      },
      {
        "text": "The city spells out where the water heater's drain can land: a hub drain taking the temperature-and-pressure valve discharge, the pan drain and condensate may be located under the kitchen sink cabinet, in the water heater closet, in a walk-in storage room or a similar accessible spot.",
        "sourceUrl": "https://services.austintexas.gov/edims/document.cfm?id=453142"
      },
      {
        "text": "An Austin inspector treats dishwasher drainage as indirect waste. The discharge may not tie straight into the drainage system or into a garbage disposal unless an approved air-gap fitting is used, or the hose is looped up and fastened to the underside of the counter and then connected to the disposal chamber, a wye between the disposal outlet and the trap inlet, or a branch tailpiece above the trap inlet.",
        "sourceUrl": "https://services.austintexas.gov/edims/document.cfm?id=453142"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Austin handles a water heater swap as a stand-alone \"Plumbing Change Out\" permit that needs no plan review, and the applicant has to be registered with the city as a contractor before applying - or qualify for a Homestead Permit as the owner-occupant doing the work themselves.",
        "sourceUrl": "https://www.austintexas.gov/development-services/types-permits"
      },
      "plumber-service-call": {
        "requirement": "Austin needs no plumbing permit to stop a leak, clear a stoppage, pull and reset a toilet, or repair and replace fixtures, exposed traps, continuous waste piping, fixture supply valves and faucets, as long as no other trade or city department is involved; but if a concealed trap, drain, waste or vent pipe has gone bad and has to be replaced with new material, that counts as new work and needs a permit and inspection. Installing or replacing a shower, tub or tub-shower combination is specifically not exempt.",
        "sourceUrl": "https://www.austintexas.gov/development-services/work-exempt-building-permits"
      },
      "electrician-service-call": {
        "requirement": "Austin exempts a short list of residential electrical work from permits: reinstalling attachment plug receptacles (but not the outlets), swapping a branch circuit overcurrent device of the required capacity in the same location, systems under 25 volts that cannot deliver more than 50 watts, cord-and-plug decorative lighting, and minor repairs such as changing lamps. Other electrical repairs and upgrades need a stand-alone electrical permit, and the city requires the applicant to be a registered contractor first.",
        "sourceUrl": "https://www.austintexas.gov/development-services/work-exempt-building-permits"
      },
      "garbage-disposal-replacement": {
        "requirement": "Austin publishes a residential plumbing exemption covering the repair or replacement of fixtures and of exposed traps, continuous waste piping, fixture supply valves and faucets where no other trade or city department is involved, and it lists no separate garbage disposal permit; the city does require the dishwasher drain into a disposal to be made up as indirect waste with an air gap or a high loop.",
        "sourceUrl": "https://www.austintexas.gov/development-services/work-exempt-building-permits"
      }
    }
  },
  "bakersfield-ca": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Bakersfield Development Services Department, Building Division",
      "url": "https://www.bakersfieldcity.us/building-division"
    },
    "codeEdition": {
      "text": "Bakersfield enforces the California Building Standards Code, Title 24 of the California Code of Regulations, which state law sets as the minimum standard for design and construction and requires local governments to enforce unless they adopt their own more restrictive standards; where a city does not amend or add to it, the state code applies and takes effect 180 days after the Building Standards Commission publishes it. Title 24 is republished on a three-year cycle with intervening supplements, and the 2025 editions of the California codes are the current set.",
      "sourceUrl": "https://up.codes/codes/california"
    },
    "permitPolicy": {
      "text": "California statewide rule, since Bakersfield's own permit pages could not be read: under the California Building Standards Code no building or structure may be erected, enlarged, altered, repaired, moved, improved, converted or demolished without first getting a separate permit from the building official, and the Contractors State License Board tells homeowners to check with their own city or county building department because requirements differ. A homeowner who signs a permit application as an owner-builder takes on full responsibility for every phase of the job, including taxes, workers' compensation and liability for an injured worker.",
      "sourceUrl": "https://www.cslb.ca.gov/Consumers/Hire_A_Contractor/Building_Permit_Requirements.aspx"
    },
    "codeItems": [
      {
        "text": "California's Energy Code treats replacing an existing water heater as an alteration, so the replacement unit has to meet the mandatory equipment efficiency requirements of the state's Appliance Efficiency Regulations or the matching federal rules. An electric-resistance heater may be replaced with a qualifying consumer electric heater rather than a gas unit.",
        "sourceUrl": "https://www.energy.ca.gov/sites/default/files/2025-06/CEC-400-2025-005.pdf"
      },
      {
        "text": "If the job puts in new piping to the water heater, the state's mandatory pipe insulation requirements apply to that new piping and to any accessible existing piping; inaccessible piping is exempt.",
        "sourceUrl": "https://www.energy.ca.gov/sites/default/files/2025-06/CEC-400-2025-005.pdf"
      },
      {
        "text": "A California permit for an alteration comes with paperwork a national guide never mentions. Taking the prescriptive route means filing the matching Certificate of Compliance with the plans, or with the permit application itself when no plans are required: a CF1R-ALT-01 for alterations generally and a CF1R-ALT-02 for an HVAC changeout. Where compliance needs field verification and diagnostic testing by an ECC-Rater, the CF1R handed to the building department must be a registered copy from an approved registry.",
        "sourceUrl": "https://www.energy.ca.gov/sites/default/files/2025-06/CEC-400-2025-005.pdf"
      },
      {
        "text": "The California Energy Commission's list of work counted as an alteration, and therefore pulled into Energy Code compliance, includes replacing the existing water heater or adding water heaters or hot water piping, replacing a space heating or cooling system, extending or replacing ductwork, and replacing existing hardwired lighting or adding new hardwired fixtures.",
        "sourceUrl": "https://www.energy.ca.gov/sites/default/files/2025-06/CEC-400-2025-005.pdf"
      },
      {
        "text": "Which edition applies is decided by the permit date, not the work date: any building whose permit application is filed on or after January 1, 2026 must comply with the 2025 Energy Code, which widens heat pump use in new homes, pushes electric readiness and tightens ventilation.",
        "sourceUrl": "https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/2025-building-energy-efficiency"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "In California a water heater swap is an alteration under the state Energy Code, so the replacement must meet the mandatory efficiency requirements and the prescriptive CF1R-ALT-01 certificate of compliance is filed with the permit application when no plans are required; the California Building Standards Code requires a permit from the building official before altering or repairing a building. Bakersfield publishes no permit fee figure that could be read.",
        "sourceUrl": "https://www.energy.ca.gov/sites/default/files/2025-06/CEC-400-2025-005.pdf"
      }
    }
  },
  "baltimore-md": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Baltimore City Department of Housing and Community Development (DHCD), Permits and Inspections",
      "url": "https://www.baltimorecity.gov/dhcd/our-work/permits-inspections/building-permits"
    },
    "codeEdition": {
      "text": "Baltimore enforces the Building, Fire, and Related Codes of Baltimore City, 2024 Edition, adopted by Ord. 24-341. It layers city amendments onto the Maryland Building Performance Standards (2021 IBC, 2021 IRC and 2021 IECC with state modifications, effective May 29, 2023), the 2020 National Electrical Code, the 2021 International Plumbing Code, and the 2021 International Fuel Gas, Mechanical and Fire Codes. Each code is a separate Part of the city compilation, with the Baltimore changes printed section by section.",
      "sourceUrl": "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/building-codes/I/index.full.html"
    },
    "permitPolicy": {
      "text": "A homeowner cannot pull their own trade permit in Baltimore. DHCD states that electrical, mechanical, gas and plumbing work requires a licensed contractor, and that construction work on a one- or two-family dwelling requires a Maryland Home Improvement Commission licensed contractor. The contractor's license has to be registered in the city's E-Permits database before it can be attached to an application, and the registration access code is issued only to the license holder. Every permit requires inspections scheduled with DHCD building and trade inspectors.",
      "sourceUrl": "https://www.baltimorecity.gov/dhcd/our-work/permits-inspections/building-permits"
    },
    "registration": {
      "text": "Baltimore licenses electricians itself, through the city's Board of Electrical Examiners and Supervisors, on top of any state credential. A person or firm may not work as a master or maintenance electrician in the city without a city license. The published charges are $75 for a new or renewed master or master restricted license, $75 for a restricted license, $50 for a maintenance license, $35 for the examination, and a $35 delinquent fee if renewal is late. A master electrician must also file a $2,500 surety bond with the Board, conditioned on the faithful performance of the work.",
      "sourceUrl": "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/13/index.full.html"
    },
    "codeItems": [
      {
        "text": "Baltimore adds a rule the IRC does not have: a circuit feeding a water heater must have a disconnecting means separate from the overcurrent device, and that disconnect has to be installed close to the water heater. An inspector looking at an electric water heater swap will expect a local disconnect, not just the breaker in the panel.",
        "sourceUrl": "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/building-codes/X/index.full.html"
      },
      {
        "text": "Baltimore amends the hot water section of the plumbing code so that where hot water return piping is needed, it must be taken off the supply side of the backflow prevention device. The city also requires a certificate documenting backflow testing and inspection to be attached to the device itself.",
        "sourceUrl": "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/building-codes/VI/index.full.html"
      },
      {
        "text": "Only a person licensed by the State of Maryland as a master or journeyman plumber may connect a backflow prevention device to the potable water supply in Baltimore. This is a city amendment to the plumbing code, separate from the general contractor-licensing rule.",
        "sourceUrl": "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/building-codes/VI/index.full.html"
      },
      {
        "text": "Baltimore restricts two piping materials a national guide would treat as acceptable. Seamless Type M copper water tubing is not approved for underground water service, and polybutylene pipe is struck from the approved hydronic piping materials table.",
        "sourceUrl": "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/building-codes/VI/index.full.html"
      },
      {
        "text": "Baltimore's fire code puts the smoke alarm duty for a one-, two- or three-family dwelling on the occupant: equip the unit with the required number of approved battery or AC primary electric powered detectors and maintain them per the manufacturer's instructions. In a rental the landlord owns installation and, on written notice, repair or replacement, and must supply a detector designed for a hearing-impaired tenant on written request.",
        "sourceUrl": "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/building-codes/VIII/index.full.html"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Baltimore takes a permit pulled by a licensed contractor, and the city's own code adds a required disconnect next to an electric unit; the permit fee for the heater itself is small but a flat application fee, a minimum charge and a 5% permit tax ride on top.",
        "sourceUrl": "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/building-codes/II/109",
        "fee": "$20 each for electrical water heaters, new construction or replacement (Building Code § 109.6.3(j)); gas and other fuel-burning units are charged under § 109.6.3(a) at $30 for 0 to 200,000 BTU per hour input per unit; the minimum fee or service charge under § 109.3 is $25; a nonrefundable application fee of $25 applies to a 1- or 2-family dwelling permit that needs no plan review; and § 109.7 levies a Building Code permit tax of 5% of the final permit cost",
        "feeAsOf": "2024 Edition of the Building, Fire, and Related Codes of Baltimore City (Ord. 24-437; Ord. 24-341)"
      },
      "plumber-service-call": {
        "requirement": "Baltimore charges plumbing permits per fixture and per utility line rather than as one flat trade fee, and its published list of work exempt from permit for one- and two-family homes contains no plumbing exemptions, so replacement plumbing work is permit work done by a licensed contractor.",
        "sourceUrl": "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/building-codes/II/109",
        "fee": "$5 each to install, replace or reconstruct plumbing fixtures; $20 to remove plumbing fixtures only; $25 for a new or replacement water service pipe at a 1- or 2-family dwelling; $25 for a new or replacement sanitary connection at a 1- or 2-family dwelling; $20 per utility to reconstruct water, sanitary or storm lines on the premises; $25 each for a backflow prevention device under 2 inches; minimum fee or service charge $25 under § 109.3, plus a $25 application fee for a 1- or 2-family permit with no plan review and the 5% Building Code permit tax",
        "feeAsOf": "2024 Edition of the Building, Fire, and Related Codes of Baltimore City (Ord. 24-437; Ord. 24-341)"
      },
      "electrician-service-call": {
        "requirement": "Baltimore prices electrical permits by what was actually done — amperage for a service, a per-circuit rate for branch wiring, a per-device rate for fixtures — and only a city-licensed electrician may do the work; replacing lamps and reconnecting approved portable equipment are exempt.",
        "sourceUrl": "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/building-codes/II/109",
        "fee": "Service wiring and equipment by rating: $25 for 0 to 100 amperes, $30 for over 100 to 200 amperes, $40 for over 200 to 400 amperes; $6 for each new, extended or replaced branch circuit; $25 for 1 to 25 fixtures or devices only, plus $5 for each additional 25; $25 per permit for electrical work not otherwise classified; minimum fee or service charge $25 under § 109.3, plus a $25 application fee for a 1- or 2-family permit with no plan review and the 5% Building Code permit tax",
        "feeAsOf": "2024 Edition of the Building, Fire, and Related Codes of Baltimore City (Ord. 24-437; Ord. 24-341)"
      },
      "garbage-disposal-replacement": {
        "requirement": "Baltimore requires a permit to change, install or replace any electrical, gas, mechanical or plumbing system, and a disposer swap touches both the drain and a branch circuit, so it is permit work that a licensed contractor has to perform rather than a homeowner.",
        "sourceUrl": "https://www.baltimorecity.gov/dhcd/our-work/permits-inspections/building-permits"
      },
      "smoke-detector-replacement": {
        "requirement": "Baltimore's fire code makes the occupant of a one-, two- or three-family dwelling responsible for having the required number of approved smoke detectors and keeping them maintained; in a rental that duty shifts to the landlord, who must also provide a detector for a hearing-impaired tenant on written request.",
        "sourceUrl": "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/building-codes/VIII/index.full.html"
      }
    }
  },
  "baton-rouge-la": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Baton Rouge / Parish of East Baton Rouge, Permits & Inspections Division",
      "url": "https://www.brla.gov/2688/Permits-Inspections"
    },
    "codeEdition": {
      "text": "Baton Rouge enforces the Louisiana State Uniform Construction Code set by the state Uniform Construction Code Council: the 2021 editions of the International Building, Existing Building, Residential, Mechanical, Fuel Gas and Plumbing Codes and the 2020 National Electrical Code, all effective January 1, 2023, plus the 2021 International Energy Conservation Code effective July 1, 2023, with council amendments made in June 2023, November 2023 and March 2024. The council has published proposed language moving the state to the 2024 ICC codes and the 2023 NEC effective January 1, 2027.",
      "sourceUrl": "https://www.brla.gov/DocumentCenter/View/23927/STATE-OF-LOUISIANA-UNIFORM-CONSTRUCTION-CODE"
    },
    "permitPolicy": {
      "text": "A homeowner in Baton Rouge may apply for the permit and build on their own home, but must file a notarized Affidavit Claiming Exemption from Licensure, which the city forwards to the Louisiana State Licensing Board for Contractors, and must still meet the International Residential Code and the Unified Development Code. Residential work over $7,500 must otherwise be done by a registered home improvement contractor or a licensed residential contractor. Permits are applied for through the MyGovernmentOnline portal, and a trade permit can be added to an existing project as a separate electrical, plumbing, mechanical or environmental application.",
      "sourceUrl": "https://www.brla.gov/2691/Residential"
    },
    "registration": {
      "text": "Licensing in Baton Rouge runs through the Louisiana State Licensing Board for Contractors rather than a separate city trade registration. Residential work over $7,500 requires a registered home improvement contractor or a licensed residential contractor, and a homeowner acting for themselves must submit a notarized licensure-exemption affidavit that the city sends on to the state board.",
      "sourceUrl": "https://www.brla.gov/2691/Residential"
    },
    "codeItems": [
      {
        "text": "Louisiana makes the water heater drain pan deeper than the model code: the state amendment to IRC P2801.6.1 requires a pan at least 2 inches deep, sized to catch all dripping and condensate, drained by an indirect waste pipe of at least 1 inch diameter, with safety pan drain piping from the approved materials table.",
        "sourceUrl": "https://www.brla.gov/DocumentCenter/View/23928/Uniform-Construction-Code-"
      },
      {
        "text": "The state also rewrites where the relief discharge may end. Amended IRC P2804.6.1 item 5 lets the discharge pipe terminate at the floor, a waste receptor, a mop sink or outdoors, which is a wider list than the model code gives.",
        "sourceUrl": "https://www.brla.gov/DocumentCenter/View/23928/Uniform-Construction-Code-"
      },
      {
        "text": "Louisiana amends NEC 210.8(F) so that GFCI protection is not required on HVAC equipment outdoors, a departure a national guide written to the unamended 2020 NEC would get wrong.",
        "sourceUrl": "https://www.brla.gov/DocumentCenter/View/23928/Uniform-Construction-Code-"
      },
      {
        "text": "On a service change, the state amendment to NEC 230.85 requires one- and two-family service conductors to land in a readily accessible outdoor disconnect, grouped if there is more than one, carrying specific wording such as EMERGENCY DISCONNECT, SERVICE DISCONNECT. An amendment to 230.71 lets pre-existing services and those being renovated, altered, repaired or substantially improved keep up to six disconnects instead of one, and manufactured housing services are excused from the surge-protective device.",
        "sourceUrl": "https://www.brla.gov/DocumentCenter/View/23928/Uniform-Construction-Code-"
      },
      {
        "text": "Where a fuel-fired standby generator or transfer switch is installed it must sit outside the dwelling, and the state's added exception to IRC R315.3 then requires a permanently installed carbon monoxide alarm in each sleeping area plus one outside each separate sleeping area near the bedrooms. By state law no Louisiana parish or municipality may require residential fire sprinklers, so IRC R313 is not enforced here.",
        "sourceUrl": "https://www.brla.gov/DocumentCenter/View/23928/Uniform-Construction-Code-"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Baton Rouge names replacement of a water heater outright on its list of jobs that need a permit and inspection. It is taken out as a residential trade permit at a flat $125.00, and every permit also carries a $25.00 technology fee; a reinspection is $75.00 and an after-hours inspection $150.00.",
        "sourceUrl": "https://www.brla.gov/2694/Permit-Inspection-Fees",
        "fee": "$125.00 residential mechanical, electrical, plumbing or gas trade permit + $25.00 technology fee"
      },
      "plumber-service-call": {
        "requirement": "A residential plumbing permit in Baton Rouge is a flat $125.00 plus the $25.00 technology fee, and the city requires one for replacing any water line, vent, drain or sewer line, replacing any plumbing valve or shutoff, or replacing a water heater. Stopping leaks, clearing stoppages, repairing leaks in pipes, valves or fixtures, pulling and resetting a water closet without rearranging anything, and replacing a plumbing fixture are exempt, though replacing a defective concealed pipe counts as new work and does need a permit.",
        "sourceUrl": "https://www.brla.gov/2694/Permit-Inspection-Fees",
        "fee": "$125.00 residential plumbing trade permit + $25.00 technology fee"
      },
      "electrician-service-call": {
        "requirement": "Baton Rouge requires an electrical permit, a flat $125.00 residential trade permit plus the $25.00 technology fee, for any new electrical circuit including replacing or extending an existing circuit and for replacing electrical meters, disconnects or other service equipment. Swapping a light fixture, a switch or receptacle, or a circuit breaker or fuse of the same size in the same location is exempt, as is low-voltage work under 25 volts that cannot supply more than 50 watts.",
        "sourceUrl": "https://www.brla.gov/2694/Permit-Inspection-Fees",
        "fee": "$125.00 residential electrical trade permit + $25.00 technology fee"
      },
      "garbage-disposal-replacement": {
        "requirement": "Replacing a plumbing fixture on its own is on Baton Rouge's exempt list, but the same information sheet requires a permit for replacing any plumbing valve or shutoff or any water, vent or drain line, and for any new, replaced or extended electrical circuit, so a disposal swap that touches the drain piping, a shutoff or the circuit needs a $125.00 trade permit.",
        "sourceUrl": "https://www.brla.gov/2694/Permit-Inspection-Fees",
        "fee": "$125.00 residential mechanical, electrical, plumbing or gas trade permit + $25.00 technology fee"
      }
    }
  },
  "birmingham-al": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Birmingham Department of Planning, Engineering and Permits, Permitting and Inspection Division",
      "url": "https://www.birminghamal.gov/government/city-departments/pep/divisions-pep/permitting-inspection-division"
    },
    "codeEdition": {
      "text": "Birmingham works from its own Technical Code of the City of Birmingham, 2024 Edition, effective October 1, 2024. It adopts the 2021 International Building, Residential, Plumbing, Fuel Gas, Mechanical, Existing Building, Property Maintenance and Energy Conservation Codes, the 2021 International Fire Code and NFPA 101, and for electrical work the 2020 edition of the National Electrical Code; Chapter 1 of each of those model codes is replaced with the city's own administration chapter.",
      "sourceUrl": "https://www.birminghamal.gov/work/building-codes"
    },
    "permitPolicy": {
      "text": "Birmingham's Technical Code lets an owner, an authorized agent or a contractor apply, and the application is signed by the owner or the owner's agent; an owner's affidavit filed with a residential application can be met with proof of ownership. Trade work is different: nobody may do electrical, plumbing, gas fitting, mechanical or fire protection work in the city without the required city, county and state licence and posted bonds, a master or journeyman must be on the job and in charge throughout, and the plumbing permit application is certified by the master plumber personally.",
      "sourceUrl": "https://www.birminghamal.gov/work/building-codes"
    },
    "registration": {
      "text": "Birmingham licenses and bonds trades on top of the state ticket. An electrical contractor must hold municipal, city and state business licences and keep a $10,000 bond on deposit with the city's Director of Finance, approved by the Director and written by an Alabama-authorized surety; failure to keep it in force is grounds to revoke the business licence. A master plumber or gas fitter registered with the Alabama Plumbers and Gas Fitters Board may pull permits only once a City of Birmingham business licence and the required bonding are in place. Electrical examinations themselves are run by the state board.",
      "sourceUrl": "https://www.birminghamal.gov/work/building-codes"
    },
    "codeItems": [
      {
        "text": "Birmingham switches the IRC's own electrical chapters off for houses: references to the ICC Electrical Code in the residential and building codes do not apply to residential construction, and an inspector works from the 2020 National Electrical Code instead. The city also notes that electrical permits need no plan review.",
        "sourceUrl": "https://www.birminghamal.gov/work/building-codes"
      },
      {
        "text": "Birmingham deletes Chapter 11, Energy Efficiency, from the International Residential Code outright, so the IRC's envelope, duct and equipment energy provisions are not enforced on a house here.",
        "sourceUrl": "https://www.birminghamal.gov/work/building-codes"
      },
      {
        "text": "Birmingham also deletes IRC Section R313, so residential automatic fire sprinklers are not required.",
        "sourceUrl": "https://www.birminghamal.gov/work/building-codes"
      },
      {
        "text": "Where fixtures are added to an existing water service, the master plumber must certify on the Birmingham application that the existing service is big enough and in good enough condition to deliver at least 8 psi at the point of outlet discharge under maximum demand, 15 psi for flush-valve fixtures, and must give the water meter number.",
        "sourceUrl": "https://www.birminghamal.gov/government/city-departments/pep/divisions-pep/permitting-inspection-division/city-birmingham-permitting"
      },
      {
        "text": "A new or replacement water service in Birmingham needs a tapping authorization from the Water Works Company, and the authorization number goes on the plumbing permit application.",
        "sourceUrl": "https://www.birminghamal.gov/government/city-departments/pep/divisions-pep/permitting-inspection-division/city-birmingham-permitting"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Birmingham requires a permit before anyone installs, alters, repairs, converts or replaces a plumbing, gas or mechanical system, so a water heater swap is permitted work and the plumbing application must be certified by the master plumber doing it. On gas work the city exempts repairing a gas-fired furnace but still demands a gas permit for the vent and the gas piping.",
        "sourceUrl": "https://www.birminghamal.gov/work/building-codes"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work in Birmingham needs a permit, with a narrow exemption for repairing or replacing no more than half of a water service up to a maximum of 20 feet; ordinary minor repairs may be waved through without a permit only with the Building, Code or Fire Official's approval.",
        "sourceUrl": "https://www.birminghamal.gov/work/building-codes"
      },
      "electrician-service-call": {
        "requirement": "An electrical permit is required in Birmingham for installing, altering, repairing, converting or replacing any electrical system, and the work must be under a licensed, bonded electrical contractor with a master or journeyman electrician on the job and in charge. Electrical permits do not go through plan review.",
        "sourceUrl": "https://www.birminghamal.gov/work/building-codes"
      },
      "garbage-disposal-replacement": {
        "requirement": "Replacing a garbage disposal counts as altering or replacing a plumbing system, which Birmingham's Technical Code says needs a permit from the Building Official; the city's short list of permit-free jobs covers portable and self-contained mechanical equipment, roof coverings and finish work, not plumbing fixtures.",
        "sourceUrl": "https://www.birminghamal.gov/work/building-codes"
      },
      "smoke-detector-replacement": {
        "requirement": "Birmingham publishes no permit just for swapping a smoke alarm. Its residential amendments remove only the IRC energy-efficiency chapter and the sprinkler section, leaving the model code's smoke-alarm requirements in force, and alarm wiring itself is judged against the 2020 National Electrical Code rather than the IRC electrical chapters.",
        "sourceUrl": "https://www.birminghamal.gov/work/building-codes"
      }
    }
  },
  "boise-id": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Boise Planning and Development Services, Building Division",
      "url": "https://www.cityofboise.org/departments/planning-and-development-services/building/"
    },
    "codeEdition": {
      "text": "Boise's currently adopted codes apply to projects submitted on or after January 1, 2021, with later updates for mass timber (1/1/22), the green construction code (3/7/23) and the electrical code (4/26/24). The set is the 2018 IBC, 2018 IEBC, 2018 IRC parts I-IV and IX, 2018 IECC, 2018 IFC and the voluntary 2018 IgCC, plus the 2017 Idaho State Plumbing Code (based on the 2015 Uniform Plumbing Code) and the 2023 National Electrical Code. One- and two-family mechanical work falls under 2018 IRC parts V and VI; larger residential and commercial work uses the 2018 IMC and 2018 IFGC. Boise publishes its own design criteria as local amendments, including a 24 inch minimum frost depth, Seismic Design Category C, a 20 psf ground snow load with a 25 psf minimum design roof snow load, and a 90 mph design wind speed.",
      "sourceUrl": "https://www.cityofboise.org/departments/planning-and-development-services/building/building-permits/general-building-information-300/301-current-codes/"
    },
    "permitPolicy": {
      "text": "A Boise homeowner may do work on their own primary residence without registering as a contractor with the State of Idaho, and may pull their own plumbing, electrical and mechanical permits through the city's online permitting system. The catch is that the homeowner has to physically perform the work themselves. If anyone else does the electrical, plumbing or mechanical work, that person must be a State of Idaho registered and licensed contractor in that trade. Once a permit is issued the city invites homeowners to request a free pre-work consultation with the plumbing or mechanical inspector.",
      "sourceUrl": "https://www.cityofboise.org/departments/planning-and-development-services/building/homeowners-guide/"
    },
    "registration": {
      "text": "Boise does not publish a separate city trade licence on top of the state credential: its own guidance is that anyone other than the homeowner doing electrical, plumbing or mechanical work must be a State of Idaho registered and licensed contractor in that trade. On the plumbing side that state credential is an active certificate of competency or registration from the Idaho Division of Occupational and Professional Licenses; working without one, employing someone without one, or advertising plumbing work without the certificate number in the advertisement are each grounds for discipline.",
      "sourceUrl": "https://www.cityofboise.org/departments/planning-and-development-services/building/homeowners-guide/"
    },
    "codeItems": [
      {
        "text": "Boise splits water heater replacement between two different permits depending on fuel. Installing or replacing a GAS water heater is mechanical permit work, grouped with gas piping between the meter and the appliance. Installing or replacing an ELECTRIC water heater is plumbing permit work. A homeowner who assumes one plumbing permit covers a gas swap is applying for the wrong permit.",
        "sourceUrl": "https://www.cityofboise.org/media/4932/residential-construction.pdf"
      },
      {
        "text": "For electrical work Boise requires an electrical conference with the inspector BEFORE the work starts, not just an inspection afterwards. That is a step ahead of the usual pull-permit-then-call-for-inspection sequence, and the city also encourages homeowners to request a conference with the inspector before beginning any permitted work.",
        "sourceUrl": "https://www.cityofboise.org/media/4932/residential-construction.pdf"
      },
      {
        "text": "Boise enforces the Idaho State Plumbing Code, which deletes Uniform Plumbing Code Section 507.2, the seismic provisions for water heaters. So the seismic strapping that national water heater guides treat as standard is not a state code requirement in Idaho, even though Boise sits in Seismic Design Category C. Manufacturer instructions and any local amendment still govern.",
        "sourceUrl": "https://adminrules.idaho.gov/rules/current/24/243920.pdf"
      },
      {
        "text": "The Idaho State Plumbing Code that Boise enforces adds a vent test a national guide would not mention: a water heating appliance using Category 3 or Category 4 exhaust venting has to have the vent tested in its entirety with 5 pounds of air for 15 minutes, and plastic vents must be built to the manufacturer's instructions. That affects most modern high-efficiency condensing water heaters.",
        "sourceUrl": "https://adminrules.idaho.gov/rules/current/24/243920.pdf"
      },
      {
        "text": "For a water heater in a Boise garage, the Idaho amendment replacing UPC 507.13 requires burners, burner-ignition devices and other ignition sources to sit at least 18 inches above the floor, unless the appliance is listed as flammable vapor ignition resistant. The rule also reaches adjacent spaces that open to the garage and are not part of the dwelling's living space.",
        "sourceUrl": "https://adminrules.idaho.gov/rules/current/24/243920.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater needs a permit in Boise, and which permit depends on the fuel: a gas unit is permitted as mechanical work, an electric unit as plumbing work. Either way the city charges one flat fee for a job limited to a single fixture or appliance, and a homeowner may pull it for their own house if they do the work themselves.",
        "sourceUrl": "https://www.cityofboise.org/media/21654/fy27-plumbing-code-fee-schedule-10-1-26.pdf",
        "fee": "$57.00 for installation of a single fixture or appliance (plumbing Table B(3) covers hot water heaters; mechanical Table B(3) covers gas appliances and gas piping)",
        "feeAsOf": "Oct. 2026 (FY27 schedules effective 10-1-26)"
      },
      "plumber-service-call": {
        "requirement": "Boise needs a plumbing permit to repair, replace, relocate or add to the piping inside a house and to set new fixtures. A job limited to one fixture, appliance or line is a flat fee; a job touching several fixtures is a base fee plus a charge for each fixture. A whole-house re-pipe and a water or waste re-pipe each have their own flat rate.",
        "sourceUrl": "https://www.cityofboise.org/media/21654/fy27-plumbing-code-fee-schedule-10-1-26.pdf",
        "fee": "$57.00 single fixture, appliance or line; $33.00 base permit fee plus $12.50 per fixture for multi-fixture work; $83.00 water or waste re-piping; $114.00 re-plumbing an entire house or unit",
        "feeAsOf": "Oct. 2026 (FY27 schedule effective 10-1-26)"
      },
      "electrician-service-call": {
        "requirement": "Boise prices residential electrical permits by how many branch circuits the job touches rather than by job value: one circuit is one flat fee, more than one circuit is a higher flat fee. Changing the service entrance, service conductors, main disconnect or a panel or sub-panel is its own flat fee set by amperage, with no base fee added.",
        "sourceUrl": "https://www.cityofboise.org/media/21651/fy27-electrical-code-fee-schedule-10-1-26.pdf",
        "fee": "$57.00 for installation or alteration of a single branch circuit; $114.00 where more than one branch circuit is installed or altered for an addition, alteration, repair or fixture replacement; service or panel change $57.00 up to 200 amp and $67.50 over 200 amp",
        "feeAsOf": "Oct. 2026 (FY27 schedule effective 10-1-26)"
      },
      "garbage-disposal-replacement": {
        "requirement": "Boise's plumbing fee schedule carries its own line for garbage disposals, charged per unit on top of the residential plumbing base permit fee, so a disposal is permitted plumbing work in the city. Where the whole scope is a single fixture or appliance the city instead charges its flat single-fixture rate.",
        "sourceUrl": "https://www.cityofboise.org/media/21654/fy27-plumbing-code-fee-schedule-10-1-26.pdf",
        "fee": "$12.50 each for garbage disposals, in addition to the $33.00 residential plumbing base permit fee, with no charge for the disposal where it is installed with other fixtures; the schedule's flat rate for a scope limited to one fixture or appliance is $57.00",
        "feeAsOf": "Oct. 2026 (FY27 schedule effective 10-1-26)"
      },
      "smoke-detector-replacement": {
        "requirement": "Boise does not publish a permit for swapping out a smoke alarm on its own. The city's position is that an electrical permit is needed when electrical fixtures are added, and it gives the smoke alarms required alongside a building permit as its example, so the alarm work gets permitted as part of the larger job rather than by itself.",
        "sourceUrl": "https://www.cityofboise.org/media/4932/residential-construction.pdf"
      }
    }
  },
  "boston-ma": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Boston Inspectional Services Department (ISD)",
      "url": "https://www.boston.gov/departments/inspectional-services"
    },
    "codeEdition": {
      "text": "Boston enforces the Massachusetts State Building Code, Tenth Edition. For a house or townhouse that is 780 CMR 51.00, the Massachusetts Residential Code, which adopts the 2021 International Residential Code and then amends it. Plumbing and gas-fired appliance work is not under the building code at all but under 248 CMR, the rules of the Board of State Examiners of Plumbers and Gas Fitters, and electrical work is under 527 CMR 12.00, the Massachusetts Electrical Code.",
      "sourceUrl": "https://www.mass.gov/doc/10th-edition-residential-chapter-1-scope-and-application/download"
    },
    "permitPolicy": {
      "text": "Boston does not let a homeowner pull a plumbing, gas or electrical permit. Inspectional Services issues these only to licensed contractors, the applicant has to be the licensed person actually doing the work, and an application filed in an office clerk's name is rejected. A homeowner has to hire a licensed contractor who applies for the permit and does the work.",
      "sourceUrl": "https://www.boston.gov/permitting/permits/plumbing-permit"
    },
    "registration": {
      "text": "Boston does not publish a separate local trade registration fee, but every plumbing, gas or electrical permit application must carry the front and back of the applicant's valid, unexpired state trade license, a current certificate of liability insurance and a Massachusetts workers' compensation affidavit. The name on the license has to match the applicant.",
      "sourceUrl": "https://www.boston.gov/permitting/permits/electrical-permit"
    },
    "codeItems": [
      {
        "text": "Massachusetts requires a vacuum relief valve in the cold water supply above the top of a water heater or storage tank, to stop the tank siphoning dry if supply pressure is lost. On a bottom-fed heater the cold supply must be run up over the top of the tank before dropping to the connection, with the vacuum relief valve above the top of the tank. National guides rarely mention this.",
        "sourceUrl": "https://www.mass.gov/doc/248-cmr-1000-uniform-state-plumbing-code-0/download"
      },
      {
        "text": "A Massachusetts water heater or hot water storage tank set above an occupied space needs a safe waste pan at least two inches deep, piped indirectly to a properly trapped and vented fixture through a waste pipe of at least an inch and a quarter. The pan is not required where a floor drain or another acceptable point of indirect discharge is already there.",
        "sourceUrl": "https://www.mass.gov/doc/248-cmr-1000-uniform-state-plumbing-code-0/download"
      },
      {
        "text": "Massachusetts bars a check valve in the cold water supply to a water heater without special permission from the Board, and calls for a thermal expansion tank where a backflow preventer or pressure reducing valve turns the system into a closed one. Where a water meter or metering device with a check valve could cause an expansion problem, the expansion tank goes as close to the meter as possible.",
        "sourceUrl": "https://www.mass.gov/doc/248-cmr-1000-uniform-state-plumbing-code-0/download"
      },
      {
        "text": "Massachusetts holds shower water to 112 degrees Fahrenheit, not the 120 degrees used elsewhere. Each shower gets a thermostatic, pressure-balancing or combination valve that caps the deliverable hot water at 112 degrees, and a central mixing valve used instead has to be set by the installing plumber to 110 to 112 degrees before the final inspection, with a thermometer in its outlet piping.",
        "sourceUrl": "https://www.mass.gov/doc/248-cmr-1000-uniform-state-plumbing-code-0/download"
      },
      {
        "text": "The Massachusetts Electrical Code is the 2026 National Electrical Code with state amendments, and it widens ground-fault protection: a receptacle counts as being at a sink if it is within six feet of the top inside edge of the bowl or sits in the cabinet that supports the sink. It also replaces the arc-fault list so every 120-volt, 15- and 20-amp branch circuit feeding outlets or devices in a dwelling unit needs arc-fault protection.",
        "sourceUrl": "https://www.mass.gov/doc/527-cmr-1200-massachusetts-electrical-code-effective-42426/download"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Boston takes a plumbing permit pulled by a licensed plumber, and a gas-fired unit also needs a separate gas permit from Inspectional Services, priced on its own schedule.",
        "sourceUrl": "https://www.boston.gov/permitting/permits/plumbing-permit",
        "fee": "$20 application fee plus $5 for each fixture",
        "feeAsOf": "September 11, 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal swap in Boston counts as plumbing work, so a licensed contractor has to pull the plumbing permit and the fee is the flat application charge plus a per-fixture amount.",
        "sourceUrl": "https://www.boston.gov/permitting/permits/plumbing-permit",
        "fee": "$20 application fee plus $5 for each fixture",
        "feeAsOf": "September 11, 2026"
      },
      "plumber-service-call": {
        "requirement": "Boston charges a flat application fee plus a per-fixture charge for a plumbing permit, all of it due up front, and only the licensed plumber doing the work may apply.",
        "sourceUrl": "https://www.boston.gov/permitting/permits/plumbing-permit",
        "fee": "$20 application fee plus $5 for each fixture, such as toilets and sinks",
        "feeAsOf": "September 11, 2026"
      },
      "electrician-service-call": {
        "requirement": "A Boston electrical permit is priced three different ways depending on whether the job changes the service, adds fixtures and outlets, or neither, and a homeowner cannot apply for it.",
        "sourceUrl": "https://www.boston.gov/permitting/permits/electrical-permit",
        "fee": "Upgrading or installing service: $20 application fee plus $0.25 per amp up to 240 volts, or $0.75 per amp over 480 volts. No change in service: $20 application fee plus $1 for each fixture, plug or outlet and $5 for each approved meter. Neither of the above: $20 application fee plus $10 per $1,000 of the estimated cost.",
        "feeAsOf": "September 11, 2026"
      },
      "smoke-detector-replacement": {
        "requirement": "Boston Fire inspects smoke and carbon monoxide alarms before most homes change hands: a seller of a pre-1975 residential property with one to five units needs a smoke alarm certificate of compliance, and every seller of a residential unit needs a carbon monoxide certificate whatever the building's age or size.",
        "sourceUrl": "https://www.boston.gov/departments/fire-prevention/smoke-and-carbon-monoxide-detector-inspections"
      }
    }
  },
  "buffalo-ny": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Buffalo Department of Permit & Inspection Services",
      "url": "https://www.buffalony.gov/719/Permits"
    },
    "codeEdition": {
      "text": "Buffalo enforces the New York State Uniform Fire Prevention and Building Code. The state repealed the 2020 edition and replaced it with the 2025 Uniform Code books, including the 2025 Residential Code of New York State and the 2025 Plumbing Code of New York State, effective December 31, 2025; permit applications filed on or after that date must meet the 2025 code.",
      "sourceUrl": "https://dos.ny.gov/notice-adoption"
    },
    "permitPolicy": {
      "text": "Buffalo issues trade permits to its own licensed tradespeople, not to anyone who asks. A plumbing permit goes to a licensed master plumber and is not transferable; an individual resident owner can get one for work in their own home only after proving to the Commissioner that they are personally qualified. Electrical permits work the same way: they are issued only to a master electrician licensed by the city, except that an owner-occupant of a one- or two-family dwelling may be issued one if they prove personal qualification to the Chief Electrical Inspector.",
      "sourceUrl": "https://www.buffalony.gov/530/Plumbing"
    },
    "registration": {
      "text": "Buffalo runs its own trade licensing on top of anything the state requires. Plumbing work must be done by a master plumber holding the city license, and a master plumber has to verify the license status of any journeyman they employ; apprentices and unlicensed journeymen may work only with a master plumber physically present and taking part. A certificate holder who does not take out a license pays $50 to keep the certificate active.",
      "sourceUrl": "https://www.buffalony.gov/530/Plumbing"
    },
    "codeItems": [
      {
        "text": "An owner-occupant of a one- or two-family home in Buffalo who is allowed to pull their own electrical permit still cannot get one for service-entrance work, which stays with a licensed master electrician.",
        "sourceUrl": "https://ecode360.com/13584339"
      },
      {
        "text": "No Buffalo electrical permit is needed to replace fuses, receptacles, switches or fixtures on an existing system as long as no new work or change of wiring is involved, but all electrical work must conform to the National Electrical Code whether a permit is required or not.",
        "sourceUrl": "https://ecode360.com/13584339"
      },
      {
        "text": "Buffalo keeps the property owner on the hook for electrical permit matters: hiring an agent, engineer, architect or licensed contractor does not transfer that responsibility away from the owner.",
        "sourceUrl": "https://ecode360.com/13584339"
      },
      {
        "text": "Plumbing drawings submitted in Buffalo must detail the hot water tank and any recirculation system, and must detail the incoming water service including the meter and the RPZ backflow valve.",
        "sourceUrl": "https://www.buffalony.gov/530/Plumbing"
      },
      {
        "text": "Buffalo's sewer rules are enforced through the plumbing permit: storm and sanitary piping may not be combined without approval from both the Buffalo Sewer Authority and the Plumbing Department, conductor piping entering a City combination sewer must be trapped, and a sump pump must discharge indirectly into a conductor line.",
        "sourceUrl": "https://www.buffalony.gov/530/Plumbing"
      },
      {
        "text": "A failed plumbing inspection in Buffalo, or work that is not ready when the inspector arrives at the scheduled time, means taking out a separate permit with its own application fee.",
        "sourceUrl": "https://www.buffalony.gov/614/Plumbing-Permit-Fees"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Buffalo takes a plumbing permit, and the city counts the water heater as one of the fixtures it charges for; the permit normally goes to a licensed master plumber, and a resident owner can pull it for their own home only after satisfying the Commissioner that they are qualified to do the work.",
        "sourceUrl": "https://www.buffalony.gov/614/Plumbing-Permit-Fees",
        "fee": "$50 application fee on every application, plus $12 per fixture for a 1- or 2-family residence; $100 plan review fee if plans are required; $75 per reinspection"
      },
      "plumber-service-call": {
        "requirement": "Buffalo prices a plumbing permit as a flat application fee plus a charge for each fixture, with underground piping billed by the foot, and the permit expires if work has not started within a year of issue or is abandoned for a year after starting.",
        "sourceUrl": "https://www.buffalony.gov/614/Plumbing-Permit-Fees",
        "fee": "$50 application fee (all applications), plus $12 per fixture residential (1- or 2-family) or $50 for the first fixture and $20 per additional fixture otherwise; underground piping $60 for the first 100 linear feet, then $20 per additional 100 feet for pipe 6 inches or under and $55 per additional 100 feet for pipe over 6 inches; $75 per reinspection"
      },
      "electrician-service-call": {
        "requirement": "Buffalo charges a flat electrical permit fee for a one- or two-family house on top of a standard application fee, and lists separate add-on amounts for things like a meter or solar panels; a licensed master electrician normally signs the application.",
        "sourceUrl": "https://www.buffalony.gov/DocumentCenter/View/17362/2023-12-19---Electrical-Permit-Applicationcleaned",
        "fee": "$50 application fee on all permits, plus a flat $50 for a 1-family dwelling or $75 for a 2-family dwelling; added items include $50 for the first meter and $25 for each additional meter, $3 per solar panel, and $50 per residential EV charging station"
      }
    }
  },
  "cape-coral-fl": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Cape Coral Department of Development Services, Permitting Services Division",
      "url": "https://www.capecoral.gov/departments/development_services/permitting_services_division/index.php"
    },
    "codeEdition": {
      "text": "Cape Coral enforces the 2023 Florida Building Code, including the Florida Building Code - Residential, together with NFPA 70, National Electrical Code, 2020 Edition. The Building Division also enforces the Cape Coral Code of Ordinances, the Land Development Code, the city's Engineering Design Standards and the floodplain management provisions in Article 9 of the LDC.",
      "sourceUrl": "https://www.capecoral.gov/Documents/Departments/Development%20Services/Notice%20to%20Industry/2026/Advisory%20NTI%202020%20NEC%20Section%20210.8(F)%20%E2%80%93%20GFCI%20Protection%20for%20Outdoor%20HVAC%20Equipment.pdf"
    },
    "permitPolicy": {
      "text": "Florida's HB 803 minor-residential-work exemption is not a blanket pass in Cape Coral: the Building Division states it does not apply to structural, electrical, plumbing, mechanical or fuel gas work regulated by the Florida Building Code, eligibility is never automatic, a written exemption request plus the contract has to go through the CSS portal, no exemption is considered inside a special flood hazard area, and a job may not be split into several contracts or phases to get under the $7,500 threshold. A homeowner may pull a permit as an owner-builder under Florida Statute 489.103 by signing the city's Owner-Builder Disclosure Statement, which limits the exemption to a one- or two-family residence for the owner's own use and not for sale or lease, and requires the owner to provide direct onsite supervision.",
      "sourceUrl": "https://www.capecoral.gov/Documents/Departments/Development%20Services/Notice%20to%20Industry/2026/Advisory%20NTI%20Clarification%20Regarding%20Minor%20Residential%20Work%207500%20Exemptions%2006.26.2026(1).pdf"
    },
    "registration": {
      "text": "A state-certified contractor must register with the City of Cape Coral before pulling permits. Registration takes a notarized and stamped registration form, a copy of the state certified license, the qualifier's identification, a certificate of insurance and a workers' compensation certificate each naming the City of Cape Coral as certificate holder, and an EnerGov Citizen Self-Service account created under the qualifier and company name exactly as they appear on the state license. The city publishes no dollar fee for this registration. A business located in Cape Coral also needs a city Business Tax Receipt and a Lee County Business Tax Receipt.",
      "sourceUrl": "https://www.capecoral.gov/Documents/Document%20Hub/Permit%20Document%20Center/Contractor%20Registration/CONTRACTOR%20REGISTRATION.pdf"
    },
    "codeItems": [
      {
        "text": "Cape Coral makes the installer fill out a Water Heater Change-Out Form and attach it to the permit before inspection. The inspector checks that the relief valve is piped full size and not trapped, that the relief pipe has a visible air break next to the appliance, that a gas flue is connected properly, that the manufacturer's instructions are on site, and that heater elements are clearly identified and labeled.",
        "sourceUrl": "https://www.capecoral.gov/Documents/Document%20Hub/Permit%20Document%20Center/Miscellaneous%20Documents/WATER%20HEATER%20CHANGE-OUT%20FORM.pdf"
      },
      {
        "text": "A Cape Coral water heater must be hard wired with no exceptions and must not be cord-and-receptacle connected, and there has to be an electrical disconnect within sight, per 2020 NEC Article 422. A cord-and-plug unit, or a change from tank to tankless, triggers a separate electrical sub-permit with load calculations, wire size, amperage and breaker size.",
        "sourceUrl": "https://www.capecoral.gov/Documents/Document%20Hub/Permit%20Document%20Center/Miscellaneous%20Documents/WATER%20HEATER%20CHANGE-OUT%20FORM.pdf"
      },
      {
        "text": "On outdoor HVAC equipment, Cape Coral recognized the September 1, 2026 expiry of NEC 210.8(F) Exception No. 2 for installations not governed by the Florida Building Code - Residential, so condensing units, heat pumps and mini-split outdoor units on qualifying outdoor outlets need GFCI protection. Houses under the Florida Building Code - Residential keep the Florida-specific exception for listed and labeled HVAC equipment in Section E3408.1.",
        "sourceUrl": "https://www.capecoral.gov/Documents/Departments/Development%20Services/Notice%20to%20Industry/2026/Advisory%20NTI%202020%20NEC%20Section%20210.8(F)%20%E2%80%93%20GFCI%20Protection%20for%20Outdoor%20HVAC%20Equipment.pdf"
      },
      {
        "text": "From March 1, 2026 Cape Coral inspects the electrical concrete-encased electrode, the Ufer ground, as its own inspection rather than as part of the slab inspection. It must be looked at while the electrode, reinforcing steel and grounding conductor are fully visible and before concrete is placed, and missing it can mean removing concrete.",
        "sourceUrl": "https://www.capecoral.gov/Documents/Departments/Development%20Services/Notice%20to%20Industry/2026/Electric%20Concrete%20Encased%20Electrode%20Inspection%20-%20NTI%2002-17-26%20Effective%203-1-26.pdf"
      },
      {
        "text": "Cape Coral issued its own reading of the kitchen island and peninsula receptacle rule: one receptacle for the first 9 square feet of countertop and one more for each additional 18 square feet, so a 28 to 45 square foot island needs three.",
        "sourceUrl": "https://www.capecoral.gov/Documents/Departments/Development%20Services/Notice%20to%20Industry/Electric%20-%20NTI%20Advisory%20Island%20and%20peninsula%20recepticle%20requirements.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Cape Coral requires a permit for an exact water heater change-out, and the installer must complete the city's Water Heater Change-Out Form and attach it to the permit for the inspection; a tank-to-tankless change also needs an electrical sub-permit.",
        "sourceUrl": "https://www.capecoral.gov/Documents/Departments/Development%20Services/Building%20Permit%20Reports/Permitting%20Fees/Miscellaneous%20permit%20fees.pdf",
        "fee": "Plumbing Misc - Miscellaneous Permits Other than New Construction $140.00; a 2.5% surcharge is added to all permits associated with enforcement of the Florida Building Code (the schedule carries no separate water heater line)",
        "feeAsOf": "Effective January 1, 2026"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work in Cape Coral takes a miscellaneous plumbing permit and does not qualify for Florida's $7,500 minor-residential-work exemption.",
        "sourceUrl": "https://www.capecoral.gov/Documents/Departments/Development%20Services/Building%20Permit%20Reports/Permitting%20Fees/Miscellaneous%20permit%20fees.pdf",
        "fee": "Plumbing Misc - Miscellaneous Permits Other than New Construction $140.00; Plumbing Re-pipe $180.00; Revision Fee - Plumbing $136.00; re-inspection $48.00 first, $67.00 second, $86.00 third, $192.00 fourth and later; 2.5% Florida Building Code surcharge; building permit fees get a 15% discount when a Private Provider does plan review or inspections",
        "feeAsOf": "Effective January 1, 2026"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Cape Coral takes an electrical permit, priced differently depending on whether plan review is needed, and electrical work is excluded from Florida's $7,500 minor-residential-work exemption.",
        "sourceUrl": "https://www.capecoral.gov/Documents/Departments/Development%20Services/Building%20Permit%20Reports/Permitting%20Fees/Miscellaneous%20permit%20fees.pdf",
        "fee": "Electrical Misc - with no Plan Review $80.00; Electrical Misc - with Plan Review $220.00; Temporary electrical pole - Residential $60.00; Revision Fee - Electrical $136.00; 2.5% Florida Building Code surcharge",
        "feeAsOf": "Effective January 1, 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "Replacing a garbage disposal is plumbing work, which Cape Coral states is outside the Florida $7,500 minor-residential-work exemption, so it is handled as a miscellaneous plumbing permit; the city's fee schedule has no separate disposal line.",
        "sourceUrl": "https://www.capecoral.gov/Documents/Departments/Development%20Services/Building%20Permit%20Reports/Permitting%20Fees/Miscellaneous%20permit%20fees.pdf",
        "fee": "Plumbing Misc - Miscellaneous Permits Other than New Construction $140.00; 2.5% Florida Building Code surcharge",
        "feeAsOf": "Effective January 1, 2026"
      }
    }
  },
  "charlotte-nc": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Mecklenburg County Code Enforcement (LUESA)",
      "url": "https://code.mecknc.gov/permitting"
    },
    "codeEdition": {
      "text": "North Carolina's 2018 code editions, effective January 1, 2019, are still the ones in force, including the 2018 NC Residential Code, which is based on the 2015 IRC and carries Building Code Council amendments adopted from December 2017 through December 2024. Electrical work follows the 2020 NC Electrical Code, effective November 1, 2021. A 2024 NC State Building Code has been approved but the state fire marshal issued separate correspondence on its effective date.",
      "sourceUrl": "https://www.ncosfm.gov/codes/codes-current-and-past"
    },
    "permitPolicy": {
      "text": "Charlotte permits are issued by Mecklenburg County, and a homeowner may pull their own permit only if they own the home, are named on the deed, and live there as their primary residence; trusts and powers of attorney do not qualify, and condominiums are excluded. A homeowner acting as their own electrical, mechanical or plumbing contractor must personally do the work and file a Homeowner Trade Work Certificate of Ownership. Homeowner accounts cover residential projects under $40,000; at $40,000 and above the homeowner must post a bond account and follow the contractor permitting process, plus sign an Owner Exemption Affidavit promising to live in the home for at least 12 months after the work.",
      "sourceUrl": "https://code.mecknc.gov/permitting/hip"
    },
    "registration": {
      "text": "Mecklenburg County does not run its own trade licence. It directs electrical contractors to the N.C. State Board of Examiners of Electrical Contractors, mechanical and plumbing contractors to the N.C. State Board of Examiners of Plumbing, Heating & Fire Sprinkler Contractors, and general contractors to the N.C. Licensing Board for General Contractors; the county's contractor-licensing page names no extra county registration or bond for the trades.",
      "sourceUrl": "https://code.mecknc.gov/site-menu/code-information-appeals/nc-current-building-codes"
    },
    "codeItems": [
      {
        "text": "Mecklenburg County decides who the primary permit holder is by trade, which matters on a water heater job: the plumbing contractor is the primary contractor for an electric water heater change-out, the mechanical contractor is primary whenever mechanical, electrical and plumbing work are all involved, and electrical can be primary only on work needing no mechanical or plumbing, such as a service upgrade. The primary contractor has to apply and pay for all the sub-trades.",
        "sourceUrl": "https://code.mecknc.gov/permitting/tip"
      },
      {
        "text": "Because the county sends multi-trade inspectors and groups the inspections, sub-permits on equipment change-outs at one- and two-family dwellings are charged at half the primary trade's permit fee.",
        "sourceUrl": "https://code.mecknc.gov/permitting/tip"
      },
      {
        "text": "A standalone electrical permit in Mecklenburg County escapes plan review only if the work costs under $5,000, and never for life-safety systems, medical facilities, hazardous locations, electric car chargers, or load changes calculating over 200 amps. Even on the exempt jobs the contractor has to upload, on company letterhead, a signed definitive scope of work, a code load calculation and the fault-current information.",
        "sourceUrl": "https://code.mecknc.gov/permitting/other"
      },
      {
        "text": "Mecklenburg County runs a re-inspection fee program that prices failed inspections: at the end of a project the code defect rate (failed inspections divided by total inspections across all trades) is compared to a percent fee adjustment schedule and a charge or credit is applied against the original permit fee. On small jobs, meaning a permit fee of $200 or less or a construction value of $20,000 or less, the charge is not less than $25 per permit and no credits are given.",
        "sourceUrl": "https://code.mecknc.gov/inspections/re-inspection-fee"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "A water heater change-out in Charlotte takes a trade permit from Mecklenburg County, which a contractor can apply for, pay and print online without staff involvement; for an electric water heater the plumbing contractor is the one who pulls it and pays for any sub-trade permits.",
        "sourceUrl": "https://code.mecknc.gov/permitting/tip"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Charlotte needs a county electrical permit; a standalone electrical job costing under $5,000 skips plan review, but the contractor still has to submit a signed scope of work, a load calculation and fault-current information, and the exemption does not apply to EV chargers or to load changes above 200 amps.",
        "sourceUrl": "https://code.mecknc.gov/permitting/other"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work in Charlotte is permitted through Mecklenburg County, and change-out type jobs that need no building permit can be applied for, paid and printed online by the contractor at any hour, with inspections requestable as soon as the work is done.",
        "sourceUrl": "https://code.mecknc.gov/permitting/tip"
      }
    }
  },
  "chattanooga-tn": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Chattanooga Land Development Office (Public Works)",
      "url": "https://chattanooga.gov/public-works/land-development-office"
    },
    "codeEdition": {
      "text": "Chattanooga's City Council passed the current adopting ordinances on February 28, 2023, and the Land Development Office stopped accepting plans drawn to the previous codes on May 26, 2023. In force are the 2018 editions of the International Building, Residential, Fire, Mechanical, Fuel Gas and Plumbing Codes, the 2018 International Energy Conservation Code with Tennessee's state amendments, the 2023 National Electrical Code, and ANSI/ICC A117.1-2009 for accessibility. The electrical code therefore runs three cycles ahead of the building and residential codes.",
      "sourceUrl": "https://chattanooga.gov/stay-informed/building-codes"
    },
    "permitPolicy": {
      "text": "For a residential building permit Chattanooga lets a property owner act as their own contractor under the state's owner exemption: the owner may build on property they own for their own individual use and not for resale, lease or rent, and may not have been issued an owner's permit in the previous 24 months. Trade work is different. The city's own trade licenses are what entitle a person to pull the permit, so a plumbing permit takes a City of Chattanooga Master Plumbing License, a mechanical permit a City Master Mechanical License, a gas permit a City Master Gas Fitter License, and a residential electrical permit a City Class 1 or Class 2 electrical license. A Tennessee state contractor's license is added on top once the contract value reaches $25,000, and a Tennessee business license is required to pull any permit.",
      "sourceUrl": "https://chattanooga.gov/pay-and-apply/permits-applications/residential-building-permit"
    },
    "registration": {
      "text": "Chattanooga runs its own trade licensing board rather than relying on the state credential alone. It is unlawful to do plumbing work requiring a permit in the city as a master or journeyman plumber without a city certificate of competency, which takes an examination and five years of documented work in the trade. The master employer plumber certificate costs $215.00 per two-year cycle.",
      "sourceUrl": "https://chattanooga.gov/pay-and-apply/permits-applications/plumbing-license-master"
    },
    "codeItems": [
      {
        "text": "Chattanooga will not release power to a meter that has been off more than a year until an electrical inspector passes a meter inspection, and the city's published conditions are specific: the meter must be grounded with a #4 ground wire and two ground rods, the panel must be made up with no devices or wires hanging or missing, the house must have permanent heat, and the inspector must be able to get inside. Owners, tenants and landlords are barred from making the repairs themselves. The meter inspection permit is $55.00.",
        "sourceUrl": "https://chattanooga.gov/pay-and-apply/permits-applications/meter-inspection"
      },
      {
        "text": "A contractor's Chattanooga meter inspection permit only covers minor electrical repairs such as replacing lugs, adding straps or driving ground rods. Anything beyond that has to go on a regular electrical permit, and if the meter inspection is rejected a licensed electrical contractor must pull that separate permit before starting work and then call for a reinspection.",
        "sourceUrl": "https://chattanooga.gov/pay-and-apply/permits-applications/meter-inspection"
      },
      {
        "text": "Replacing a gas-fired water heater in Chattanooga pulls in a second permit and a second licence: a Gas permit, which only a City of Chattanooga Master Gas Fitter License holder can obtain. It costs $40.00 to issue plus $10.00 for each gas-burning object under 125,000 BTU per hour, and the gas permit fee has to be paid before the inspector approves the installation plans.",
        "sourceUrl": "https://chattanooga.gov/pay-and-apply/permits-applications/gas-permit"
      },
      {
        "text": "Chattanooga's plumbing fee schedule prices backflow and pressure-control devices as separate permitted items, which is a good sign they are inspected as such: $10.00 for each vacuum breaker or backflow protective device, $6.00 for each pressure reducing device and each check valve assembly, and $10.00 for each installation, alteration or repair of water piping.",
        "sourceUrl": "https://chattanooga.gov/pay-and-apply/permits-applications/plumbing-permit"
      },
      {
        "text": "Chattanooga's mechanical code gives emergency appliance work a grace period rather than an exemption: where equipment or appliance replacements or repairs have to be done in an emergency, the permit application must be submitted by the next working business day.",
        "sourceUrl": "https://chattanooga.gov/pay-and-apply/permits-applications/mechanical-permit"
      },
      {
        "text": "Residential electrical work in Chattanooga must be permitted by the holder of a city Class 1 or Class 2 electrical licence; the Class II residential contractor's licence is limited to one- and two-family dwellings and needs three years as a licensed journeyman or residential electrician in the city's metro area, an unrevoked prior Class II licence, an electrical engineering or technology degree, or experience the board accepts. It costs $200.00 for two years plus a $5 administrative fee and a $10 technology fee.",
        "sourceUrl": "https://chattanooga.gov/pay-and-apply/permits-applications/electrical-license-class-2"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Chattanooga needs a plumbing permit, pulled by a holder of a City of Chattanooga Master Plumbing License, and the city charges a flat issuing fee plus a line item for the heater and its vent.",
        "sourceUrl": "https://chattanooga.gov/pay-and-apply/permits-applications/plumbing-permit",
        "fee": "$40.00 Permit Issuance plus $6.00 for each Water Heater and/or Vent"
      },
      "plumber-service-call": {
        "requirement": "Chattanooga requires a plumbing permit to install, alter, repair, remove, convert or replace any part of a plumbing system, and the fee is a flat issuing charge plus per-item amounts for what the job touches.",
        "sourceUrl": "https://chattanooga.gov/pay-and-apply/permits-applications/plumbing-permit",
        "fee": "$40.00 Permit Issuance; $6.00 for each Plumbing Fixture, Floor Drain or Trap; $10.00 for each installation, alteration or repair of Water Piping; $10.00 for each repair or alteration of Drainage or Vent Piping; $20.00 for each Building Sewer (replacement/repair); $50.00 for each Re-inspection"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Chattanooga needs a city electrical permit, and only the holder of a City of Chattanooga Class 1 or Class 2 electrical license may pull one for a house; a state contractor's license is also required once the contract value hits $25,000, and the permit lapses one year after it is issued.",
        "sourceUrl": "https://chattanooga.gov/pay-and-apply/permits-applications/electrical-permit"
      }
    }
  },
  "chicago-il": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Chicago Department of Buildings",
      "url": "https://www.chicago.gov/city/en/depts/bldgs/provdrs/permits.html"
    },
    "codeEdition": {
      "text": "Chicago writes its own Construction Codes in Title 14 of the Municipal Code, realigned in phases with the model codes. The Chicago Electrical Code was rebuilt on the National Electrical Code, adopted in September 2017 and mandatory from March 1, 2018. The 2019 Chicago Building Code and Building Rehabilitation Code became mandatory for permit applications started on or after August 1, 2020. Under Phase 3, new 2026 Chicago Fuel Gas, Mechanical and Energy Transformation Codes became optional on October 1, 2026 and are mandatory for applications started on or after December 1, 2026. The city still lists its Plumbing Code (Title 14P) as interim.",
      "sourceUrl": "https://www.chicago.gov/city/en/depts/bldgs/supp_info/CodeModernization.html"
    },
    "permitPolicy": {
      "text": "Chicago normally requires a licensed and bonded plumbing contractor for plumbing work, with one exception: the owner, occupant or lessee of a detached single-family residence may personally install, alter or repair the plumbing in that home. The exception only covers doing the work yourself, so a homeowner cannot use it to hire an unlicensed person, and the work is still inspected. Electrical work that needs a permit must be done by a licensed electrical contractor, so there is no equivalent do-it-yourself route for wiring.",
      "sourceUrl": "https://www.chicago.gov/city/en/sites/guide-to-building-permits/home/help/faq/DOB/plumbing-license.html"
    },
    "registration": {
      "text": "Chicago licenses the trades itself on top of any state credential. A plumbing contractor already licensed by the State of Illinois must still hold a City of Chicago plumbing contractor license to work in the city. An electrical contractor needs a City of Chicago electrical contractor license and must be owned by or employ at least one licensed supervising electrician, who has to perform or direct all of the contractor's electrical work.",
      "sourceUrl": "https://www.chicago.gov/city/en/depts/bldgs/provdrs/licenses/svcs/infocenter.html"
    },
    "codeItems": [
      {
        "text": "Chicago exempts an in-kind water heater replacement from the building permit requirement in a residential building up to four stories above grade, and in an accessory building such as a garage on the same lot. In-kind means the same type, size and shape as what came out. The exemption is only from the permit; the work still has to meet the Chicago Construction Codes, since the exemption section does not waive any technical requirement.",
        "sourceUrl": "https://www.chicago.gov/city/en/sites/guide-to-building-permits/home/help/faq/DOB/bldg-permit-not-required/worktype/plumbing.html"
      },
      {
        "text": "Chicago draws a sharp line through small plumbing jobs. Stopping a leak, clearing a stoppage, or taking a toilet out and putting it back needs no permit, but removing a water, drain, soil, waste or vent pipe or a concealed trap and replacing it with new material does. The same cut-off applies within 5 feet of the building foundation; past that, the work leaves the exemption entirely.",
        "sourceUrl": "https://www.chicago.gov/city/en/sites/guide-to-building-permits/home/help/faq/DOB/bldg-permit-not-required/worktype/plumbing.html"
      },
      {
        "text": "Chicago exempts only a short list of electrical jobs from a permit: changing a lamp, plugging cord-and-plug equipment into an existing receptacle, a temporary test setup, and a low-voltage fixture such as a doorbell, thermostat, security camera or speaker. Low-voltage or communication wiring itself is exempt only in a residential building up to four stories above grade, so running new low-voltage cable in a taller building is permitted work.",
        "sourceUrl": "https://www.chicago.gov/city/en/sites/guide-to-building-permits/home/help/faq/DOB/bldg-permit-not-required/worktype/electrical.html"
      },
      {
        "text": "Illinois, and so Chicago, has required since January 1, 2023 that any new smoke alarm fitted in a single- or multi-family home carry a sealed 10-year battery. Alarms already in place before that date may stay until they pass 10 years from their manufacture date, fail a test, or malfunction. Homes built after 1988 that already have hardwired alarms, and homes with wireless integrated alarms, are exempt from the sealed-battery rule.",
        "sourceUrl": "https://sfm.illinois.gov/about/divisions/fire-prevention-and-building-safety/illinois-smoke-alarm-law.html"
      },
      {
        "text": "Chicago will not issue an Express Permit until the licensed contractor named on the application clicks an acceptance link emailed to them, a step the department added to stop applicants borrowing someone else's license.",
        "sourceUrl": "https://www.chicago.gov/city/en/depts/bldgs/provdrs/permits/svcs/express-permits.html"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Chicago does not require a building permit to replace a water heater in-kind in a residential building up to four stories, and where a permit is needed the city issues it through its online Express Permit Program; outside the owner-occupant exception the work must be done by a licensed plumbing contractor.",
        "sourceUrl": "https://www.chicago.gov/city/en/sites/guide-to-building-permits/home/help/faq/DOB/bldg-permit-not-required/worktype/plumbing.html"
      },
      "garbage-disposal-replacement": {
        "requirement": "Replacing a garbage disposal in Chicago is repairing or replacing an existing plumbing fixture, which the city permits through its Express Permit Program rather than a full plan review.",
        "sourceUrl": "https://www.chicago.gov/city/en/sites/guide-to-building-permits/home/help/faq/DOB/EPP-eligible.html"
      },
      "plumber-service-call": {
        "requirement": "A Chicago plumber needs no permit to stop a leak, clear a stoppage, or pull and reset a toilet, but replacing a pipe or a concealed trap with new material needs a permit, and only a licensed plumbing contractor may do the work unless the homeowner is doing it themselves in a detached single-family house.",
        "sourceUrl": "https://www.chicago.gov/city/en/sites/guide-to-building-permits/home/help/faq/DOB/bldg-permit-not-required/worktype/plumbing.html"
      },
      "electrician-service-call": {
        "requirement": "Chicago requires a licensed electrical contractor for any electrical work that needs a building permit, and exempts only minor items such as changing a lamp, plugging in cord-and-plug equipment, or fitting a low-voltage fixture like a doorbell or thermostat.",
        "sourceUrl": "https://www.chicago.gov/city/en/sites/guide-to-building-permits/home/help/faq/DOB/bldg-permit-not-required/worktype/electrical.html"
      },
      "smoke-detector-replacement": {
        "requirement": "A smoke alarm newly fitted in a Chicago home must have a sealed 10-year battery under Illinois law, unless the house was built after 1988 with hardwired alarms or uses wireless integrated alarms.",
        "sourceUrl": "https://sfm.illinois.gov/about/divisions/fire-prevention-and-building-safety/illinois-smoke-alarm-law.html"
      }
    }
  },
  "cincinnati-oh": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Cincinnati Department of Buildings & Inspections",
      "url": "https://www.cincinnati-oh.gov/buildings/building-permit-forms-applications/permit-costs/"
    },
    "codeEdition": {
      "text": "Cincinnati enforces the 2019 Residential Code of Ohio for one-, two- and three-family dwellings, the 2024 Ohio Building, Plumbing, Mechanical and Existing Building Codes, and the 2024 Ohio Electrical Code; the city states the 2024 Ohio codes were adopted effective March 1, 2024. The local Cincinnati Building Code supplements them, with Chapter 1115 adopting the Residential Code of Ohio.",
      "sourceUrl": "https://www.cincinnati-oh.gov/buildings/building-plan-examination/relevant-codes/"
    },
    "permitPolicy": {
      "text": "A permit application in Cincinnati may be made by the owner, the person in control, or an authorized agent, architect, engineer or contractor. A homeowner is exempt from contractor registration only if they personally do the work and occupy the home for at least a year. Electrical permits are not pulled at the city counter: electrical plan review, permits and inspections are contracted out to Inspection Bureau, Inc.",
      "sourceUrl": "https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/"
    },
    "registration": {
      "text": "Cincinnati requires contractor registration on top of the state trade licence - the city's plumbing permit application has a required contractor section with a registration number and expiry date. The homeowner exemption applies only where the owner does the work and occupies the home for at least one year. Registration fee amounts are not published on the department's fee schedule.",
      "sourceUrl": "https://vendorselfservice.cincinnati-oh.gov/buildings/building-permit-forms-applications/application-forms/all-forms-handouts-checklists-alphabetical-list/plumbing-permit-application/"
    },
    "codeItems": [
      {
        "text": "Electrical work in Cincinnati is reviewed, permitted and inspected by Inspection Bureau, Inc. under contract to the city rather than by the Department of Buildings & Inspections, so electrical and plumbing work on the same job go to two different offices.",
        "sourceUrl": "https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/"
      },
      {
        "text": "Cincinnati adds a 5% planning surcharge to every plumbing permit, plus a 1% state surcharge on Residential Code of Ohio permits, a 3% technology surcharge and a 1% financial recovery fee, so the figure on the fee table is not the amount paid.",
        "sourceUrl": "https://www.cincinnati-oh.gov/sites/buildings/assets/FEE-SCHEDULE-FY-2027---Saved.pdf"
      },
      {
        "text": "Cincinnati waives its permit processing fee for plumbing and HVAC repair or replacement applications that do not require plans, which is why a straight water-heater swap costs less here than a planned job.",
        "sourceUrl": "https://www.cincinnati-oh.gov/sites/buildings/assets/FEE-SCHEDULE-FY-2027---Saved.pdf"
      },
      {
        "text": "Ohio's residential code bars a fuel-fired water heater from a room used as a storage closet, and a water heater placed in a bedroom or bathroom must sit in a sealed enclosure so it does not draw combustion air from the living space. Direct-vent units are exempt from the enclosure.",
        "sourceUrl": "https://codes.ohio.gov/assets/laws/administrative-code/rules/4101/8/4101$8-20-01_eff_7_1_19.pdf"
      },
      {
        "text": "Ohio rewrites the national GFCI rule for houses: it deletes NEC 210.8(D) (the dishwasher-outlet rule), exempts a single ceiling receptacle serving a garage door opener, and exempts a sump-pump receptacle when a GFCI duplex sits within six feet of the pump.",
        "sourceUrl": "https://codes.ohio.gov/assets/laws/administrative-code/rules/4101/8/4101$8-34-01_eff_4_15_24.pdf"
      },
      {
        "text": "Ohio requires both photoelectric and ionization smoke-alarm technology on every level of a dwelling unit, using either separate alarms or dual-sensing units, which goes beyond the national model code.",
        "sourceUrl": "https://codes.ohio.gov/assets/laws/administrative-code/rules/4101/8/4101$8-3-01_eff_7_1_19.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "A water heater counts as a plumbing fixture on Cincinnati's plumbing permit application, so replacing one needs a plumbing permit priced from the city's replace-fixture column.",
        "sourceUrl": "https://www.cincinnati-oh.gov/sites/buildings/assets/FEE-SCHEDULE-FY-2027---Saved.pdf",
        "fee": "$68.00 replace fixture fee for 1 fixture; $33.00 for each additional fixture (plus a 5% planning surcharge and a 1% state surcharge on Residential Code of Ohio permits)",
        "feeAsOf": "July 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "Cincinnati's plumbing permit application lists a disposal as a countable fixture, so swapping one is permitted and priced from the same replace-fixture column as any other fixture.",
        "sourceUrl": "https://www.cincinnati-oh.gov/sites/buildings/assets/FEE-SCHEDULE-FY-2027---Saved.pdf",
        "fee": "$68.00 replace fixture fee for 1 fixture; $33.00 for each additional fixture",
        "feeAsOf": "July 2026"
      },
      "plumber-service-call": {
        "requirement": "Cincinnati prices a plumbing permit by how many fixtures are touched and whether they are new or replacements, with the smallest job being a single replacement fixture.",
        "sourceUrl": "https://www.cincinnati-oh.gov/sites/buildings/assets/FEE-SCHEDULE-FY-2027---Saved.pdf",
        "fee": "$68.00 for 1 replacement fixture; $97.00 for 1 new fixture; $33.00 each additional fixture",
        "feeAsOf": "July 2026"
      }
    }
  },
  "cleveland-oh": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Cleveland Department of Building and Housing",
      "url": "https://www.clevelandohio.gov/city-hall/departments/building-housing"
    },
    "codeEdition": {
      "text": "Cleveland enforces the state codes through its own Codified Ordinances: Ohio Building Code (Ch. 3111), Residential Building Code (Ch. 3121), Plumbing (Ch. 3133), Gas Piping and Appliances (Ch. 3135) and Electrical Wiring (Ch. 3137). The department's ordinance page lists those chapters but does not publish the model-code edition year.",
      "sourceUrl": "https://www.clevelandohio.gov/city-hall/departments/building-housing/ordinances"
    },
    "permitPolicy": {
      "text": "A contractor pulling a plumbing or electrical permit must be licensed with the State of Ohio, bonded and insured, and separately registered with the City of Cleveland. A homeowner doing the work personally does not have to register, but must file an Affidavit for Homeowner's Permit with the application.",
      "sourceUrl": "https://www.clevelandohio.gov/city-hall/departments/building-housing/divisions/electrical-permits"
    },
    "registration": {
      "text": "City registration is required on top of the state trade license: Cleveland states that contractors must be bonded, insured and registered with the city, and that plumbers and electricians must also hold a license. Registration and bond amounts are not published on the city's contractor page.",
      "sourceUrl": "https://clevelandohio.gov/city-hall/departments/building-housing/divisions/permits/contractor-permits"
    },
    "codeItems": [
      {
        "text": "Plumbing, sewer and gas-piping work in Cleveland can also need a separate water permit from the city's Division of Water; Building and Housing forwards the plans to that division for review.",
        "sourceUrl": "https://www.clevelandohio.gov/city-hall/departments/building-housing/divisions/plumbing-permits"
      },
      {
        "text": "Ohio's residential code bars a fuel-fired water heater from a room used as a storage closet, and a water heater placed in a bedroom or bathroom must sit in a sealed enclosure so it does not draw combustion air from the living space. Direct-vent units are exempt from the enclosure.",
        "sourceUrl": "https://codes.ohio.gov/assets/laws/administrative-code/rules/4101/8/4101$8-20-01_eff_7_1_19.pdf"
      },
      {
        "text": "Ohio rewrites the national GFCI rule for houses: it deletes NEC 210.8(D) (the dishwasher-outlet rule), exempts a single ceiling receptacle serving a garage door opener, and exempts a sump-pump receptacle when a GFCI duplex sits within six feet of the pump.",
        "sourceUrl": "https://codes.ohio.gov/assets/laws/administrative-code/rules/4101/8/4101$8-34-01_eff_4_15_24.pdf"
      },
      {
        "text": "Under Ohio's amended NEC 210.8(F), replacing equipment fed from an existing outdoor outlet triggers a requirement to add GFCI protection to that outlet; listed HVAC equipment and most lighting outlets are excepted.",
        "sourceUrl": "https://codes.ohio.gov/assets/laws/administrative-code/rules/4101/8/4101$8-34-01_eff_4_15_24.pdf"
      },
      {
        "text": "Ohio requires both photoelectric and ionization smoke-alarm technology on every level of a dwelling unit, using either separate alarms or dual-sensing units, which goes beyond the national model code.",
        "sourceUrl": "https://codes.ohio.gov/assets/laws/administrative-code/rules/4101/8/4101$8-3-01_eff_7_1_19.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Cleveland requires a plumbing permit to install or replace a water heater, and the permit fee is calculated per fixture or appliance against a flat minimum.",
        "sourceUrl": "https://www.clevelandohio.gov/city-hall/departments/building-housing/divisions/construction-permitting/permit-fee-schedule",
        "fee": "$50.00 minimum fee for any permit; $8.00 for each fixture, appliance or device, including hot water heating devices",
        "feeAsOf": "January 2014"
      },
      "plumber-service-call": {
        "requirement": "Repair work on an existing plumbing fixture or system in Cleveland takes a plumbing permit charged as a flat repair fee.",
        "sourceUrl": "https://www.clevelandohio.gov/city-hall/departments/building-housing/divisions/construction-permitting/permit-fee-schedule",
        "fee": "$50.00 for repairs to existing plumbing fixtures and/or systems ($50.00 minimum fee for any permit)",
        "feeAsOf": "January 2014"
      },
      "electrician-service-call": {
        "requirement": "Cleveland requires an electrical permit for electrical work, fixtures, equipment and devices, and repair work to an existing electrical fixture or system is charged as a flat fee.",
        "sourceUrl": "https://www.clevelandohio.gov/city-hall/departments/building-housing/divisions/construction-permitting/permit-fee-schedule",
        "fee": "$50.00 for repairs to existing electrical fixtures or systems ($50.00 minimum fee for any electrical permit)",
        "feeAsOf": "January 2014"
      }
    }
  },
  "colorado-springs-co": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Pikes Peak Regional Building Department — issues building, plumbing, mechanical and electrical permits for Colorado Springs; the City separately enforces the fire code through the Fire Department's Division of the Fire Marshal",
      "url": "https://www.pprbd.org/Information/HomeownerPermit"
    },
    "codeEdition": {
      "text": "Effective June 30, 2026 the governing code in Colorado Springs is the 2023 Pikes Peak Regional Building Code, 2nd Printing, which adopts by reference the 2021 International Building Code, 2021 International Residential Code, 2021 International Mechanical Code, 2021 International Fuel Gas Code, 2021 International Plumbing Code, 2023 National Electrical Code, 2021 International Energy Conservation Code, the Colorado Model Electric Ready and Solar Ready Code, the 2021 International Existing Building Code, 2019 ASME A17.1 and the 2021 International Swimming Pool and Spa Code. Colorado Springs adopted the regional code by Ordinance 23-16, passed by City Council on March 28, 2023 and approved by the Mayor on March 30, 2023, effective April 10, 2023 with an implementation date of June 30, 2023. The fire code is separate and is the City's own: Ordinance 23-14 of April 10, 2023 adopted the 2021 International Fire Code with city amendments at City Code 8.4.102 and 8.4.105, and Ordinance 26-18 of April 28, 2026 amended Fire Code Appendix K to incorporate Colorado's state Wildfire Resiliency Code requirements at 8 CCR 1507-39, effective June 30, 2026.",
      "sourceUrl": "https://www.pprbd.org/Information/CodeChanges"
    },
    "permitPolicy": {
      "text": "A Colorado Springs homeowner may pull their own permit, but only for the primary residence they own and live in: the Regional Building Department will not issue a homeowner permit for a rental property or for a house the owner does not reside in, and it states plainly that it is illegal for a homeowner to pull a permit for a contractor they have hired. A homeowner who does pull one is expected to know the codes and is responsible for the work passing every inspection. Anyone hiring a contractor for permitted work should know the contractor has to be licensed and registered with the department and cannot obtain a permit unless that licence is in good standing. The department publishes real teeth behind this: unpermitted work draws a stop work order, an investigation fee equal to twice the permit fee, and a Certificate of Alleged Non-compliance recorded with the El Paso or Teller County Clerk and Recorder as a lien against the property. A permit is administratively closed to further inspections if no valid inspection is requested within six months of issuance, with one extension of up to 180 days available on justifiable cause, and reopening afterwards costs half the original permit fee. Re-inspection fees run $50.00 for a first incident, $100.00 for a second and $200.00 for a third, the last with a two-working-day inspection delay.",
      "sourceUrl": "https://www.pprbd.org/Information/HomeownerPermit"
    },
    "registration": {
      "text": "Trade licensing in Colorado Springs is regional, and which trades need a local licence differs by trade. An electrical contractor needs no licence beyond the Colorado state one but must register with the Regional Building Department, and the department lists the electrical contractor registration fee as N.A. A plumbing contractor holding a State master plumber's licence and registered in the jurisdiction may pull permits without a separate local licence; the Plumbing Contractor or Water Connected Appliance Contractor licence fee is $100.00. Mechanical work, which is where a gas water heater falls, is locally licensed: Mechanical Contractor A (commercial), B (residential, one- and two-family dwellings up to three stories), C (specialty, including a Gas Piping Contractor and a Residential Maintenance/Repair and Replacement classification) and D (manufactured buildings), each $100.00, with the individual Heating Mechanic I or IV licence at $10.00. Every new licence or registration application carries a separate, nonrefundable $50.00 application fee that is not credited against the licence fee, and replacing a lost licence costs $20.00. Electrical, fire alarm, mechanical, plumbing and water conditioning contractors must carry general liability cover of $1,000,000 each occurrence and $2,000,000 general aggregate, name the department as an additional insured, and file a workers' compensation certificate; a lapse is cause for automatic suspension. Renewing late costs half the licence fee within 90 days of expiry, the full fee from 90 to 135 days and twice the fee from 135 to 180 days, after which re-application and re-examination are required.",
      "sourceUrl": "https://www.pprbd.org/File/ByAlias/PPRBC2023Edition2ndPrinting"
    },
    "codeItems": [
      {
        "text": "Colorado Springs wrote its own fire alarm section into the fire code for houses in the wildland-urban-interface overlay. Added section 907.2.25.1 applies where the approved development plan calls for it, and requires a monitored fire alarm system in a one- or two-family dwelling with smoke detectors on all levels, in bedrooms and in hallways near or outside bedrooms, a combination of rate-of-rise and 195 degree fixed-temperature detectors in the kitchen and garage, and an outside strobe unit with a clear lens positioned to be visible from the roadway.",
        "sourceUrl": "https://coloradosprings.gov/system/files/2023-04/Signed%20Ordinance%20No.%2023-14.pdf"
      },
      {
        "text": "The Regional Building Code rewrites the national rule on where a gas appliance may sit. Items 3 and 4 of the prohibited-locations section are deleted outright, item 5 is extended to allow adjacent spaces that meet the indoor combustion air requirements of section G2407.5, and a new item 7 permits the appliance in a room or space that opens only into a bedroom or bathroom provided the space is used for nothing else, the door to the bedroom or bathroom is fully louvered, the door to the appliance room is fully louvered, and all combustion air is taken from indoors under G2407.5. The same amendment is carried into the fuel gas side of the code.",
        "sourceUrl": "https://www.pprbd.org/File/ByAlias/PPRBC2023Edition2ndPrinting"
      },
      {
        "text": "Gas piping work in the Pikes Peak region is pressure tested in front of the inspector, with the figures set locally. The code official observes the test, the permit holder supplies the apparatus, and a mechanical gauge must have a range whose top of scale is no more than five times the test pressure. Threaded pipe is tested at 10 psi for 15 minutes, welded pipe at 60 psi for 30 minutes and corrugated stainless steel pipe at 10 psi for 15 minutes, using air, carbon dioxide or nitrogen. The code also adds labelling for elevated pressure: gas piping downstream of the gas purveyor's regulator or meter above half a psi is labelled Medium Pressure, above 5 psi High Pressure, and labels go on every 10 feet.",
        "sourceUrl": "https://www.pprbd.org/File/ByAlias/PPRBC2023Edition2ndPrinting"
      },
      {
        "text": "Unlike its building and mechanical provisions, the Regional Building Code adds nothing of its own to plumbing or electrical. It adopts the Colorado Plumbing Code of the Department of Regulatory Agencies and the National Electrical Code in whatever edition the Colorado State Plumbing Board and the Colorado State Electrical Board have adopted, within twelve months of that state adoption, together with all of the boards' revisions, modifications and exceptions, and in each case the code is adopted in its entirety. So a plumbing or electrical inspection here is judged against the state editions rather than a local rewrite, and the edition can roll over without a local ordinance.",
        "sourceUrl": "https://www.pprbd.org/File/ByAlias/PPRBC2023Edition2ndPrinting"
      },
      {
        "text": "In Colorado a utility may not energise an installation that needed electrical inspection until final approval has been issued, with only two exceptions: a situation the local electrical inspection authority or the state board treats as an emergency, which buys a maximum of seven days or until the inspection happens, and an approved tiny home connection. If an inspector finds the installation hazardous to life or property they can order the electrical service discontinued until it is made safe and must notify the electricity supplier. For both trades only a \"qualified applicant\" may apply for the permit, which the statute defines as a master plumber or master electrician who is also a registered contractor, one directly employed by a registered contractor, or a homeowner performing work on the homeowner's own home.",
        "sourceUrl": "https://leg.colorado.gov/sites/default/files/images/olls/crs2023-title-12.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Colorado Springs needs a permit from the Regional Building Department, which lists it among the installations that always require one and prices it as a flat individual residential mechanical and plumbing permit rather than off the job value; replacing the vent at the same time moves it to the higher flat fee.",
        "sourceUrl": "https://www.pprbd.org/Information/FeeSchedule",
        "fee": "$40.00 Water Heater Replacement, or $75.00 for Water Heater, Furnace, or Boiler Replacement including vent (individual residential mechanical and plumbing permit fees); commercial is $50.00 up to 400,000 BTU and $100.00 above that",
        "feeAsOf": "Appendix B of the 2023 Pikes Peak Regional Building Code, 2nd Printing 6.30.26"
      },
      "plumber-service-call": {
        "requirement": "A plumbing permit not tied to a building permit is priced off the job valuation from Table C with a $50.00 floor, and a plumbing permit attached to an alteration of a one- or two-family dwelling is a flat fee per trade instead; the Regional Building Department treats minor plumbing and heating repairs as not needing a permit, and a backflow device or water softener install has its own flat fee.",
        "sourceUrl": "https://www.pprbd.org/Information/FeeSchedule",
        "fee": "$50.00 for a valuation of $100 to $500, then $50.00 for the first $500 plus $5.50 per additional $100 to $2,000, $132.50 for the first $2,000 plus $1.45 per additional $100 to $5,000, and $176.00 for the first $5,000 plus $6.75 per additional $1,000 to $50,000 (Table C); $50.00 per trade as a permit attachment to an alteration of a one- or two-family dwelling (Table B.1); $30.00 for a lawn sprinkler backflow prevention device or water softener installation",
        "feeAsOf": "Appendix B of the 2023 Pikes Peak Regional Building Code, 2nd Printing 6.30.26"
      },
      "electrician-service-call": {
        "requirement": "Electrical work requires a permit from the Regional Building Department, priced off the job valuation from the same Table C with a $50.00 floor when it stands alone, or as a flat per-trade attachment fee when it rides on a building permit for an alteration; the power company cannot connect service until the final inspection is approved, apart from a declared emergency lasting at most seven days.",
        "sourceUrl": "https://www.pprbd.org/Information/FeeSchedule",
        "fee": "$50.00 for a valuation of $100 to $500, then $50.00 for the first $500 plus $5.50 per additional $100 to $2,000, $132.50 for the first $2,000 plus $1.45 per additional $100 to $5,000, and $176.00 for the first $5,000 plus $6.75 per additional $1,000 to $50,000 (Table C); $50.00 per trade as a permit attachment to an alteration of a one- or two-family dwelling, $100.00 per trade on a commercial building permit",
        "feeAsOf": "Appendix B of the 2023 Pikes Peak Regional Building Code, 2nd Printing 6.30.26"
      },
      "garbage-disposal-replacement": {
        "requirement": "Colorado law says no plumbing licence, registration or permit is required to repair or replace a garbage disposal unit or dishwasher that is directly connected to the sanitary sewer, including replacing the tail pipes and traps that come with it, and the Regional Building Department's own guidance puts replacing most appliances and minor plumbing repairs on its list of work that needs no permit.",
        "sourceUrl": "https://leg.colorado.gov/sites/default/files/images/olls/crs2023-title-12.pdf"
      },
      "smoke-detector-replacement": {
        "requirement": "A Colorado Springs house inside the wildland-urban-interface overlay can be held to far more than battery smoke alarms where the approved development plan requires it: the city's own added fire code section calls for a monitored fire alarm system with smoke detectors on every level, in the bedrooms and in the hallways near the bedrooms, rate-of-rise plus 195 degree fixed-temperature detectors in the kitchen and garage, and a clear-lens strobe outside visible from the road.",
        "sourceUrl": "https://coloradosprings.gov/system/files/2023-04/Signed%20Ordinance%20No.%2023-14.pdf"
      }
    }
  },
  "columbus-oh": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Columbus Department of Building and Zoning Services",
      "url": "https://www.columbus.gov/Business-Development/Building-Zoning-Services/Contractor-Information/Getting-Started-Commercial-Residential-Codes"
    },
    "codeEdition": {
      "text": "For one- to three-family houses Columbus enforces the 2019 Residential Code of Ohio together with the Columbus Building Code, and applies the 2023 National Electrical Code (NFPA 70) and the 2018 International Energy Conservation Code. Commercial and four-plus-family work falls under the 2024 Ohio Building, Plumbing and Mechanical Codes.",
      "sourceUrl": "https://www.columbus.gov/Business-Development/Building-Zoning-Services/Contractor-Information/Getting-Started-Commercial-Residential-Codes"
    },
    "permitPolicy": {
      "text": "An owner-occupant of a single-family house may apply for their own mechanical, electrical or plumbing permit by filing the city's homeowner affidavit. The affidavit requires a separate permit for each trade, names the person who will do the work, and bars contracting with an unlicensed contractor; it does not cover new single-family construction.",
      "sourceUrl": "https://www.columbus.gov/files/sharedassets/city/v/2/building-and-zoning/mechanical-electrical-and-plumbing-homeowner-affidavit-2026.pdf"
    },
    "registration": {
      "text": "Columbus requires a city license or registration on top of the state licence before a contractor can apply for a permit. Electrical and plumbing contractors must first hold an Ohio OCILB licence, then complete the city application, and anyone working as a journeyperson plumber needs a city-issued journeyperson plumber licence. The 2026 fee schedule lists a $300 new application fee, a $350 annual contractor licence and registration fee, and $150 annually for a journeyperson plumber.",
      "sourceUrl": "https://www.columbus.gov/files/sharedassets/city/v/13/building-and-zoning/fee-schedule/2026-combined-development-related-fee-schedule.pdf"
    },
    "codeItems": [
      {
        "text": "Water heater replacement is one of the few jobs Columbus puts on its Approved Minor Work Permit List, which is what lets it be permitted as a single-trade minor work permit with one inspection instead of a full mechanical/electrical/plumbing permit. Garbage disposals and standalone smoke detectors are not on that list.",
        "sourceUrl": "https://www.columbus.gov/files/sharedassets/city/v/1/bzs/document-library/approved-minor-work-permit-list.pdf"
      },
      {
        "text": "A new or replacement backflow preventer or backwater valve is also on the Columbus minor work list, so it is permitted and inspected in its own right rather than folded into other plumbing work.",
        "sourceUrl": "https://www.columbus.gov/files/sharedassets/city/v/1/bzs/document-library/approved-minor-work-permit-list.pdf"
      },
      {
        "text": "Ohio's residential code bars a fuel-fired water heater from a room used as a storage closet, and a water heater placed in a bedroom or bathroom must sit in a sealed enclosure so it does not draw combustion air from the living space. Direct-vent units are exempt from the enclosure.",
        "sourceUrl": "https://codes.ohio.gov/assets/laws/administrative-code/rules/4101/8/4101$8-20-01_eff_7_1_19.pdf"
      },
      {
        "text": "Ohio rewrites the national GFCI rule for houses: it deletes NEC 210.8(D) (the dishwasher-outlet rule), exempts a single ceiling receptacle serving a garage door opener, and exempts a sump-pump receptacle when a GFCI duplex sits within six feet of the pump. It also exempts branch circuits serving only kitchen countertop receptacles from AFCI protection.",
        "sourceUrl": "https://codes.ohio.gov/assets/laws/administrative-code/rules/4101/8/4101$8-34-01_eff_4_15_24.pdf"
      },
      {
        "text": "Ohio requires both photoelectric and ionization smoke-alarm technology on every level of a dwelling unit, using either separate alarms or dual-sensing units, which goes beyond the national model code.",
        "sourceUrl": "https://codes.ohio.gov/assets/laws/administrative-code/rules/4101/8/4101$8-3-01_eff_7_1_19.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Columbus needs a plumbing permit, and because the job is on the city's Approved Minor Work Permit List it is charged as a minor work permit that includes one inspection.",
        "sourceUrl": "https://www.columbus.gov/files/sharedassets/city/v/13/building-and-zoning/fee-schedule/2026-combined-development-related-fee-schedule.pdf",
        "fee": "$140 Minor Work Permit - Electrical, Mechanical, or Plumbing only (1, 2 and 3 family dwellings, includes 1 inspection)",
        "feeAsOf": "2026"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work on a Columbus house that is not on the city's minor work list takes the standard mechanical, electrical and plumbing permit, which includes two inspections.",
        "sourceUrl": "https://www.columbus.gov/files/sharedassets/city/v/13/building-and-zoning/fee-schedule/2026-combined-development-related-fee-schedule.pdf",
        "fee": "$275 Mechanical, Electrical, and Plumbing permit (1, 2 and 3 family dwellings, includes 2 inspections); $140 if the job is on the Approved Minor Work Permit List",
        "feeAsOf": "2026"
      },
      "electrician-service-call": {
        "requirement": "Electrical work on a Columbus house is permitted under the same mechanical, electrical and plumbing permit, with a cheaper single-trade minor work permit available only for jobs on the city's approved list.",
        "sourceUrl": "https://www.columbus.gov/files/sharedassets/city/v/13/building-and-zoning/fee-schedule/2026-combined-development-related-fee-schedule.pdf",
        "fee": "$275 Mechanical, Electrical, and Plumbing permit (1, 2 and 3 family dwellings, includes 2 inspections); $140 Minor Work Permit for electrical only if on the Approved Minor Work Permit List",
        "feeAsOf": "2026"
      }
    }
  },
  "corpus-christi-tx": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Corpus Christi Development Services Department, Building Division (2406 Leopard St.)",
      "url": "https://www.corpuschristitx.gov/department-directory/development-services/"
    },
    "codeEdition": {
      "text": "Corpus Christi adopted the 2021 editions of the International Building Code, Existing Building Code, Fuel Gas Code, Mechanical Code, Plumbing Code, Residential Code and Swimming Pool and Spa Code, plus the 2020 National Electrical Code, with local amendments effective August 1, 2023. The city also lists the 2015 International Energy Conservation Code as adopted. The amendments are written into the adopting ordinance and carried in Chapter 14, Article II of the city code.",
      "sourceUrl": "https://www.corpuschristitx.gov/department-directory/development-services/construction-codes-and-ordinances/"
    },
    "permitPolicy": {
      "text": "Corpus Christi's amended IRC Section R105.10 lets the city issue a permit directly to a property owner for construction, alteration, installation or repair in a single-family home or mobile home they own and occupy as their homestead. There is one carve-out that matters for a gas water heater: the city will not issue a homeowner permit for work on natural gas service systems unless the owner personally holds a Texas master plumber licence.",
      "sourceUrl": "https://www.corpuschristitx.gov/media/2rpaite2/ordinance-2021-international-codes.pdf"
    },
    "registration": {
      "text": "Corpus Christi's published contractor programme — STAR (Safety, Training, Accountability and Registration) — is voluntary, and the city states contractors are not required to participate. Its three tiers run from Bronze (application, code of ethics acknowledgement, proof of general liability insurance and an approved criminal background check) to Gold (five years registered with the department, membership of a local professional body and an ICC certification held by one of the contractor's agents). In the Licenses/Registrations part of the fee schedule the city prices only a house mover at $194.73, a lawn irrigator at $197.65 and a backflow prevention assembly tester at $197.62 — no separate electrical or plumbing contractor registration fee is listed.",
      "sourceUrl": "https://www.corpuschristitx.gov/media/vtiajsfh/ib016-contractor-registration-program-031425-updated.pdf"
    },
    "codeItems": [
      {
        "text": "Corpus Christi deepened the gas line burial rule, which bites on an outdoor gas run to a water heater or a generator. The city struck the International Fuel Gas Code's 12-inch minimum and wrote in 18 inches below grade, and where 18 inches of cover cannot be held, the pipe has to be run in conduit or bridged and shielded. The same amendments ban all threaded bushings and bar a spring-type mechanical gauge from being used for the gas pressure test.",
        "sourceUrl": "https://www.corpuschristitx.gov/media/2rpaite2/ordinance-2021-international-codes.pdf"
      },
      {
        "text": "The city widened the NEC's GFCI list well past the national text. Receptacles in laundry areas, boathouses, indoor damp and wet locations, and any receptacle within six feet of the outside edge of a bathtub or shower wall all need GFCI protection in Corpus Christi. The city then wrote in its own relief: a receptacle outlet feeding a refrigerator or freezer needs neither AFCI nor GFCI protection where it is a single-receptacle device on a dedicated 20-amp 120-volt circuit, and a receptacle supplying only a permanently installed fire or burglar alarm is exempt in a basement.",
        "sourceUrl": "https://www.corpuschristitx.gov/media/2rpaite2/ordinance-2021-international-codes.pdf"
      },
      {
        "text": "On a service upgrade Corpus Christi is stricter than the NEC about how the service is run. Its added Article 230.11 requires service-entrance conductors and sub feeds to distribution panels to be in conduit or raceway, and a masthead supporting the service drop must extend at least 42 inches above the roof in rigid metal conduit two inches or larger. The city also amended 230.70 so a service disconnect may not be installed in a bathroom.",
        "sourceUrl": "https://www.corpuschristitx.gov/media/2rpaite2/ordinance-2021-international-codes.pdf"
      },
      {
        "text": "Corpus Christi sits in a Texas Department of Insurance windstorm area, so the city's inspection is not the end of it. Its amendment at Section 110.3.4.1 states plainly that a city framing inspection does not include or substitute for the inspections or certifications TDI windstorm requirements call for, and the city's residential remodel checklists require a completed TDI WPI-1 form from the windstorm engineer or inspector. The city also added a hurricane inspection provision for periods NOAA designates.",
        "sourceUrl": "https://www.corpuschristitx.gov/media/2rpaite2/ordinance-2021-international-codes.pdf"
      },
      {
        "text": "Corpus Christi rewrote the plumbing inspection sequence and added a pressure test to it. The city renamed the IPC rough-in inspection a Top Out inspection, to be made once sanitary, storm and water distribution piping is roughed in and before wall or ceiling membranes go on, and requires a pressure test on all piping before that inspection can be approved. Rough inspection of plumbing, gas, LPG and electrical work must happen before anything is covered and before fixtures or appliances are set.",
        "sourceUrl": "https://www.corpuschristitx.gov/media/2rpaite2/ordinance-2021-international-codes.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Corpus Christi needs a plumbing permit, and the city inspects before anything is covered and before the appliance is set. A homeowner can pull the permit for their own homestead, but not for the natural gas side of the job unless they hold a Texas master plumber licence.",
        "sourceUrl": "https://www.corpuschristitx.gov/media/c5dka34k/fy-2026-development-fee-schedule.pdf",
        "fee": "Residential plumbing permit $.075 per square foot, minimum permit fee $146.41, plus a 4.5% surcharge",
        "feeAsOf": "Rev. October 1, 2025 (FY2026 Development Fee Schedule, 10/1/2025–9/30/2026)"
      },
      "plumber-service-call": {
        "requirement": "Corpus Christi charges a residential plumbing permit by the square foot with a floor of $146.41, so small plumbing jobs effectively pay the minimum; the permit holder is responsible for scheduling the city's inspections.",
        "sourceUrl": "https://www.corpuschristitx.gov/media/c5dka34k/fy-2026-development-fee-schedule.pdf",
        "fee": "Residential plumbing permit $.075 per square foot, minimum permit fee $146.41, plus a 4.5% surcharge; after-hours inspection $250.00",
        "feeAsOf": "Rev. October 1, 2025 (FY2026 Development Fee Schedule, 10/1/2025–9/30/2026)"
      },
      "electrician-service-call": {
        "requirement": "An electrical permit in Corpus Christi is priced per square foot of the home with a published minimum, and the city's own amendments to the 2020 NEC — conduit for service-entrance conductors, a 42-inch masthead, no service disconnect in a bathroom and an expanded GFCI list — are what the inspector checks against.",
        "sourceUrl": "https://www.corpuschristitx.gov/media/c5dka34k/fy-2026-development-fee-schedule.pdf",
        "fee": "Residential electrical permit $.075 per square foot, minimum permit fee $146.41, plus a 4.5% surcharge",
        "feeAsOf": "Rev. October 1, 2025 (FY2026 Development Fee Schedule, 10/1/2025–9/30/2026)"
      }
    }
  },
  "dallas-tx": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Dallas Development Services (Building Inspection)",
      "url": "https://dallas.gov/departments/sustainabledevelopment/buildinginspection/Pages/construction_codes.aspx"
    },
    "codeEdition": {
      "text": "Dallas lists the 2021 International Building, Residential, Plumbing, Mechanical, Fuel Gas and Energy Conservation Codes, each with Dallas amendments, as effective May 12, 2023. Its electrical code is the 2020 National Electrical Code with Dallas amendments, effective June 13, 2022. The residential amendments are codified as Chapter 57, the Dallas One- and Two-Family Dwelling Code.",
      "sourceUrl": "https://dallas.gov/departments/sustainabledevelopment/buildinginspection/Pages/construction_codes.aspx"
    },
    "permitPolicy": {
      "text": "A Dallas homeowner may pull their own plumbing, mechanical or electrical permit under a homeowner's exemption, but only for a homestead they own and live in, and only if they do the work themselves with no paid help. Electrical repairs under the exemption are allowed only after the homeowner passes a City exam, and the affidavit must be signed in front of City staff or notarized. If the owner later hires help, a properly licensed contractor must take over the permits.",
      "sourceUrl": "https://dallas.gov/departments/sustainabledevelopment/buildinginspection/DCH%20documents/HOMEOWNERS%20EXEMPTION%20FROM%20REG-Acc.pdf"
    },
    "registration": {
      "text": "Dallas requires a trade contractor to register with the city and hold the applicable electrical, plumbing or mechanical license on top of the state credential. The city waives both only for a qualifying homeowner working on their own homestead.",
      "sourceUrl": "https://dallas.gov/departments/sustainabledevelopment/buildinginspection/DCH%20documents/HOMEOWNERS%20EXEMPTION%20FROM%20REG-Acc.pdf"
    },
    "codeItems": [
      {
        "text": "Dallas rewrites the relief-valve rule so a water heater's temperature-and-pressure discharge pipe may not tie directly into the drainage system. It must discharge through an air gap, run by gravity, carry no valves or tee fittings, end without a threaded connection, and terminate where someone living there can see it.",
        "sourceUrl": "https://dallas.gov/departments/sustainabledevelopment/buildinginspection/DCH%20documents/pdf/code_amendments/2021_codes/23-0469.pdf"
      },
      {
        "text": "A Dallas water heater drain pan must be at least an inch and a half deep, wide enough to catch everything that drips off the tank, and drained by an indirect waste pipe of at least three quarters of an inch. Several pan drains may share one discharge line only where the manufacturer's instructions allow it.",
        "sourceUrl": "https://dallas.gov/departments/sustainabledevelopment/buildinginspection/DCH%20documents/pdf/code_amendments/2021_codes/23-0469.pdf"
      },
      {
        "text": "Dallas regulates how an inspector reaches an elevated water heater. An attic, roof or platform installation more than eight feet up needs a stairway or permanent ladder; a portable ladder is accepted only for a small tank reached through a lay-in ceiling within ten feet of the floor. The space also needs lighting and a reachable receptacle.",
        "sourceUrl": "https://dallas.gov/departments/sustainabledevelopment/buildinginspection/DCH%20documents/pdf/code_amendments/2021_codes/23-0469.pdf"
      },
      {
        "text": "Under the Dallas one- and two-family dwelling code, a water heater swapped into a spot that never had a pan drain does not have to gain one. This is a Dallas-specific relief on replacement work that a national guide would not flag.",
        "sourceUrl": "https://dallas.gov/departments/sustainabledevelopment/buildinginspection/DCH%20documents/pdf/code_amendments/2021_codes/23-0471.pdf"
      },
      {
        "text": "Dallas makes a permitted alteration, repair or addition trigger smoke alarms throughout the dwelling to the standard for a new house, with exceptions where the work is only on the exterior or is only plumbing or mechanical. An attic appliance also needs a luminaire switched at the passageway opening and a nearby receptacle.",
        "sourceUrl": "https://dallas.gov/departments/sustainabledevelopment/buildinginspection/DCH%20documents/pdf/code_amendments/2021_codes/23-0471.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in a Dallas house is permitted as a single-family alteration or repair, and the inspector checks the relief-valve discharge, the drain pan and the access to the heater.",
        "sourceUrl": "https://dallas.gov/departments/sustainabledevelopment/buildinginspection/DCH%20documents/DSDFees.pdf",
        "fee": "Table B-II Alterations or Repairs for Single-Family and Duplex Structures: $181 per dwelling unit + $100 for additional trades",
        "feeAsOf": "May 1, 2024"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal swap in a Dallas house falls under the city's single-family alteration or repair permit, though small plumbing repairs worth no more than $1,000, gas piping excluded, are exempt from a permit altogether.",
        "sourceUrl": "https://dallas.gov/departments/sustainabledevelopment/buildinginspection/DCH%20documents/DSDFees.pdf",
        "fee": "Table B-II Alterations or Repairs for Single-Family and Duplex Structures: $181 per dwelling unit + $100 for additional trades",
        "feeAsOf": "May 1, 2024"
      },
      "plumber-service-call": {
        "requirement": "Dallas exempts repairs or repiping of a plumbing system on a single-family or duplex property from a permit when the work is worth no more than $1,000 and no gas piping is involved; above that a single-family alteration or repair permit applies.",
        "sourceUrl": "https://dallas.gov/departments/sustainabledevelopment/buildinginspection/DCH%20documents/DSDFees.pdf",
        "fee": "Table B-II Alterations or Repairs for Single-Family and Duplex Structures: $181 per dwelling unit + $100 for additional trades; Reinspection Fee $75",
        "feeAsOf": "May 1, 2024"
      },
      "electrician-service-call": {
        "requirement": "Dallas lets electrical maintenance and repair go without a permit when the value of the work does not exceed $1,000; anything larger is permitted as a single-family alteration or repair, and a failed inspection is recharged.",
        "sourceUrl": "https://dallas.gov/departments/sustainabledevelopment/buildinginspection/DCH%20documents/DSDFees.pdf",
        "fee": "Table B-II Alterations or Repairs for Single-Family and Duplex Structures: $181 per dwelling unit + $100 for additional trades; Reinspection Fee $75",
        "feeAsOf": "May 1, 2024"
      }
    }
  },
  "denver-co": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Denver Community Planning and Development (Denver Permitting Office)",
      "url": "https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Community-Planning-and-Development/Plan-Review-Permits-and-Inspections"
    },
    "codeEdition": {
      "text": "Denver adopted the 2025 Denver Building and Fire Codes on June 13, 2025, effective December 31, 2025, with a second printing adopted November 24, 2025. They are built on the 2024 I-codes, except the energy code, which uses the 2021 IECC. Denver separately adopts the 2026 National Electrical Code unamended, matching the electrical code adopted by the State of Colorado.",
      "sourceUrl": "https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Community-Planning-and-Development/Building-Codes-Policies-and-Guides"
    },
    "permitPolicy": {
      "text": "Denver permits normally go to a contractor licensed with the City and County of Denver. The owner of a single-family home may instead pull their own permit, but must be the legal owner and live there, must show photo ID matching the Assessor's record, and must pass a city exam before doing electrical, plumbing or mechanical work, though a state electrical or plumbing license can stand in for that exam. The owner has to stay in the home for a year after the work. Homeowner permits are not available for accessory dwelling units, townhomes, condos or duplexes, even the unit the owner lives in.",
      "sourceUrl": "https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Community-Planning-and-Development/Plan-Review-Permits-and-Inspections/Single-Family-and-Duplex-Projects/Homeowner-Permits"
    },
    "registration": {
      "text": "A trade contractor must hold a City and County of Denver contractor license to be issued a permit, on top of any state credential. Denver charges $250 for a contractor license (classes A through D) every three years, $60 for a supervisor certificate and $40 for a journeyman certificate, and a plumbing license must be renewed every two years rather than every three. License and certificate fees are not refundable.",
      "sourceUrl": "https://denvergov.org/files/assets/public/v/9/community-planning-and-development/documents/ds/building-codes/policies/admin_138.pdf"
    },
    "codeItems": [
      {
        "text": "The Denver Energy Code sets a minimum room size for a water heater. The space has to measure at least 3 feet by 3 feet by 7 feet and either hold 760 cubic feet or have the equivalent of a 16-by-24-inch grill into heated space plus an 8-inch exhaust duct no longer than 10 feet. Electric heaters under 20 gallons are exempt, and a listed heat pump water heater may follow the manufacturer's reduced clearances instead.",
        "sourceUrl": "https://denvergov.org/files/assets/public/v/1/community-planning-and-development/documents/ds/building-codes/2025_Denver_Building_Code.pdf"
      },
      {
        "text": "Denver requires demand-responsive controls on an electric storage water heater of 40 to 120 gallons with a nameplate rating of 12 kW or less, so the utility can shed load. This is a Denver energy-code addition, not a national requirement.",
        "sourceUrl": "https://denvergov.org/files/assets/public/v/1/community-planning-and-development/documents/ds/building-codes/2025_Denver_Building_Code.pdf"
      },
      {
        "text": "Denver adds a rule that an indirectly heated hot water storage tank must be built to ASME standards and carry the ASME label once it holds 120 gallons or more, or exceeds 200,000 Btu/hr of heat input or 210 degrees Fahrenheit.",
        "sourceUrl": "https://denvergov.org/files/assets/public/v/1/community-planning-and-development/documents/ds/building-codes/2025_Denver_Building_Code.pdf"
      },
      {
        "text": "A battery-powered smoke alarm, carbon monoxide alarm or combination unit installed in Denver must be listed to UL 217, UL 2034 or both and must have a permanent built-in 10-year lithium battery. A replaceable-battery alarm does not satisfy the Denver amendment.",
        "sourceUrl": "https://denvergov.org/files/assets/public/v/1/community-planning-and-development/documents/ds/building-codes/2025_Denver_Building_Code.pdf"
      },
      {
        "text": "Denver carbon monoxide alarms must sit outside each sleeping area within 15 feet of the bedroom doorway and in a central spot on every occupiable level, and a bedroom containing a fuel-burning appliance needs an alarm inside the bedroom itself. Replacing a gas water heater is fuel-burning work, so a permitted job can pull these locations into scope.",
        "sourceUrl": "https://denvergov.org/files/assets/public/v/1/community-planning-and-development/documents/ds/building-codes/2025_Denver_Building_Code.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Denver treats a water heater swap as a quick permit, issued over the counter with no plan review and checked by field inspection, and a gas heater needs the permit because the job disconnects and reconnects the gas line and the flue vent.",
        "sourceUrl": "https://denvergov.org/files/assets/public/v/9/community-planning-and-development/documents/ds/building-codes/policies/admin_138.pdf",
        "fee": "Valuation-based (Table 1): $20.00 for work valued $1 to $500; $35.00 for $501 to $2,000; $35.00 for the first $2,000 plus $8.00 for each additional $1,000 or fraction thereof to $25,000. No plan review fee on a quick permit. Reinspection $100.00 per hour.",
        "feeAsOf": "May 21, 2024"
      },
      "garbage-disposal-replacement": {
        "requirement": "Denver does not require a plumbing permit to swap a garbage disposal for a like unit in a one- or two-family dwelling or townhouse, as long as the existing system is not altered.",
        "sourceUrl": "https://denvergov.org/files/assets/public/v/1/community-planning-and-development/documents/ds/building-codes/2025_Denver_Building_Code.pdf"
      },
      "plumber-service-call": {
        "requirement": "A general plumbing repair in a Denver house or townhouse needs no permit if it does not alter the existing system, which covers like-for-like sinks, disposals and toilets; other plumbing work is permitted and the fee runs off the value of the job.",
        "sourceUrl": "https://denvergov.org/files/assets/public/v/9/community-planning-and-development/documents/ds/building-codes/policies/admin_138.pdf",
        "fee": "Valuation-based (Table 1): $20.00 for work valued $1 to $500; $35.00 for $501 to $2,000; $35.00 for the first $2,000 plus $8.00 for each additional $1,000 or fraction thereof to $25,000. Reinspection $100.00 per hour.",
        "feeAsOf": "May 21, 2024"
      },
      "electrician-service-call": {
        "requirement": "Denver requires an electrical permit unless the work is one the Colorado-adopted electrical code or state statute already exempts, and the permit fee is based on the value of the work with a $20 floor.",
        "sourceUrl": "https://denvergov.org/files/assets/public/v/9/community-planning-and-development/documents/ds/building-codes/policies/admin_138.pdf",
        "fee": "Valuation-based (Table 1): $20.00 for work valued $1 to $500; $35.00 for $501 to $2,000; $35.00 for the first $2,000 plus $8.00 for each additional $1,000 or fraction thereof to $25,000. Reinspection $100.00 per hour.",
        "feeAsOf": "May 21, 2024"
      },
      "smoke-detector-replacement": {
        "requirement": "Swapping a smoke alarm for one that serves the same purpose does not by itself trigger Denver's upgrade rule, but any alteration or addition that does need a permit requires smoke alarms throughout the dwelling to the standard for a new house, and a battery unit must have a sealed 10-year lithium battery.",
        "sourceUrl": "https://denvergov.org/files/assets/public/v/1/community-planning-and-development/documents/ds/building-codes/2025_Denver_Building_Code.pdf"
      }
    }
  },
  "des-moines-ia": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Des Moines Permit and Development Center",
      "url": "https://www.dsm.city/departments/development_services/permit_development_center/index.php"
    },
    "codeEdition": {
      "text": "Effective January 1, 2026 Des Moines enforces the 2024 International Building Code, 2024 International Residential Code, 2024 International Existing Building Code and 2024 International Fire Code, all adopted with amendments in the Des Moines Municipal Code. The trade codes come from the state rather than the city: the State Electrical Code based on the 2023 NEC, the State Plumbing Code based on the 2024 Uniform Plumbing Code, the State Mechanical Code based on the 2024 International Mechanical Code, the 2021 National Fuel Gas Code (NFPA 54) as adopted by Iowa, and the 2015 International Energy Conservation Code.",
      "sourceUrl": "https://www.dsm.city/departments/development_services/permit_development_center/construction_codes.php"
    },
    "permitPolicy": {
      "text": "A homeowner in Des Moines may pull a permit for work on their own residence, including a water heater; anyone else doing the work has to be a State of Iowa licensed plumbing or mechanical contractor. Electrical is split: a homeowner can get a homeowner's electrical permit for branch-circuit wiring, but a panel change-out or service upgrade may only be done by an electrical contractor licensed by the State of Iowa, and the city permits and inspects it.",
      "sourceUrl": "https://www.dsm.city/Documents/Departments/Development%20Services/Permit%20Development%20Center/Residential/Electrical%20Panel-Service%20Update-Upgrade-ChangeOut%20-2026%20DSM.pdf"
    },
    "registration": {
      "text": "Registration here is a state requirement the city points contractors to rather than a separate city licence. Iowa Code chapter 91C makes any individual or business doing construction work in Iowa register with the Iowa Division of Labor and renew annually once they earn at least $2,000 a year from that work; the registration fee is $50, with a notarized exemption available to a self-employed contractor who pays no more than $2,000 a year in wages to others and does not work with or for other contractors in the same phase of construction. A contractor principally based outside Iowa must file a bond with the Division of Labor before starting any Iowa job with a contract price of $5,000 or more.",
      "sourceUrl": "https://www.dsm.city/Documents/Departments/Development%20Services/Permit%20Development%20Center/Construction%20Codes/Community%20Development%20-%20Iowas%20Contractor%20Law%20-%20Registration%20and%20Bonding.pdf"
    },
    "codeItems": [
      {
        "text": "Des Moines bars corrugated stainless steel tubing and flex gas line from the gas drop to a water heater: the drop must be black iron pipe. No new yellow-jacketed CSST may be installed at all, and if the existing gas line already has unbonded CSST, bonding has to be done as part of the water heater job. Where a flexible range connector is used it must sit downstream of the gas shutoff valve and drip leg, with the drop rigidly supported.",
        "sourceUrl": "https://www.dsm.city/Documents/Departments/Development%20Services/Permit%20Development%20Center/Residential/Residential-Water-Heater-Replacement.pdf"
      },
      {
        "text": "The city's water heater handout sets out several checks a national guide skips: temperature and pressure relief piping must be rigid pipe, never PVC or plastic; a cold water shut-off valve must isolate only the water heater; PEX water lines must stay 18 inches from the heater and no closer than 6 inches to the side or 12 inches above the metal vent; and 50 cubic feet of combustion air is required for each 1,000 Btu of input, which can mean added louvers or outside air.",
        "sourceUrl": "https://www.dsm.city/Documents/Departments/Development%20Services/Permit%20Development%20Center/Residential/Residential-Water-Heater-Replacement.pdf"
      },
      {
        "text": "Des Moines inspectors specifically look for CSST gas-piping bonding when they inspect a replacement furnace or water heater, not only on new construction, and the city also checks it on additions, remodels and rental inspections. The bonding jumper must be at least 6 AWG copper or equivalent, and the bonding itself has to be permitted and installed by a licensed electrical or mechanical contractor.",
        "sourceUrl": "https://www.dsm.city/Documents/Departments/Development%20Services/Permit%20Development%20Center/Construction%20Codes/CSST%20Policy.pdf"
      },
      {
        "text": "The city requires a UFER (concrete-encased electrode) grounding system in every residential and commercial structure, in addition to bonding all the other electrodes at the building together into one grounding electrode system, with the grounding electrode conductor protected from physical damage.",
        "sourceUrl": "https://www.dsm.city/Documents/Departments/Development%20Services/Permit%20Development%20Center/Construction%20Codes/Community%20Development%20-%20UFER%20Grounding%20System.pdf"
      },
      {
        "text": "Des Moines overrides the national gas test pressures: threaded and CSST gas piping is tested at a minimum of 10 psi for at least 15 minutes and welded piping at 60 psi for at least 30 minutes, in place of the NFPA 54 and Uniform Plumbing Code figures. The city also requires a shutoff valve within 6 feet of every gas appliance, dedicated to that appliance and in the same room as it, and only accepts 0.5 inch water column pressure drop tables for gas pipe sizing at inlet pressures of 5 to 9 inches water column.",
        "sourceUrl": "https://www.dsm.city/Documents/Departments/Development%20Services/Permit%20Development%20Center/Construction%20Codes/Natural%20Gas%20Piping%20Installation%20Clarifications.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "You need a permit to replace a water heater in Des Moines and the city inspects the finished job; a homeowner can pull it for their own house, otherwise it takes a State of Iowa licensed plumbing or mechanical contractor. The fee is the city's flat residential plumbing permit charge for alterations and additions to an existing dwelling, and the final inspection has to be booked at least 24 hours ahead.",
        "sourceUrl": "https://www.dsm.city/Documents/Departments/Development%20Services/Permit%20Development%20Center/PDC%20Permit%20Fee%20Schedule.pdf",
        "fee": "$77.25 plumbing permit for plumbing installations associated with alterations and additions to existing dwellings and accessory structures",
        "feeAsOf": "January 1, 2026"
      },
      "plumber-service-call": {
        "requirement": "Des Moines charges one flat plumbing permit fee for plumbing work in an existing house rather than pricing it per fixture, so the permit cost is the same whether the job touches one fixture or several.",
        "sourceUrl": "https://www.dsm.city/Documents/Departments/Development%20Services/Permit%20Development%20Center/PDC%20Permit%20Fee%20Schedule.pdf",
        "fee": "$77.25 plumbing permit for plumbing installations associated with alterations and additions to existing dwellings and accessory structures",
        "feeAsOf": "January 1, 2026"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in an existing Des Moines house carries a single flat permit fee rather than a per-circuit charge; the per-circuit and per-opening unit fees on the city's schedule apply to buildings other than houses, townhouses and two-family dwellings.",
        "sourceUrl": "https://www.dsm.city/Documents/Departments/Development%20Services/Permit%20Development%20Center/PDC%20Permit%20Fee%20Schedule.pdf",
        "fee": "$77.25 electrical permit for electrical installations associated with alterations and additions to existing dwellings and accessory structures",
        "feeAsOf": "January 1, 2026"
      },
      "smoke-detector-replacement": {
        "requirement": "Des Moines does not publish a permit or fee just for swapping a smoke alarm, but it does set what the replacement has to be: an added or replaced alarm may be battery powered unless the one it replaces was hardwired, and a hardwired alarm must be replaced with a hardwired alarm. Where interior alterations or repairs need a permit, or a sleeping room is added, the whole dwelling has to be brought up to new-dwelling alarm locations, interconnected and hardwired, unless finishes are not being removed and no attic, crawl space or basement gives access.",
        "sourceUrl": "https://www.dsm.city/Documents/Departments/Development%20Services/Permit%20Development%20Center/Residential/Residential-Smoke-Detectors.pdf"
      }
    }
  },
  "detroit-mi": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Detroit Buildings, Safety Engineering and Environmental Department (BSEED)",
      "url": "https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department-bseed"
    },
    "codeEdition": {
      "text": "Detroit enforces the single state construction code rather than a code of its own. The Michigan Residential Code adopts the 2015 International Residential Code, with listed sections struck out and replaced by state amendments, and that rule set took its current effect on February 8, 2022.",
      "sourceUrl": "https://ars.apps.lara.state.mi.us/AdminCode/DownloadAdminCodeFile?FileName=R%20408.30500%20%20to%20408.30547g.pdf"
    },
    "permitPolicy": {
      "text": "In Michigan a city may issue a plumbing permit only to a licensed plumbing contractor, who must put the contractor license number and the supervising master plumber's license number on the application. The exception a homeowner can use is narrow: an owner may pull a permit and do their own plumbing, building sewer or private sewer work in their own single-family dwelling. A city may not run its own plumbing licensing scheme or exempt itself from the state one.",
      "sourceUrl": "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-339-6125"
    },
    "registration": {
      "text": "A state-licensed plumbing contractor working in Detroit must register that license with the city's enforcing agency if the agency asks for it. State law caps what the city may charge for that registration at $15, and the registration runs until the contractor license expires.",
      "sourceUrl": "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-339-6125"
    },
    "codeItems": [
      {
        "text": "Michigan rewrites the relief-valve discharge rule, so a Detroit inspector checks the water heater's TPR line against state wording rather than the plain IPC. The pipe must end in the open air no more than four inches above the floor with an unthreaded end, carry no valves, be rigid pipe rated for at least 210 degrees Fahrenheit, drain by gravity, match the relief valve outlet in inside diameter, and discharge to the floor, the heater's pan or a waste receptor. It may never be connected straight into the drainage system.",
        "sourceUrl": "https://ars.apps.lara.state.mi.us/AdminCode/DownloadAdminCodeFile?FileName=R%20408.30701%20%20to%20408.30796.pdf"
      },
      {
        "text": "Michigan adds its own list of places a full-open valve is required, and one of them is the water supply pipe to every water heater. A replacement that leaves the tank without that shutoff fails inspection.",
        "sourceUrl": "https://ars.apps.lara.state.mi.us/AdminCode/DownloadAdminCodeFile?FileName=R%20408.30701%20%20to%20408.30796.pdf"
      },
      {
        "text": "Michigan makes any permitted work in an existing dwelling with fuel-fired appliances or an attached garage trigger carbon monoxide alarms to the new-construction standard. Pulling a permit to swap a gas water heater therefore brings the CO alarm requirement with it.",
        "sourceUrl": "https://ars.apps.lara.state.mi.us/AdminCode/DownloadAdminCodeFile?FileName=R%20408.30500%20%20to%20408.30547g.pdf"
      },
      {
        "text": "Michigan amends the smoke alarm retrofit trigger in both directions. Permitted alterations, repairs or additions make the whole dwelling unit meet the new-dwelling smoke alarm layout, but installation, alteration or repair of electrical, plumbing or mechanical systems is expressly exempt from that trigger, and existing interconnection is not required. Houses built before November 6, 1974 that are not under permit follow a separate location list: one alarm in each sleeping room and one on every floor including the basement.",
        "sourceUrl": "https://ars.apps.lara.state.mi.us/AdminCode/DownloadAdminCodeFile?FileName=R%20408.30500%20%20to%20408.30547g.pdf"
      },
      {
        "text": "A homeowner may do electrical work in a single-family home they own and occupy without an electrical license, but that work is not on the state's list of installations exempt from an electrical permit, so the permit is still needed.",
        "sourceUrl": "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-339-5737"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Detroit needs a plumbing permit, and the city may issue it only to a licensed plumbing contractor unless you own and live in the single-family house and do the work yourself. The inspector looks at the relief-valve discharge line, the shutoff valve on the heater's cold supply, and, on a fuel-fired heater, carbon monoxide alarms.",
        "sourceUrl": "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-339-6125"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work in Detroit may not start until the responsible plumbing contractor has a permit from the city, and only a licensed master or journey plumber may do the plumbing. Minor repair work is carved out of the license requirement, as is a homeowner plumbing their own single-family dwelling once a permit is secured.",
        "sourceUrl": "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-339-6107"
      },
      "electrician-service-call": {
        "requirement": "Detroit follows the state electrical rules, which skip the permit for minor repair work such as swapping flush or snap switches, fuses, lamp sockets, receptacles and worn cords. Anything beyond that needs a permit, a copy of it has to stay readable at the job site, and the permit cannot be transferred to someone else.",
        "sourceUrl": "https://ars.apps.lara.state.mi.us/AdminCode/DownloadAdminCodeFile?FileName=R%20408.30801%20%20to%20408.30880.pdf"
      },
      "smoke-detector-replacement": {
        "requirement": "Swapping a smoke alarm is not itself the thing Detroit inspects for, but once a permit is pulled for an alteration, repair or addition, the dwelling unit has to carry smoke alarms laid out as for a new house. Permitted electrical, plumbing and mechanical work is exempt from that trigger, and existing alarms do not have to be interconnected.",
        "sourceUrl": "https://ars.apps.lara.state.mi.us/AdminCode/DownloadAdminCodeFile?FileName=R%20408.30500%20%20to%20408.30547g.pdf"
      }
    }
  },
  "durham-nc": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Durham City-County Building & Safety Department",
      "url": "https://dconc.gov/county-departments/departments-a-e/city-county-inspections"
    },
    "codeEdition": {
      "text": "Permits and inspections in Durham are run by one joint City-County Building & Safety Department that enforces the North Carolina State Building Code for both the city and the county. The 2018 North Carolina Codes, effective January 1, 2019, are still the ones in force; they are the 2015 International Codes plus the 2018 NC Ad-Hoc Committee amendments. Electrical work goes by the 2020 North Carolina Electrical Code, effective November 1, 2021, and accessibility by ANSI A117.1-2009. A 2024 North Carolina State Building Code has been approved but the State Fire Marshal issued separate correspondence in March 2025 on when it takes effect.",
      "sourceUrl": "https://www.ncosfm.gov/codes/codes-current-and-past"
    },
    "permitPolicy": {
      "text": "Durham lets a homeowner take out their own plumbing, heating and air conditioning, or electrical trade permit, but only on a signed Homeowner Acting as Their Own Contractor form that they initial item by item. The home has to be a single-family dwelling that is their primary residence, their name has to be on the deed, and they have to do the work themselves rather than hiring or allowing anyone else to do it. They also agree not to rent, lease or sell the property for one year after the certificate of occupancy is issued or the project is finished. The form is emailed to the department's permit technicians, and the homeowner is then held to exactly the same inspection rules and re-inspection fees as a licensed contractor.",
      "sourceUrl": "https://www.durhamnc.gov/DocumentCenter/View/50033/Homeowner-Acting-As-Their-Own-Contractor"
    },
    "codeItems": [
      {
        "text": "Durham applies a six-foot setback to mechanical equipment: the unit has to sit at least six feet from the property line. On a tight city lot that can decide where a replacement condenser or heat pump is allowed to go, and it is printed right on the homeowner trade permit form.",
        "sourceUrl": "https://www.durhamnc.gov/DocumentCenter/View/50033/Homeowner-Acting-As-Their-Own-Contractor"
      },
      {
        "text": "Durham charges for failed inspections on a published count of defects, and the count differs by trade: $100 once five or more electrical items fail, or four or more plumbing or mechanical items, and $50 on an HVAC replacement. Calling for an inspection on work that is not ready is $100 on its own, and repeat re-inspections climb to $100 for the second, $200 for the third and $300 for the fourth. Inspectors will not inspect work that is not fully ready, and all fees have to be paid before inspections continue.",
        "sourceUrl": "https://www.durhamnc.gov/DocumentCenter/View/50033/Homeowner-Acting-As-Their-Own-Contractor"
      },
      {
        "text": "Durham's electrical minimum is not one number: the floor is $65.00, but a permit for work that needs a rough-in inspection carries a minimum of $100.00 on a house and $150.00 on a commercial job. Opening up walls therefore changes the price of the permit before any per-item fees are counted.",
        "sourceUrl": "https://www.durhamnc.gov/DocumentCenter/View/30850/Fee-Schedule-PDF---revised-August-2-2022"
      },
      {
        "text": "Starting work in Durham before the permit is issued is charged at double the permit fee. An inspection outside normal hours has to be arranged with the chief inspector or supervisor of that trade at least 24 hours ahead and runs $125.00 an hour with a two- or three-hour minimum.",
        "sourceUrl": "https://www.durhamnc.gov/DocumentCenter/View/2706/Building-Permits-PDF"
      },
      {
        "text": "Durham's building permit fee schedule carries a $10.00 Homeowner's Recovery Fund fee, and changing the address on an already-issued permit costs $10.00 per trade, so a mis-keyed address on a water heater or panel permit is a separate charge for each trade permit involved.",
        "sourceUrl": "https://www.durhamnc.gov/DocumentCenter/View/2706/Building-Permits-PDF"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Durham's plumbing fee schedule states outright that a permit is required for an electric water heater, and it is priced as a flat trade permit rather than per fixture.",
        "sourceUrl": "https://www.durhamnc.gov/DocumentCenter/View/30850/Fee-Schedule-PDF---revised-August-2-2022",
        "fee": "$65.00 electric water heater (permit required)",
        "feeAsOf": "City of Durham Fee Schedule (Ordinance 15981), revised August 2, 2022"
      },
      "plumber-service-call": {
        "requirement": "A Durham plumbing permit covers fixture replacement, and as long as the rough-in is not changed the city charges one flat fee for the first few fixtures before moving to a per-fixture rate.",
        "sourceUrl": "https://www.durhamnc.gov/DocumentCenter/View/30850/Fee-Schedule-PDF---revised-August-2-2022",
        "fee": "$65.00 for 1-4 fixtures replaced with no change to the rough-in; $6.86 per fixture for 5 or more",
        "feeAsOf": "City of Durham Fee Schedule (Ordinance 15981), revised August 2, 2022"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Durham takes its own electrical permit, priced per item against a minimum that rises if the job needs a rough-in inspection.",
        "sourceUrl": "https://www.durhamnc.gov/DocumentCenter/View/30850/Fee-Schedule-PDF---revised-August-2-2022",
        "fee": "$65.00 minimum electrical permit fee ($100.00 residential, $150.00 commercial where a rough-in inspection is required); service equipment $34.00 up to 100 amps plus $6.97 for each additional 100 amps or fraction; outlets, receptacles and switches $21.00 for 1-10 plus $0.83 each additional; individual branch circuits such as a dryer or dishwasher $10.90 each; electric water heater branch circuit $10.90",
        "feeAsOf": "City of Durham Fee Schedule (Ordinance 15981), revised August 2, 2022"
      }
    }
  },
  "el-paso-tx": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of El Paso Planning and Inspections Department (One Stop Shop, 811 Texas Avenue)",
      "url": "https://www.elpasotexas.gov/planning-and-inspections"
    },
    "codeEdition": {
      "text": "El Paso's published list of currently adopted codes is the 2021 International Building Code, the 2021 International Residential Code, the 2021 International Energy Conservation Code, the 2021 International Mechanical Code, the 2020 NFPA 70 National Electrical Code, the 2021 International Plumbing Code, the 2021 International Fuel Gas Code, the 2021 International Existing Building Code, the 2021 International Fire Code, the 2021 International Swimming Pool and Spa Code and the 2021 International Property Maintenance Code, plus the Texas Accessibility Standards and ICC/ANSI A117.1 2009. The city also lists its own Outdoor Lighting Code and Landscape and Irrigation Code. Local amendments are carried in Title 18 of the El Paso City Code.",
      "sourceUrl": "https://www.elpasotexas.gov/assets/Documents/CoEP/Planning-and-Inspections/Applications/Building-Permit-Applications/Adopted-Codes-and-Amendments.pdf"
    },
    "permitPolicy": {
      "text": "El Paso runs permits through registered contractors. A contractor registration application has to be filed with the city annually to be eligible to obtain permits, under Section 18.02.104.5 of the El Paso City Code, and the registration is categorized by trade — General, Electrical, Mechanical, Plumbing, Irrigation, Barricade, Sign, Fire Systems and pavement cut. The city also warns that failing to close out a permit with a final inspection, certificate of completion or occupancy can put a hold on the company and get further permits denied, under Section 18.02.105.25.",
      "sourceUrl": "https://www.elpasotexas.gov/assets/Documents/CoEP/Planning-and-Inspections/Applications/License-Applications/Contractor-Registration-Application-new.pdf"
    },
    "registration": {
      "text": "El Paso requires its own annual contractor registration on top of the state license, and the requirements differ sharply by trade. Electrical, mechanical, plumbing and fire contractors pay no annual registration fee, but must submit the state credential — an Electrical Contractor's License plus a TDLR Master Electrician license showing the business name, a Master Mechanical state license, or a Master Plumbing license with the Plumbing Board showing the insurance expiration and business name. A general contractor, by contrast, pays a $100 annual fee plus a tech fee and must file a $50,000 blanket building construction bond and a general liability certificate of at least $100,000 naming the City of El Paso as certificate holder. Irrigation contractors and non-electrical sign contractors also pay $100 a year; a large sign installer pays $607.",
      "sourceUrl": "https://www.elpasotexas.gov/assets/Documents/CoEP/Planning-and-Inspections/Business-Licensing/Contractor-Registration-Requirements.pdf"
    },
    "codeItems": [
      {
        "text": "Texas lets a licensed plumber perform the electrical work needed to install, service, maintain, repair or replace a plumbing fixture or appliance on existing circuits without an electrician's license, so a water heater or disposer changeout in El Paso does not pull in a second licensed trade. The state also exempts a person doing electrical work on a dwelling they own and reside in, but warns that municipal regulations may override these exemptions under Section 1305.201 of the Texas Electrical Safety and Licensing Act — and El Paso does require trade registration to obtain a permit.",
        "sourceUrl": "https://www.tdlr.texas.gov/ELECTRICIANS/exemptions.htm"
      },
      {
        "text": "El Paso breaks trade work into discrete numbered inspections scheduled against the permit, so a job is not signed off in one visit. Electrical work has separate underground, rough, slab, partial, service release and final inspections; plumbing has sewer, underground, rough-in, top out, gas, partial and final; mechanical has under-slab duct, rough, partial and final. An inspection can only be scheduled with the authorization code issued when the contractor's city registration was completed.",
        "sourceUrl": "https://www.elpasotexas.gov/assets/Documents/CoEP/Planning-and-Inspections/Applications/License-Applications/inspectionIVRcodes.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "In El Paso the water heater work has to be done by a plumbing contractor holding a Master Plumbing license and registered with the city in the plumbing category, and the city will run its own plumbing inspections against the permit, including a gas inspection on a gas-fired unit.",
        "sourceUrl": "https://www.elpasotexas.gov/assets/Documents/CoEP/Planning-and-Inspections/Business-Licensing/Contractor-Registration-Requirements.pdf"
      },
      "plumber-service-call": {
        "requirement": "El Paso only lets a contractor who is registered with the city in the plumbing category and holds a Master Plumbing license pull plumbing permits, and that registration has to be renewed every year to stay eligible.",
        "sourceUrl": "https://www.elpasotexas.gov/assets/Documents/CoEP/Planning-and-Inspections/Applications/License-Applications/Contractor-Registration-Application-new.pdf"
      },
      "electrician-service-call": {
        "requirement": "An electrician working in El Paso needs both a state Electrical Contractor's License and a TDLR Master Electrician license showing the business name, plus an annual city electrical contractor registration, before the city will issue an electrical permit; the registration itself carries no annual fee.",
        "sourceUrl": "https://www.elpasotexas.gov/assets/Documents/CoEP/Planning-and-Inspections/Business-Licensing/Contractor-Registration-Requirements.pdf"
      }
    }
  },
  "fort-lauderdale-fl": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Fort Lauderdale Development Services Department, Building Services Division",
      "url": "https://www.fortlauderdale.gov/Government/Departments/Development-Services/Permitting-Services"
    },
    "codeEdition": {
      "text": "Fort Lauderdale enforces the statewide Florida Building Code, 8th Edition (2023) — the city issues its own permit packages under that edition. Because the city sits in Broward County, the Broward County Board of Rules and Appeals also sets board policies the city applies at the permit counter, which is why a Fort Lauderdale water heater permit runs on a Broward County form rather than a city one.",
      "sourceUrl": "https://www.fortlauderdale.gov/files/assets/public/v/2/development-services/documents/docs-forms/roof_package_fbc_8_edition.pdf"
    },
    "permitPolicy": {
      "text": "A Fort Lauderdale property owner can pull the permit themselves as an owner-builder, but the city makes it deliberately formal: the owner has to appear in person at Development Services, receive the disclosure statement, and sign the Owner/Builder Permit Affidavit in front of a permit technician. The exemption covers improving a one- or two-family home for the owner's own use and occupancy, not for sale or lease, and the law presumes a violation if the home is sold or leased within one year of completion. The owner-builder must give direct on-site supervision, may not hire an unlicensed person to act as contractor or supervisor, and may not hand supervision to a contractor who is not licensed for that trade. The city's residential electrical service change worksheet has a signature line for either a licensed electrical contractor or the homeowner, so homeowner-signed electrical work is contemplated.",
      "sourceUrl": "https://www.fortlauderdale.gov/files/assets/public/v/1/development-services/documents/docs-forms/ownerbuilderpermitaffidavitr5.pdf"
    },
    "registration": {
      "text": "A contractor has to register with the City of Fort Lauderdale before it will issue a permit, on top of the state or county credential. Registration goes through the LauderBuild portal and requires either a State of Florida license or a Broward County Certificate of Competency with state registration, a certificate of liability insurance naming the City of Fort Lauderdale as certificate holder, proof of workers' compensation insurance or a state exemption letter, and a current Sunbiz.org filing matching the license. The qualifier's signature has to be notarized. Credentials must stay current: the city will not issue permits or even take fee payments from a contractor whose documents have expired.",
      "sourceUrl": "https://www.fortlauderdale.gov/Government/Departments/Development-Services/Permitting-Services/Contractors-Licensed-Professionals"
    },
    "codeItems": [
      {
        "text": "Fort Lauderdale makes a water heater swap carry a Broward County Board of Rules and Appeals data form, adopted as Board Policy 22-02. The form has to state whether the heater stays in the same location or is being relocated, and it captures both the existing and the new unit. For an electric heater that means kW, voltage, wire size, breaker size and gallons, and whether the unit is cord connected or hardwired; for gas it means gas pipe size, flue size and type, BTUH and gallons, and whether the fuel is natural gas or LP. If a cord is used, the manufacturer's electrical installation instructions have to go in with the permit application, and efficiency has to be backed by manufacturer data or an approved certification such as an AHRI certificate.",
        "sourceUrl": "https://www.fortlauderdale.gov/files/assets/public/v/1/development-services/documents/docs-forms/water-heater-replacement-data-form.pdf"
      },
      {
        "text": "Flooding shapes even temporary electrical work in Fort Lauderdale. The city's temporary electrical pole diagram, signed off by the chief electrical inspector, has a blank the applicant has to fill in stating the minimum required elevation in NAVD 88 that the temporary pole will meet, and the filled-in sheet goes in with the permitting documents.",
        "sourceUrl": "https://www.fortlauderdale.gov/files/assets/public/v/1/development-services/documents/docs-forms/temp-pole-diagram-r4.pdf"
      },
      {
        "text": "Fort Lauderdale's own electrical service change worksheet shows what the chief electrical inspector expects an electrician to document on a residential overhead or underground service change. All conductors must be sized per NEC Article 220, overhead service conductors must comply with NEC 230 Part II, and an underground service run needs a warning ribbon 12 inches above the conduit under NEC 300.5(D)(3). The sheet also asks for service and sub-panel voltage, amp rating, main breaker size and AIC rating, the cold water bond size from NEC Table 250.66, the grounding electrode conductor size, ground rod length and material, and an external means for intersystem bonding connections under NEC 250.94.",
        "sourceUrl": "https://www.fortlauderdale.gov/files/assets/public/v/1/development-services/documents/docs-forms/residential-overhead-or-underground-service-change-2.pdf"
      },
      {
        "text": "Fort Lauderdale is inside Florida's High Velocity Hurricane Zone, and the city publishes its own HVHZ checklist under Florida Building Code Section 1524 that a roofing contractor has to walk the owner through item by item, with the owner initialing each point. It covers things a national guide would not raise, such as renailing an existing wood roof deck to current HVHZ Chapter 16 provisions once the old roof comes off, and adding overflow scuppers where a perimeter wall would block rainwater from leaving the roof.",
        "sourceUrl": "https://www.fortlauderdale.gov/files/assets/public/v/1/development-services/documents/docs-forms/checklists/high-velocity-hurricane-zones-r2.pdf"
      },
      {
        "text": "Fort Lauderdale adds county and state line items to every permit rather than folding them into the headline fee. On top of the permit itself a job pays the Florida DBPR surcharge of 1 percent of total permit fees with a $2 minimum, the Florida Building Code Administrators and Inspectors Fund surcharge of 1.5 percent with a $2 minimum, a $5 Construction Lien Law charge, and a Broward County Board of Rules and Appeals charge of $0.52 per $1,000 of construction cost with a $2 minimum. A failed inspection that has to be repeated costs $164.",
        "sourceUrl": "https://www.fortlauderdale.gov/files/assets/public/v/3/development-services/documents/building-fees-august-2026-r10.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Fort Lauderdale needs a trade permit, and the under-$7,500 state exemption does not help because the city lists plumbing, electrical and gas work as still requiring a permit whatever the job costs; the application has to include the Broward County water heater replacement data form.",
        "sourceUrl": "https://www.fortlauderdale.gov/files/assets/public/v/3/development-services/documents/building-fees-august-2026-r10.pdf",
        "fee": "Trade Permit: Minimum $131 or 1.75% of construction cost; plus DBPR surcharge 1% of total permit fees or minimum $2, BCAI Fund surcharge 1.5% of total permit fees or minimum $2, Construction Lien Law $5, and Board of Rules and Appeals $0.52 per $1000 of construction cost or minimum $2",
        "feeAsOf": "Rev: 10, Revision Date 9/17/2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "A disposal swap is plumbing work with an electrical connection, and Fort Lauderdale says plumbing and electrical work still need a permit no matter the job cost, so it runs on the same trade permit with a minimum charge.",
        "sourceUrl": "https://www.fortlauderdale.gov/files/assets/public/v/3/development-services/documents/building-fees-august-2026-r10.pdf",
        "fee": "Trade Permit: Minimum $131 or 1.75% of construction cost; plus DBPR surcharge 1% of total permit fees or minimum $2, BCAI Fund surcharge 1.5% of total permit fees or minimum $2, Construction Lien Law $5, and Board of Rules and Appeals $0.52 per $1000 of construction cost or minimum $2",
        "feeAsOf": "Rev: 10, Revision Date 9/17/2026"
      },
      "plumber-service-call": {
        "requirement": "Fort Lauderdale does not have a small-job plumbing exemption: the city's HB 803 notice lists plumbing work among the work that still needs a permit regardless of project cost, and the trade permit carries a minimum fee plus county and state surcharges.",
        "sourceUrl": "https://www.fortlauderdale.gov/files/assets/public/v/3/development-services/documents/building-fees-august-2026-r10.pdf",
        "fee": "Trade Permit: Minimum $131 or 1.75% of construction cost; plus DBPR surcharge 1% of total permit fees or minimum $2, BCAI Fund surcharge 1.5% of total permit fees or minimum $2, Construction Lien Law $5, and Board of Rules and Appeals $0.52 per $1000 of construction cost or minimum $2",
        "feeAsOf": "Rev: 10, Revision Date 9/17/2026"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Fort Lauderdale needs a permit whatever it costs, and a residential service change also needs the city's own worksheet showing conductor sizing, panel ratings, bonding and grounding before the electrical division signs off.",
        "sourceUrl": "https://www.fortlauderdale.gov/files/assets/public/v/3/development-services/documents/building-fees-august-2026-r10.pdf",
        "fee": "Trade Permit: Minimum $131 or 1.75% of construction cost; plus DBPR surcharge 1% of total permit fees or minimum $2, BCAI Fund surcharge 1.5% of total permit fees or minimum $2, Construction Lien Law $5, and Board of Rules and Appeals $0.52 per $1000 of construction cost or minimum $2",
        "feeAsOf": "Rev: 10, Revision Date 9/17/2026"
      },
      "smoke-detector-replacement": {
        "requirement": "Fort Lauderdale publishes no separate smoke alarm permit line, but it does say electrical work is not covered by the under-$7,500 residential exemption, so hardwired alarm wiring is treated as permitted electrical work rather than exempt cosmetic work.",
        "sourceUrl": "https://www.fortlauderdale.gov/files/assets/public/v/3/development-services/documents/docs-forms/hb-803-permitting-updates-r3.pdf"
      }
    }
  },
  "fort-wayne-in": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Allen County Building Department (building, electrical, plumbing and mechanical permits for Fort Wayne and Allen County)",
      "url": "https://www.allencounty.in.gov/234/Building-Department"
    },
    "codeEdition": {
      "text": "Fort Wayne work is inspected to the Indiana state codes the Allen County Building Department lists: the Indiana Residential Code based on the 2018 IRC (effective December 26, 2019), the Indiana Plumbing Code based on the 2006 IPC (effective December 24, 2012), the Indiana Electrical Code based on the 2008 National Electrical Code (effective August 26, 2009), and 2012-edition Indiana Building, Mechanical and Fuel Gas Codes (effective December 1, 2014). The electrical and plumbing base codes are several cycles behind the current national editions, so a national guide's assumptions about recent requirements may not apply here.",
      "sourceUrl": "https://www.allencounty.in.gov/234/Building-Department"
    },
    "permitPolicy": {
      "text": "Permits for Fort Wayne addresses are issued by the Allen County Building Department, not by a separate city office, and the department's own guidance describes permits as being submitted by licensed and registered contractors, online or at its front counter. Allen County does not do plan review itself - that is handled at the state level, so some projects need a state construction design release number supplied at the time of permit submission.",
      "sourceUrl": "https://www.allencounty.in.gov/m/faq?cat=20"
    },
    "registration": {
      "text": "The Allen County Building Department issues contractor licenses and registrations in addition to anything the State of Indiana requires, and handles renewals through its Citizen Access portal. No dollar amount for the licence or registration is published on the department's page.",
      "sourceUrl": "https://www.allencounty.in.gov/234/Building-Department"
    },
    "codeItems": [
      {
        "text": "Indiana building codes are adopted at the state level and cannot be amended locally, so Fort Wayne and Allen County enforce the state code as written rather than a locally amended version - there is no separate Fort Wayne amendment package to hunt for.",
        "sourceUrl": "https://up.codes/codes/indiana"
      },
      {
        "text": "Indiana's residential code carries a replacement carve-out a national guide would not mention: where a pan drain was not previously installed, one is not required for a replacement water heater. The pan itself is still required wherever a leak would cause damage, must be at least 1 1/2 inches deep, and must be drained by an indirect waste pipe of at least 3/4 inch.",
        "sourceUrl": "https://up.codes/viewer/indiana/irc-2018/chapter/28/water-heaters"
      },
      {
        "text": "Where a pan drain is installed, Indiana requires it to run full size and terminate either over a suitably located indirect waste receptor or outside the building, between 6 and 24 inches above the adjacent ground.",
        "sourceUrl": "https://up.codes/viewer/indiana/irc-2018/chapter/28/water-heaters"
      },
      {
        "text": "A water heater with an ignition source installed in a Fort Wayne garage has to be elevated so the ignition source sits at least 18 inches above the garage floor, and every tank-type heater needs a drain valve of at least 3/4 inch at the bottom with a male hose thread outlet.",
        "sourceUrl": "https://up.codes/viewer/indiana/irc-2018/chapter/28/water-heaters"
      },
      {
        "text": "Indiana narrows the trigger for upgrading a whole house to new-construction smoke alarms. It applies only when permitted alterations, additions or a complete replacement of the electrical system occur, and it specifically exempts plumbing and mechanical work, exterior work such as roofing, siding, windows or a deck, and electrical work in existing rooms other than newly constructed or relocated bedrooms.",
        "sourceUrl": "https://up.codes/viewer/indiana/irc-2018/chapter/3/building-planning"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Plumbing and mechanical work in Fort Wayne needs a permit from the Allen County Building Department, and the inspector works from the Indiana code: the drain pan where a leak would cause damage, the pan drain termination, and the 18-inch elevated ignition source in a garage - but a pan drain is not required if the old installation did not have one.",
        "sourceUrl": "https://www.allencounty.in.gov/DocumentCenter/View/13579/Residential-Permit-Guide-PDF"
      },
      "plumber-service-call": {
        "requirement": "The Allen County Building Department's residential permit guide lists plumbing as permit-required work for Fort Wayne addresses, and the permit is normally submitted by a licensed and registered contractor.",
        "sourceUrl": "https://www.allencounty.in.gov/DocumentCenter/View/13579/Residential-Permit-Guide-PDF"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Fort Wayne is permit-required through the Allen County Building Department, and it is inspected against the Indiana Electrical Code, which is still based on the 2008 National Electrical Code rather than a current edition.",
        "sourceUrl": "https://www.allencounty.in.gov/DocumentCenter/View/13579/Residential-Permit-Guide-PDF"
      },
      "smoke-detector-replacement": {
        "requirement": "Swapping a smoke alarm in Fort Wayne does not by itself force a whole-house alarm upgrade; Indiana only requires alarms to be brought up to new-construction standards when permitted electrical alterations, additions or a full electrical system replacement are done, and it exempts plumbing and mechanical work and electrical work in existing rooms other than new or relocated bedrooms.",
        "sourceUrl": "https://up.codes/viewer/indiana/irc-2018/chapter/3/building-planning"
      }
    }
  },
  "fort-worth-tx": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Fort Worth Development Services Department",
      "url": "https://www.fortworthtexas.gov/departments/development-services/permits"
    },
    "codeEdition": {
      "text": "Fort Worth enforces the 2021 International Residential, Building, Plumbing, Fuel Gas, Mechanical and Existing Building Codes, each adopted with its own local amendment ordinance in March 2022 (for example Ordinance 25383-03-2022 for the IRC and 25385-03-2022 for the plumbing and fuel gas codes). The city's code page states the 2026 National Electrical Code takes effect September 1, 2026.",
      "sourceUrl": "https://www.fortworthtexas.gov/departments/development-services/permits/building-energy-codes"
    },
    "permitPolicy": {
      "text": "A plumbing permit is needed to change, install, move or repair plumbing, including a water heater, and an electrical permit is needed to change, move or repair electrical equipment including the service. An owner who lives in the single-family home may pull the permit and do the work personally by filing a homestead affidavit, but on electrical work the affidavit bars the homeowner from touching the service, which must be permitted and done by a master electrician.",
      "sourceUrl": "https://www.fortworthtexas.gov/departments/development-services/permits/residential-information"
    },
    "registration": {
      "text": "Anyone pulling a building, mechanical, plumbing or electrical permit must hold a current Fort Worth contractor registration backed by the matching state license (Texas electrical contractor license, master plumber or irrigator license, or air conditioning and refrigeration license). The annual registration fee published for building, plumbing irrigator, sign, moving and wrecking contractors is $168.75, and registration expires one year from issuance. An owner-occupant working on their own homestead single-family residence is exempt from registering.",
      "sourceUrl": "https://www.fortworthtexas.gov/departments/development-services/permits/contractor-registration"
    },
    "codeItems": [
      {
        "text": "Fort Worth bans water heaters in residential attics outright, except tankless units. The ban appears in the city's amendments to IRC M2005.1, IPC 502.3 and IFGC 624.1.1, so an attic swap that a national guide would treat as routine cannot be permitted here in kind.",
        "sourceUrl": "https://www.fortworthtexas.gov/files/assets/public/v/2/development-services/documents/building-code-local-amendments/2021-approved-local-amendments/irc-amendments-2021-ordinance-25383-03-2022.pdf"
      },
      {
        "text": "The city rewrites the TPR relief-valve discharge rules: the line must serve one relief device only, must terminate where occupants can see it, may not be trapped or valved, must have no threaded end, and must stop between six inches and two feet above grade when it discharges outdoors.",
        "sourceUrl": "https://www.fortworthtexas.gov/files/assets/public/v/1/development-services/documents/building-code-local-amendments/2021-approved-local-amendments/ipc-and-ifgc-2021-amendments-ordinance-25385-03-2022.pdf"
      },
      {
        "text": "Fort Worth normally forbids running the TPR discharge into the drain pan, but allows it on a slab-foundation water heater retrofit or replacement where no approved discharge point exists, on condition that an approved device shuts off the water supply when the pan detects water and a second device sounds an audible leak alarm.",
        "sourceUrl": "https://www.fortworthtexas.gov/files/assets/public/v/1/development-services/documents/building-code-local-amendments/2021-approved-local-amendments/ipc-and-ifgc-2021-amendments-ordinance-25385-03-2022.pdf"
      },
      {
        "text": "A readily accessible full-open valve is required in the cold-water supply at or near every water heater or hot water storage tank, and it must not disrupt cold water to the rest of the house (city amendment to IRC P2903.9.2).",
        "sourceUrl": "https://www.fortworthtexas.gov/files/assets/public/v/2/development-services/documents/building-code-local-amendments/2021-approved-local-amendments/irc-amendments-2021-ordinance-25383-03-2022.pdf"
      },
      {
        "text": "Fort Worth adds media rooms to the smoke-alarm location list: an alarm is required inside each media room and outside it in the immediate vicinity, on top of the usual bedroom, hallway and per-story placements, and alarms must sit at least three feet from a bathroom door where a tub or shower is present.",
        "sourceUrl": "https://www.fortworthtexas.gov/files/assets/public/v/2/development-services/documents/building-code-local-amendments/2021-approved-local-amendments/irc-amendments-2021-ordinance-25383-03-2022.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Fort Worth requires a plumbing permit to install, change, move or repair a water heater, and city amendments mean an inspector checks the pan, the TPR discharge termination and the cold-water shutoff valve.",
        "sourceUrl": "https://www.fortworthtexas.gov/departments/development-services/permits/residential-information"
      },
      "plumber-service-call": {
        "requirement": "Repairing or altering existing plumbing in Fort Worth takes a plumbing permit, pulled by a city-registered plumbing contractor or by the owner-occupant under a homestead affidavit.",
        "sourceUrl": "https://www.fortworthtexas.gov/departments/development-services/permits/residential-information"
      },
      "electrician-service-call": {
        "requirement": "An electrical permit is required in Fort Worth to change, move or repair electrical equipment including the service, and a homeowner using the homestead affidavit may not work on the service at all.",
        "sourceUrl": "https://www.fortworthtexas.gov/departments/development-services/permits/residential-information"
      }
    }
  },
  "fresno-ca": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Fresno Planning and Development Department, Building and Safety Services Division",
      "url": "https://www.fresno.gov/planning/building-and-safety/"
    },
    "codeEdition": {
      "text": "Fresno is on the 2025 California Building Standards Code, effective January 1, 2026. The city ran a joint triennial code-update symposium with the City of Clovis in December 2025 covering the move from the 2022 to the 2025 editions of the California Building, Residential, Electrical, Plumbing, Mechanical, Energy and Green Building Standards Codes, plus the 2025 California Wildland-Urban Interface Code. The city's own earlier bulletin documents the previous cycle, when the 2022 code took effect on January 1, 2023 with no extensions granted to the plan-review or permit-issuance periods.",
      "sourceUrl": "https://www.fresno.gov/wp-content/uploads/2025/12/12.15.2025-COF_COC_BS_Symposium-2025-for-Participants-10w1188.pdf"
    },
    "permitPolicy": {
      "text": "Fresno applies California Building Code chapter 1 section 105.1, so the owner or an authorized agent is the one who applies for the permit, and the city publishes an Owner Builder Checklist under its single-family permit procedures for homeowners who choose not to hire licensed contractors. For straightforward trade work there are no plans to submit: the applicant instead completes the city's Permit Affidavit Form listing the fixtures and equipment involved. Every Fresno permit goes invalid if work does not start within 180 days or stalls for 180 days, and the clock resets from each approved inspection; a lapsed permit is reinstated by paying 25 percent of the original permit fee.",
      "sourceUrl": "https://www.fresno.gov/planning/building-and-safety/building-permit-center/"
    },
    "registration": {
      "text": "Fresno does not issue its own plumbing or electrical licence on top of the California state contractor licence, but a contractor working in the city owes city business tax and must hold a City of Fresno Business Tax Certificate; the city's own screening questions treat holding a California State Contractor's License as a trigger to contact the Business Tax Division. The tax is assessed on gross receipts earned from work inside the city, and the city publishes an optional Schedule S form letting a contractor deduct payments made to other state-licensed contractors who did work on Fresno project sites. No flat registration fee or bond figure is published.",
      "sourceUrl": "https://www.fresno.gov/finance/business-license-and-tax-certificate/"
    },
    "codeItems": [
      {
        "text": "Fresno inspectors require interior access to the dwelling to confirm smoke and carbon monoxide alarms before they will sign off a permit. The city's bulletin ties the retrofit trigger to permitted alterations, repairs or additions valued above $1,000, and sets the alarm locations it checks: outside each sleeping area, on every story including basements and habitable attics, inside every bedroom, at least 36 inches from forced-air supply registers and return air ducts, at least 20 feet from a permanently installed cooking appliance, and at least 3 feet from a bathroom door where there is a shower or tub. Alarms must be listed by the Office of the State Fire Marshal, and smoke alarms are to be replaced 10 years from their date of manufacture.",
        "sourceUrl": "https://www.fresno.gov/wp-content/uploads/2023/02/2013SmokeandCarbonMonoxideBulletin.pdf"
      },
      {
        "text": "Fresno and Fresno County issued a joint bulletin exempting routine change-outs from SB 407, the state rule that otherwise forces a whole-house swap to water-conserving plumbing fixtures when a property is altered. Water heater replacement, electrical service change-outs, HVAC change-outs, sewer line replacement, re-roofs, window replacement and residential solar are all listed as permits not subject to SB 407 in the city of Fresno, because those are treated as repair or maintenance rather than an alteration.",
        "sourceUrl": "https://www.fresno.gov/wp-content/uploads/2023/02/ApplicationofSB407WaterEfficientFixtures.pdf"
      },
      {
        "text": "Under the 2025 California Electrical Code that Fresno now enforces, replacing an electrical panel in a dwelling pulls in a surge protective device. The city's code-update briefing flags CEC articles 215.18 and 225.42 as now requiring an SPD on panel replacement in dwellings, dormitories and guest rooms.",
        "sourceUrl": "https://www.fresno.gov/wp-content/uploads/2025/12/12.15.2025-COF_COC_BS_Symposium-2025-for-Participants-10w1188.pdf"
      },
      {
        "text": "Ground-fault and arc-fault scope widened sharply in the 2025 California Electrical Code Fresno enforces. The city's briefing lists GFCI protection under CEC 210.8 now reaching all 125 to 250 volt receptacles in residential areas, crawl spaces and unfinished basements, outdoor outlets regardless of cover or location, and the circuits feeding electric ranges, wall and counter mounted ovens, clothes dryers and microwaves; AFCI protection under 210.12 now reaches kitchens including dedicated appliance outlets, laundry rooms, and all 120 volt 15 and 20 amp circuits serving dwelling areas.",
        "sourceUrl": "https://www.fresno.gov/wp-content/uploads/2025/12/12.15.2025-COF_COC_BS_Symposium-2025-for-Participants-10w1188.pdf"
      },
      {
        "text": "Water heater clearance and support are both on Fresno's checklist. The 2025 California Plumbing Code section 507.25 the city now enforces requires a minimum 30 by 30 by 30 inch service clearance at the water heater unless the manufacturer specifies otherwise, with heat pump water heaters held to the manufacturer's own space requirement, and the city's plan-check comments for water heaters call for the unit's location and weight plus a vertical support detail showing seismic strapping to the wall. The 2025 California Energy Code also makes a heat-pump-water-heater-ready installation carry a dedicated 30 amp circuit.",
        "sourceUrl": "https://www.fresno.gov/wp-content/uploads/2025/12/12.15.2025-COF_COC_BS_Symposium-2025-for-Participants-10w1188.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Fresno needs a stand-alone plumbing permit, charged as a Simple Plumbing Item with the inspection built into the fee, and the inspector checks the service clearance, the seismic strapping and the home's smoke and carbon monoxide alarms before signing off.",
        "sourceUrl": "https://www.fresno.gov/wp-content/uploads/2026/07/MFS-Planning_593_CPI_CPI-UGM_CPI-Parking-ED-2026.07.01-10w1657-10w1683.pdf",
        "fee": "$111.50 inspection fee for a Water Heater as a Simple Plumbing Item, plus the $27.08 Permit Issuance fee charged on all projects in that table",
        "feeAsOf": "Effective 07/01/2026 (Master Fee Schedule Amendment #590)"
      },
      "plumber-service-call": {
        "requirement": "Fresno charges one flat Simple Plumbing Item fee for most ordinary service work, including plumbing fixtures, a building sewer, water piping or water treating equipment, backflow devices, and repair or alteration of drainage or vent piping, with the permit issuance fee added on top; bigger jobs such as on-site sewer 6 inches and over are priced per linear foot instead.",
        "sourceUrl": "https://www.fresno.gov/wp-content/uploads/2026/07/MFS-Planning_593_CPI_CPI-UGM_CPI-Parking-ED-2026.07.01-10w1657-10w1683.pdf",
        "fee": "$111.50 inspection fee per Simple Plumbing Item (plumbing fixtures, building sewer, water piping, backflow device, repair or alteration of drainage or vent piping) plus the $27.08 Permit Issuance fee; on-site sewer 6 inches and over is $1.97 per lineal foot and Other Complex Plumbing is $149.07",
        "feeAsOf": "Effective 07/01/2026 (Master Fee Schedule Amendment #590)"
      },
      "electrician-service-call": {
        "requirement": "A stand-alone electrical permit in Fresno is priced as a Simple Electrical Item for ordinary work such as receptacles, switches and lighting outlets, lighting fixtures, residential appliances and a service of 600 volts or less rated 400 amps or under, so a typical residential panel or service change-out falls in the simple band; going over 400 amps moves the job into the far more expensive complex band, and under the 2025 electrical code a dwelling panel replacement now needs a surge protective device.",
        "sourceUrl": "https://www.fresno.gov/wp-content/uploads/2026/07/MFS-Planning_593_CPI_CPI-UGM_CPI-Parking-ED-2026.07.01-10w1657-10w1683.pdf",
        "fee": "$111.50 inspection fee per Simple Electrical Item, including a service of 600 volts or less and not over 400 amperes, plus the $27.08 Permit Issuance fee; a service over 400 up to 1,000 amperes is $935.79 and Other Complex Electrical is $1,232.70",
        "feeAsOf": "Effective 07/01/2026 (Master Fee Schedule Amendment #590)"
      },
      "smoke-detector-replacement": {
        "requirement": "Fresno publishes no permit or fee for simply swapping a smoke alarm, but its building bulletin requires an existing dwelling to be brought up to the current smoke and carbon monoxide alarm layout whenever permitted alterations, repairs or additions exceed $1,000 in value, and inspection staff come inside to verify every required alarm as a condition of final approval; where the work does not open up wall or ceiling finishes and gives no attic, basement or crawl space access, battery-only non-interconnected alarms are accepted.",
        "sourceUrl": "https://www.fresno.gov/wp-content/uploads/2023/02/2013SmokeandCarbonMonoxideBulletin.pdf"
      }
    }
  },
  "gilbert-az": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Town of Gilbert Development Services, Plan Review & Inspection",
      "url": "https://www.gilbertaz.gov/departments/development-services/plan-review-inspection"
    },
    "codeEdition": {
      "text": "Gilbert enforces the 2018 I-Codes effective January 1, 2020: 2018 International Building Code, 2018 International Residential Code, 2018 International Mechanical Code, 2018 International Plumbing Code, 2018 International Fuel Gas Code, 2018 International Fire Code and 2018 International Energy Conservation Code, plus the 2017 National Electrical Code. The 2018 International Green Construction Code is adopted as a voluntary code. The town's own amendments are compiled as the Technical Codes of the Town of Gilbert, 2020 Edition.",
      "sourceUrl": "https://www.gilbertaz.gov/departments/development-services/plan-review-inspection"
    },
    "permitPolicy": {
      "text": "Gilbert's amended exempt-work list covers more than the model code does: solar photovoltaic, solar hot water and wind turbine systems, like-for-like water heater replacements, water softeners, and window replacement with the same style window in the same opening (egress must still be maintained). The solar, wind and water-heater exemption applies only when an Arizona licensed contractor does the installation. Arizona law separately exempts a property owner who does the work themselves on a structure they will occupy and that is not for sale or rent from contractor licensing.",
      "sourceUrl": "https://gilbertaz.gov/home/showpublisheddocument/35111/637472746862800000"
    },
    "registration": {
      "text": "Gilbert's published fee schedule lists a general Business License at $50 for most business types, first time or renewal, and a Homebased Business License at $50 per year. The schedule shows no separate plumbing or electrical contractor registration. Gilbert's code does require that work claiming the water heater and solar permit exemption be installed by an Arizona licensed contractor.",
      "sourceUrl": "https://www.gilbertaz.gov/home/showpublisheddocument/5883/639184173264330000"
    },
    "codeItems": [
      {
        "text": "Gilbert spells out pan material for a water heater in an attic or furred space: galvanized steel at least 0.0236 inch thick, plastic at least 0.036 inch thick, or another approved pan.",
        "sourceUrl": "https://gilbertaz.gov/home/showpublisheddocument/35111/637472746862800000"
      },
      {
        "text": "Where structural conditions stop the pan drain from running outdoors, Gilbert lets it end between 6 and 24 inches above the adjacent garage floor, sloped so it drains outdoors.",
        "sourceUrl": "https://gilbertaz.gov/home/showpublisheddocument/35111/637472746862800000"
      },
      {
        "text": "Gilbert rewrote the temperature and pressure relief valve discharge rules: one of the model code's permitted terminations is deleted, discharge to an indirect waste receptor or outdoors is allowed, and the outdoor termination must sit not less than 6 inches and not more than 24 inches above the adjacent ground.",
        "sourceUrl": "https://gilbertaz.gov/home/showpublisheddocument/35111/637472746862800000"
      },
      {
        "text": "Gilbert narrowed arc-fault protection by striking kitchens and laundry areas from the first paragraph of the AFCI sections in both the NEC and the residential code, and deleted the laundry-area and dishwasher branch-circuit sections outright.",
        "sourceUrl": "https://gilbertaz.gov/home/showpublisheddocument/35111/637472746862800000"
      },
      {
        "text": "Gilbert added two GFCI exceptions for dwelling units: a receptacle that is not readily accessible, and a single or duplex receptacle in dedicated space for a cord-and-plug appliance that is not easily moved in normal use. The model code's kitchen dishwasher GFCI branch-circuit rule is deleted.",
        "sourceUrl": "https://gilbertaz.gov/home/showpublisheddocument/35111/637472746862800000"
      },
      {
        "text": "Gilbert added a new NEC section requiring service entrance equipment rated 1,000 amperes or more to be high-potential tested when first installed, with a written record kept.",
        "sourceUrl": "https://gilbertaz.gov/home/showpublisheddocument/35111/637472746862800000"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Gilbert does not require a permit for a like-for-like water heater replacement when an Arizona licensed contractor installs it: a gas unit of equal or lower BTU/CFH rating or an electric unit of equal or lower amperage/voltage rating, not a tankless system, and listed and labeled by a nationally recognized third-party testing agency.",
        "sourceUrl": "https://gilbertaz.gov/home/showpublisheddocument/35111/637472746862800000"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work in Gilbert that is not on the town's exempt list takes a plumbing permit, charged as a flat individual trade permit.",
        "sourceUrl": "https://www.gilbertaz.gov/home/showpublisheddocument/5883/639184173264330000",
        "fee": "Individual Plumbing Permit - Residential $150; Commercial $300; Re-inspection Fee $150; inspection outside normal business hours $150 per hour (2 hour minimum)",
        "feeAsOf": "Revised 7/1/2026"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Gilbert takes an electrical permit, charged as a flat individual trade permit, and the town's own NEC amendments change what the inspector looks for on AFCI and GFCI protection.",
        "sourceUrl": "https://www.gilbertaz.gov/home/showpublisheddocument/5883/639184173264330000",
        "fee": "Individual Electrical Permit - Residential $150; Commercial $300; Re-inspection Fee $150",
        "feeAsOf": "Revised 7/1/2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "Gilbert's list of work exempt from a permit names water heaters, water softeners and window replacements but not garbage disposals, so replacing one falls under the town's residential plumbing permit.",
        "sourceUrl": "https://www.gilbertaz.gov/home/showpublisheddocument/5883/639184173264330000",
        "fee": "Individual Plumbing Permit - Residential $150",
        "feeAsOf": "Revised 7/1/2026"
      }
    }
  },
  "grand-rapids-mi": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Grand Rapids Development Center (Building Inspections Division)",
      "url": "https://www.grandrapidsmi.gov/grow-and-thrive/development-center/permits/"
    },
    "codeEdition": {
      "text": "Grand Rapids permits trade work under the Michigan state codes rather than a local building code: current Michigan adoptions are the 2021 Michigan Plumbing Code (2021 IPC), the 2023 Michigan Electrical Code (NFPA 70-2023), the 2021 Michigan Mechanical Code (2021 IMC) and the 2015 Michigan Residential Code (2015 IRC).",
      "sourceUrl": "https://up.codes/codes/michigan"
    },
    "permitPolicy": {
      "text": "A homeowner of a single-family home may apply for a plumbing, electrical or mechanical permit for their primary residence in person at the Development Center, signing a homeowner affidavit that they will do the work themselves. A property with two or more units must use a licensed contractor.",
      "sourceUrl": "https://www.grandrapidsmi.gov/grow-and-thrive/development-center/permits/residential-building-permits/residential-plumbing-permit/"
    },
    "registration": {
      "text": "A contractor holding a State of Michigan licence must also register that licence with the City of Grand Rapids before applying for permits; the city publishes no separate registration fee in its fee schedule. Contractors doing excavation or utility work must register separately with the Water Department.",
      "sourceUrl": "https://www.grandrapidsmi.gov/grow-and-thrive/development-center/register-contractor"
    },
    "codeItems": [
      {
        "text": "Since 30 January 2025 city inspectors work under a No Live Work policy: electrical work must be de-energised for inspection, and contractors are asked to be on site with the inspector.",
        "sourceUrl": "https://www.grandrapidsmi.gov/grow-and-thrive/development-center/permits/residential-building-permits/residential-electrical-permit/"
      },
      {
        "text": "The permit application itself warns that concealed work must be inspected before it is covered, so a water heater's gas or water piping cannot be closed in ahead of the inspection.",
        "sourceUrl": "https://www.grandrapidsmi.gov/media/iyhdobct/plumbing-permit-application.pdf"
      },
      {
        "text": "Grand Rapids itemises its plumbing permit: a backflow preventer, a backwater valve and gas piping (charged per opening) are separate line items on top of the fixture, so a gas water heater swap that adds piping or a backflow device costs more than the water heater line alone.",
        "sourceUrl": "https://www.grandrapidsmi.gov/media/4lzl0erl/planning-design-and-development-fee-schedule-fy2027.pdf"
      },
      {
        "text": "A residential water heater replacement appears on both the plumbing schedule and the mechanical schedule at $21.00, so gas-fired work can draw a mechanical permit alongside the plumbing permit.",
        "sourceUrl": "https://www.grandrapidsmi.gov/media/4lzl0erl/planning-design-and-development-fee-schedule-fy2027.pdf"
      },
      {
        "text": "New, repaired or replaced water service and sanitary sewer work is not handled on the ordinary plumbing permit: the application routes it to the Water System desk at the Development Center.",
        "sourceUrl": "https://www.grandrapidsmi.gov/media/iyhdobct/plumbing-permit-application.pdf"
      },
      {
        "text": "Rental inspections are run against the Grand Rapids Property Maintenance Code, which the city describes as the 2021 International Property Maintenance Code plus local amendments, with smoke detectors kept in City Code Chapter 169 (Home Safety).",
        "sourceUrl": "https://www.grandrapidsmi.gov/departments/code-compliance/rental-properties/rental-certification-program/"
      },
      {
        "text": "Starting work before the permit is issued carries a published administrative fee of $173.00, and only one inspection is included in the permit - each further inspection is $42.00.",
        "sourceUrl": "https://www.grandrapidsmi.gov/media/4lzl0erl/planning-design-and-development-fee-schedule-fy2027.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "A plumbing permit is required to replace a water heater in Grand Rapids: you pay a non-refundable application fee that includes one inspection, plus a per-item charge for the water heater itself.",
        "sourceUrl": "https://www.grandrapidsmi.gov/media/4lzl0erl/planning-design-and-development-fee-schedule-fy2027.pdf",
        "fee": "$52.00 application fee (includes 1 inspection) + $21.00 water heater",
        "feeAsOf": "effective July 1, 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal is a listed item on the Grand Rapids plumbing permit schedule, so the job takes a plumbing permit: the application fee plus the disposal line item.",
        "sourceUrl": "https://www.grandrapidsmi.gov/media/4lzl0erl/planning-design-and-development-fee-schedule-fy2027.pdf",
        "fee": "$52.00 application fee (includes 1 inspection) + $5.00 garbage disposal",
        "feeAsOf": "effective July 1, 2026"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work in Grand Rapids is permitted by the item: a non-refundable application fee covering one inspection, plus a small charge for each fixture such as a sink, toilet or bath/shower, with re-inspections billed separately.",
        "sourceUrl": "https://www.grandrapidsmi.gov/media/4lzl0erl/planning-design-and-development-fee-schedule-fy2027.pdf",
        "fee": "$52.00 application fee (includes 1 inspection); $5.00 per fixture (lavatory, kitchen sink, bath tub-shower, water closet); $42.00 each additional inspection",
        "feeAsOf": "effective July 1, 2026"
      },
      "electrician-service-call": {
        "requirement": "Electrical work takes a city electrical permit, priced as an application fee that includes one inspection plus per-item charges - a branch circuit, a service up to 200 amps or a fixed appliance each have their own line.",
        "sourceUrl": "https://www.grandrapidsmi.gov/media/4lzl0erl/planning-design-and-development-fee-schedule-fy2027.pdf",
        "fee": "$52.00 application fee (includes 1 inspection); $10.00 general branch circuit; $17.00 service up to 200 amp; $10.00 electric water heater; $42.00 each additional inspection",
        "feeAsOf": "effective July 1, 2026"
      },
      "smoke-detector-replacement": {
        "requirement": "Grand Rapids enforces smoke detectors through City Code Chapter 169 (Home Safety) and its Property Maintenance Code - the 2021 IPMC with local amendments - and checks them at rental certification inspections.",
        "sourceUrl": "https://www.grandrapidsmi.gov/departments/code-compliance/rental-properties/rental-certification-program/"
      }
    }
  },
  "greensboro-nc": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Greensboro Development Services (Engineering & Inspections)",
      "url": "https://greensboro-nc.gov/departments/engineering-inspections/developers-contractors/permits-fees-and-procedures"
    },
    "codeEdition": {
      "text": "North Carolina runs a single statewide code and Greensboro's inspectors enforce it. The 2018 North Carolina Codes took effect January 1, 2019 and are still the ones in force; they are the 2015 International Codes plus the 2018 NC Ad-Hoc Committee amendments adopted by the Building Code Council. Electrical work is judged against the 2020 North Carolina Electrical Code, which has been effective since November 1, 2021 and is the NEC plus North Carolina amendments. Accessibility follows ANSI A117.1-2009. A 2024 North Carolina State Building Code has been approved by the Rules Review Commission but the State Fire Marshal issued separate correspondence in March 2025 about its effective date.",
      "sourceUrl": "https://www.ncosfm.gov/codes/codes-current-and-past"
    },
    "registration": {
      "text": "Greensboro requires a city contractor bond on top of the North Carolina state license. Any contractor doing electrical, plumbing, heating, air conditioning, mechanical, refrigeration, HVAC or concrete work who obtains a permit in the city has to file the city's Contractor Bond form in the amount of $2,000.00. The city publishes separate bond forms for demolition, grading and house moving. Greensboro also issues contractors a city contractor code number and PIN, which is what lets them request inspections through the automated phone system.",
      "sourceUrl": "https://greensboro-nc.gov/home/showdocument?id=24693"
    },
    "codeItems": [
      {
        "text": "Greensboro's inspectors treat a second ground rod as the default on a new or changed service. The city's own answer is that in Guilford County you cannot reach a resistance to ground of 25 ohms or less without adding another rod, so two rods are required wherever the site has no underground metal water pipe in contact with earth for at least 10 feet, no effectively grounded building steel, no concrete-encased electrode and no ground ring. It points to NEC 250-50, 250-52 and 250-56.",
        "sourceUrl": "https://greensboro-nc.gov/departments/engineering-inspections/residents-home-owners/residential-construction/building-permits-faqs"
      },
      {
        "text": "On a Greensboro service change the disconnecting means has to be readily accessible outside the building or at the nearest point where the service conductors come in, per NEC 230-70(a). The city follows an NC Department of Insurance letter allowing unfused conductors to be extended inside only twice the length of the service panel, and no further than five feet, whichever is shorter. The exception in 230-6 is the way around it: a raceway run under a slab, or encased in at least two inches of concrete or brick, counts as outside the building and may run more than five feet in.",
        "sourceUrl": "https://greensboro-nc.gov/departments/engineering-inspections/residents-home-owners/residential-construction/building-permits-faqs"
      },
      {
        "text": "Greensboro accepts unfaced fiberglass insulation to seal penetrations in non-fire-rated walls and floors, which matters on a water heater or panel job where piping and cable pass through framing.",
        "sourceUrl": "https://greensboro-nc.gov/departments/engineering-inspections/residents-home-owners/residential-construction/building-permits-faqs"
      },
      {
        "text": "Greensboro wants electrical, plumbing and mechanical work on separate permits, one for each trade, and the inspector signs the permit card in the field. A contractor needs that signature before requesting a rough or final inspection, and inspection requests go through the city's automated APRIL phone system by 8 p.m. on the business day before, using the permit number and the contractor's PIN.",
        "sourceUrl": "https://greensboro-nc.gov/departments/engineering-inspections/residents-home-owners/residential-construction/building-permits-faqs"
      },
      {
        "text": "Greensboro prices failed and repeat inspections on the plumbing schedule: $45.00 for the first follow-up extra inspection, and $45.00 each beyond three inspections on a crawl space house or four on a slab house.",
        "sourceUrl": "https://www.greensboro-nc.gov/home/showpublisheddocument/5109/638935425664700000"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Greensboro requires a plumbing permit to install a water heater or any fixture or appliance that connects to the drainage, waste and vent, water service or water distribution system, and gas work on the replacement is a separately priced item.",
        "sourceUrl": "https://www.greensboro-nc.gov/home/showpublisheddocument/5109/638935425664700000",
        "fee": "$85.00 Minimum Permit/Inspection Fee; Water Heater, all kinds $7.00 each; Gas Connection for Water Heater Replacement $10.00 each",
        "feeAsOf": "Plumbing Permit Fee Schedule revised 7/16/24"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal connects to the drainage system, so Greensboro treats it as plumbing permit work, and the disposal is a named line item on the city's plumbing fee schedule.",
        "sourceUrl": "https://www.greensboro-nc.gov/home/showpublisheddocument/5109/638935425664700000",
        "fee": "$85.00 Minimum Permit/Inspection Fee; Garbage Disposal $7.00 each",
        "feeAsOf": "Plumbing Permit Fee Schedule revised 7/16/24"
      },
      "plumber-service-call": {
        "requirement": "Greensboro requires a plumbing permit for changes to the drainage, waste and vent system, for installing or replacing fixtures, for installing or replacing sewer and water service lines, and for special equipment such as water softeners and grease traps; the fee is a per-item charge against a published minimum.",
        "sourceUrl": "https://www.greensboro-nc.gov/home/showpublisheddocument/5109/638935425664700000",
        "fee": "$85.00 Minimum Permit/Inspection Fee; $7.00 each for bathtub, floor drain, lavatory, shower, sink, water closet, sewer, water line in an existing house, water softener unit or miscellaneous fixture; Backflow Preventer $15.00 each; Extra Inspection Fee, first follow-up $45.00",
        "feeAsOf": "Plumbing Permit Fee Schedule revised 7/16/24"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Greensboro takes its own electrical permit, and the city prices it per item — the service by amperage, then each outlet, appliance and piece of equipment — against a published minimum permit fee.",
        "sourceUrl": "https://www.greensboro-nc.gov/home/showpublisheddocument/5111/638935423722570000",
        "fee": "$85.00 minimum permit fee; service 100 A $74.00, 150 A $90.00, 200 A $99.00, 400 A $131.00; receptacles, switches and other outlets $0.30 each; water heater $10.00; appliances such as a range, oven, cooktop, clothes dryer, dishwasher, furnace or disposal/trash compactor $10.00 each; Extra Inspection Fee, first follow-up $45.00",
        "feeAsOf": "Electrical Permit Fee Schedule revised 7/16/24"
      },
      "smoke-detector-replacement": {
        "requirement": "Greensboro prices smoke detectors as fire alarm devices on its electrical permit fee schedule, so hard-wired alarm work done under an electrical permit is charged per device against the city's minimum permit fee.",
        "sourceUrl": "https://www.greensboro-nc.gov/home/showpublisheddocument/5111/638935423722570000",
        "fee": "Fire Alarm Devices, smoke detectors $4.00 each; $85.00 minimum permit fee",
        "feeAsOf": "Electrical Permit Fee Schedule revised 7/16/24"
      }
    }
  },
  "hartford-ct": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Hartford Department of Development Services, Division of Licenses and Inspections",
      "url": "https://www.hartfordct.gov/Government/Departments/DDS/DDS-Divisions/Licenses-Inspections-Housing-Code-Enforcement"
    },
    "codeEdition": {
      "text": "Hartford enforces the statewide 2022 Connecticut State Building Code, which is built on the 2021 I-Codes with the ICC A117.1-2017 accessibility standard and applies to permit applications filed on or after October 1, 2022. Its electrical provisions come from the 2020 NFPA 70 National Electrical Code as amended by the state, not a later NEC edition.",
      "sourceUrl": "https://portal.ct.gov/das/office-of-state-building-inspector/connecticut-state-building-code/regulations"
    },
    "permitPolicy": {
      "text": "The state code Hartford enforces lets the owner or the owner's authorized agent apply for the permit, so a homeowner is not shut out. If the agent is a contractor, the application must carry the contractor's name, business address and Connecticut Department of Consumer Protection home-improvement registration number, and the building official cannot issue the permit until that certificate of registration is produced.",
      "sourceUrl": "https://portal.ct.gov/das/-/media/das-beta/pdf/office-of-state-building-inspector/2022-csbc-final.pdf"
    },
    "registration": {
      "text": "Trade licensing in Hartford is handled at state level by the Department of Consumer Protection rather than by a separate city registration: the Licenses and Inspections page points applicants to the state's professional licence lookup, and the state code blocks a permit to a contractor who should be registered under the home-improvement chapter until the registration number appears on the application. Hartford publishes no city trade-registration or bond amount.",
      "sourceUrl": "https://www.hartfordct.gov/Government/Departments/DDS/DDS-Divisions/Licenses-Inspections-Housing-Code-Enforcement"
    },
    "codeItems": [
      {
        "text": "Connecticut rewrites the relief-valve discharge rule an inspector checks on a water heater: the discharge pipe has to stop no more than 6 inches above, and at least two pipe diameters above, the floor or the flood-level rim of the waste receptor, and the end must be cut at a 45-degree angle.",
        "sourceUrl": "https://portal.ct.gov/das/-/media/das-beta/pdf/office-of-state-building-inspector/2022-csbc-final.pdf"
      },
      {
        "text": "Connecticut amends the national outdoor GFCI rule so that every outdoor outlet on a single-phase circuit of 150 volts or less and 50 amperes or less needs GFCI protection, but it writes in exceptions for lighting outlets and for mini-split and other power-conversion HVAC equipment that the unamended code does not have.",
        "sourceUrl": "https://portal.ct.gov/das/-/media/das-beta/pdf/office-of-state-building-inspector/2022-csbc-final.pdf"
      },
      {
        "text": "On a new one- or two-family dwelling Connecticut requires all service conductors to land in an emergency disconnect in a readily accessible outdoor location, grouped if there is more than one, with the state's own list of acceptable disconnect types and markings.",
        "sourceUrl": "https://portal.ct.gov/das/-/media/das-beta/pdf/office-of-state-building-inspector/2022-csbc-final.pdf"
      },
      {
        "text": "Smoke alarms in Connecticut may be tied together by listed wireless alarms instead of being physically interconnected, and existing areas need no interconnection at all where the work does not strip interior wall or ceiling finishes back to the structure.",
        "sourceUrl": "https://portal.ct.gov/das/-/media/das-beta/pdf/office-of-state-building-inspector/2022-csbc-final.pdf"
      },
      {
        "text": "Where a Hartford house stays occupied during interior alterations or an addition under a building permit, Connecticut requires temporary battery-operated smoke alarms near the work for the whole of construction; a combined smoke and carbon monoxide alarm satisfies it.",
        "sourceUrl": "https://portal.ct.gov/das/-/media/das-beta/pdf/office-of-state-building-inspector/2022-csbc-final.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "A permit is required in Hartford to replace a water heater, because the state code Hartford enforces covers installing, replacing or repairing any plumbing, gas or mechanical system, and the city charges one valuation-based permit fee for building, electrical and plumbing work alike.",
        "sourceUrl": "https://www.hartfordct.gov/files/assets/public/v/2/development-services/dds-general/general-documents/fee-schedule.pdf",
        "fee": "$50.26 for the 1st $1,000 of construction costs; $30.26 for each $1,000 thereafter",
        "feeAsOf": "Effective August 6, 2018"
      },
      "plumber-service-call": {
        "requirement": "Most plumbing work in Hartford needs a permit, but the state code exempts stopping a leak, clearing a stoppage and taking out and refitting a toilet where no valves, pipes or fixtures are replaced or rearranged; replacing a defective concealed trap, drain, water, waste or vent pipe counts as new work and does need a permit and an inspection.",
        "sourceUrl": "https://www.hartfordct.gov/files/assets/public/v/2/development-services/dds-general/general-documents/fee-schedule.pdf",
        "fee": "$50.26 for the 1st $1,000 of construction costs; $30.26 for each $1,000 thereafter",
        "feeAsOf": "Effective August 6, 2018"
      },
      "electrician-service-call": {
        "requirement": "An electrical permit is required in Hartford for work on an electrical system, with a short state list of jobs that are exempt: minor repairs such as changing lamps and fuses, refitting receptacle plugs, swapping a branch-circuit breaker of the same rating in the same place, and low-voltage work under 25 volts and 50 watts.",
        "sourceUrl": "https://www.hartfordct.gov/files/assets/public/v/2/development-services/dds-general/general-documents/fee-schedule.pdf",
        "fee": "$50.26 for the 1st $1,000 of construction costs; $30.26 for each $1,000 thereafter",
        "feeAsOf": "Effective August 6, 2018"
      },
      "garbage-disposal-replacement": {
        "requirement": "Replacing a garbage disposal in Hartford falls under the permit requirement for altering or replacing a plumbing system, since the only plumbing jobs the state code exempts are leak repairs, clearing stoppages and refitting a toilet; the same valuation-based city fee applies.",
        "sourceUrl": "https://www.hartfordct.gov/files/assets/public/v/2/development-services/dds-general/general-documents/fee-schedule.pdf",
        "fee": "$50.26 for the 1st $1,000 of construction costs; $30.26 for each $1,000 thereafter",
        "feeAsOf": "Effective August 6, 2018"
      },
      "smoke-detector-replacement": {
        "requirement": "Hartford publishes no permit or fee for swapping a smoke alarm on its own. Under the state code, a permit for alterations, repairs or an addition normally forces the whole dwelling up to new-house alarm coverage, but Connecticut writes in an exception for plumbing, mechanical and electrical installations, alterations and repairs, so a water-heater or wiring permit does not drag in a whole-house alarm retrofit.",
        "sourceUrl": "https://portal.ct.gov/das/-/media/das-beta/pdf/office-of-state-building-inspector/2022-csbc-final.pdf"
      }
    }
  },
  "henderson-nv": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Henderson Department of Building and Fire Safety (permits issued through the Development Services Center)",
      "url": "https://www.cityofhenderson.com/government/departments/building-and-fire-safety/building-codes"
    },
    "codeEdition": {
      "text": "Henderson's building codes page publishes local amendments to the 2024 International Building, Residential, Existing Building, Energy Conservation, Fire and Swimming Pool and Spa Codes, the 2024 Uniform Plumbing Code, the 2024 Uniform Mechanical Code and the 2023 National Electrical Code, and states that the 2024 set applies to submittals received on or after January 2, 2026. The previous set, based on the 2021 I-codes and the 2018 Uniform and residential codes, applies to submittals received between March 23, 2023 and January 1, 2026.",
      "sourceUrl": "https://www.cityofhenderson.com/government/departments/building-and-fire-safety/building-codes"
    },
    "permitPolicy": {
      "text": "Nevada contractor licensing law exempts an owner of property who is building or improving a residential structure for their own occupancy and not for sale or lease, but the owner has to apply to the Nevada State Contractors Board for that exemption first. The same statute gives no general pass for small repairs where a building permit is required or where the work is of a type done by a plumbing, electrical, heating or air-conditioning contractor.",
      "sourceUrl": "https://www.leg.state.nv.us/NRS/NRS-624.html"
    },
    "registration": {
      "text": "A contractor working in Henderson needs a City of Henderson business license; the city publishes a contractor-specific business license checklist listing the forms required, including a business registration form and a zoning compliance check. No separate trade registration or bond amount is published on that checklist.",
      "sourceUrl": "https://cityofhenderson.com/home/showpublisheddocument/1788/638675125235430000"
    },
    "codeItems": [
      {
        "text": "The Southern Nevada amendments to the 2024 Uniform Plumbing Code that Henderson publishes require a drain pan under a water heater in an attic, in or on an attic or floor-ceiling assembly, or anywhere a leak could cause damage. The pan has to be at least 1-1/2 inches deep with a drain of at least 3/4 inch, and discharging a relief valve into that pan is prohibited. A tankless heater in a readily accessible spot and a point-of-use heater are excepted.",
        "sourceUrl": "https://www.cityofhenderson.com/home/showpublisheddocument/16001/638833439360300000"
      },
      {
        "text": "Under the same plumbing amendments, a water heater's temperature and pressure relief drain has to terminate outside the building unless the manufacturer's listing rules that out; where it cannot, it may discharge through an air gap to a clothes washer port, floor sink, mop sink or an equipped floor drain.",
        "sourceUrl": "https://www.cityofhenderson.com/home/showpublisheddocument/16001/638833439360300000"
      },
      {
        "text": "A backflow prevention assembly has to be tested by a certified tester when it is installed, repaired or relocated and at least once a year after that, and the tester has to leave a copy of the certification for each device on site.",
        "sourceUrl": "https://www.cityofhenderson.com/home/showpublisheddocument/16001/638833439360300000"
      },
      {
        "text": "The Southern Nevada amendments to the 2023 National Electrical Code that Henderson publishes cap a dwelling's 15-amp lighting circuits and 20-amp circuits at twelve outlets each, and require separate 20-amp circuits for a dishwasher, a trash compactor and a microwave oven. Outlets serving smoke detectors are not counted toward the twelve-outlet limit.",
        "sourceUrl": "https://www.cityofhenderson.com/home/showpublisheddocument/15983/638833433919100000"
      },
      {
        "text": "The Southern Nevada amendments to the 2024 International Residential Code also rework combustion air and alarm placement: a fireplace or gas appliance in a sleeping room or adjacent bathroom needs a permanent unobstructed outside air supply to the firebox, and carbon monoxide alarm placement is amended for fuel-burning appliances in bedrooms.",
        "sourceUrl": "https://www.cityofhenderson.com/home/showpublisheddocument/15993/638833443209500000"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Henderson takes a plumbing permit, charged as a single flat line in the city's building mechanical, plumbing and electrical fee table.",
        "sourceUrl": "https://www.cityofhenderson.com/home/showpublisheddocument/16408/638948459361800000",
        "fee": "Water Heater: $81"
      },
      "plumber-service-call": {
        "requirement": "Repair or alteration of drainage or vent piping in Henderson takes a plumbing permit charged per fixture.",
        "sourceUrl": "https://www.cityofhenderson.com/home/showpublisheddocument/16408/638948459361800000",
        "fee": "Miscellaneous repair, including repair or alteration of drainage or vent piping, each fixture: $211"
      },
      "electrician-service-call": {
        "requirement": "Small electrical work in Henderson takes an electrical permit priced per device, and replacing a whole service has its own line in the fee table.",
        "sourceUrl": "https://www.cityofhenderson.com/home/showpublisheddocument/16408/638948459361800000",
        "fee": "Each general lighting outlet, receptacle outlet and switch (multi-outlet assemblies, each 5' or portion thereof): $152; each service regardless of ampere rating, including first meter socket: $190"
      }
    }
  },
  "honolulu-hi": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City and County of Honolulu Department of Planning and Permitting (DPP)",
      "url": "https://www.honolulu.gov/dpp/permitting/building-permits-home/"
    },
    "codeEdition": {
      "text": "DPP publishes the editions in force by Revised Ordinances of Honolulu chapter. Building, residential and existing building work is the 2018 IBC, 2018 IRC and 2018 IEBC under ROH Chapter 16, with state and city amendments effective 08/09/24 and City Addendum #1 effective 03/11/25. The housing code is ROH 16A with a city addendum effective 01/03/25, and the energy code is the 2018 IECC under ROH 16B effective 12/15/22. The two that matter most for trade work are in force as interim codes rather than locally amended ones: the electrical code under ROH Chapter 17 is the 2020 NEC, interim, effective 03/15/24, and the plumbing code under ROH Chapter 19 is the 2021 Uniform Plumbing Code, interim under HRS 107-28, effective 03/01/24. The fire code is the 2021 NFPA 1 under ROH Chapter 20 effective 01/03/25.",
      "sourceUrl": "https://www.honolulu.gov/dpp/permitting/building-permits-home/"
    },
    "permitPolicy": {
      "text": "Honolulu does not issue separate trade permits. Under ROH 18-3.1(a) a BUILDING permit is what covers any electrical work or plumbing work that is not exempted, as well as erecting, altering or repairing a building, and the single application is routed through residential, building, mechanical, electrical and fire plan reviews. Small jobs escape a permit only when a licensed contractor does them: ROH 18-3.1(b) exempts electrical repair work performed by a licensed electrical contractor that does not involve service entrance equipment and does not exceed $2,500 in any 12-month period, and plumbing repair work performed by a licensed plumbing contractor that does not exceed $2,500 in any 12-month period. Maintenance repairs using the same or similar materials are exempt up to $10,000 of valuation in any 12-month period only if they do not affect any electrical or plumbing installation. Paying for a building permit requires a Contractor's Statement signed and filled out by all required contractors for their phases.",
      "sourceUrl": "https://www.honolulu.gov/dpp/permitting/building-permits-home/building-permit-requriements/"
    },
    "registration": {
      "text": "Hawaii licenses contractors by trade classification through the Contractors License Board under HRS Chapter 444, and the two that matter here are C-13 Electrical contractor and C-37 Plumbing contractor (with subclassifications such as C-37a sewer and drain line and C-37b irrigation and lawn sprinkler systems). A licensee has to carry at least $100,000 per person and $300,000 per occurrence bodily injury liability and $50,000 per occurrence property damage coverage, plus any surety bond the board imposes; the board may waive the bond only after the licensee has held it for at least a year. The licensing status matters directly in Honolulu, because the small-job permit exemptions in ROH 18-3.1(b) apply only where a licensed electrical or plumbing contractor does the work.",
      "sourceUrl": "https://files.hawaii.gov/dcca/pvl/pvl/har/har_77-c.pdf"
    },
    "codeItems": [
      {
        "text": "Honolulu is still on the 2020 National Electrical Code, not the 2023 edition, and it is in force as an interim code rather than a locally amended one. The 2020 NEC became Honolulu's electrical code on 03/15/24 under the state mechanism in HRS 107-28, which applies the state-adopted edition automatically when a county does not adopt it in time. Hawaii's own amendments to the 2020 NEC are minimal, amounting to retitling it the Electrical Code of the State of Hawaii.",
        "sourceUrl": "https://ags.hawaii.gov/wp-content/uploads/2021/12/StateElectricalCode_03152022.pdf"
      },
      {
        "text": "Do not read water heater or gas rules out of the IRC in Honolulu. Hawaii's State Residential Code deletes IRC Part VII Plumbing (Chapters 25 through 33) in its entirety and deletes Chapter 24 Fuel Gas in its entirety, pointing instead to the adopted State Plumbing Code, and deletes IRC Chapters 35 through 43 Electrical in favour of the State Electrical Code. So a Honolulu water heater is judged against the Uniform Plumbing Code, not the IRC.",
        "sourceUrl": "https://ags.hawaii.gov/wp-content/uploads/2021/09/2018StateResidentialCode_20201117rev1.pdf"
      },
      {
        "text": "Hawaii assigns seismic design categories by island rather than from the national maps: for Site Class D the State Residential Code puts Oahu, which includes all of Honolulu, in Seismic Design Category D0, while Kauai is B, Maui D1 and parts of Hawaii County D2 or E. That makes Honolulu a seismic jurisdiction for anchoring purposes, something a mainland reader would not expect of Hawaii.",
        "sourceUrl": "https://ags.hawaii.gov/wp-content/uploads/2021/09/2018StateResidentialCode_20201117rev1.pdf"
      },
      {
        "text": "Honolulu requires a solar water heater on every new single-family dwelling under Act 204, and DPP wants the Materials and Methods (MM) number for the solar hot water panel shown on the plans. A variance is possible, obtained through the State Energy Office, and the variance has to be submitted with the plans. The requirement bites on new houses rather than on replacing a heater in an existing one, but it shapes what DPP expects to see on a plan set.",
        "sourceUrl": "https://www.honolulu.gov/dpp/permitting/building-permits-home/bp-faq/"
      },
      {
        "text": "Honolulu caps electrical metering per home: no more than one electrical watt-hour meter may be installed per legal dwelling unit. That bars the extra-meter arrangements homeowners sometimes propose when adding a unit or splitting a service, and it is a city rule rather than anything in the NEC.",
        "sourceUrl": "https://www.honolulu.gov/dpp/permitting/building-permits-home/bp-faq/"
      }
    ],
    "byGuide": {
      "plumber-service-call": {
        "requirement": "In Honolulu a plumbing job needs a building permit unless it falls inside the city's narrow exemption: plumbing repair work done by a licensed plumbing contractor and not exceeding $2,500 in any 12-month period. Past that threshold, or if you do the work yourself, the permit fee is based on the fair market value of labour and materials under the city's valuation table, with a flat minimum for very small jobs, and a plan review fee of 20 percent of the permit fee is added where plans are required.",
        "sourceUrl": "https://www.honolulu.gov/dpp/permitting/building-permits-home/bp-fee-calc/",
        "fee": "Valuation-based under ROH 18 Table 18-A, as applied by the city's own fee calculator: $20 for work valued at $500 or less; $8 plus $2.50 per $100 of value from $500.01 to $1,000; $12 plus $2.20 per $100 from $1,000.01 to $20,000; $82 plus $18 per $1,000 from $20,000.01 to $50,000; $286 plus $14 per $1,000 from $50,000.01 to $100,000; $700 plus $10 per $1,000 from $100,000.01 to $500,000. Plan Review Fee is 20% of the building permit fee, capped at $25,000, where plans are required.",
        "feeAsOf": "Fee calculator page last modified 2024-10-22"
      },
      "electrician-service-call": {
        "requirement": "Honolulu exempts electrical repair work from a permit only when a licensed electrical contractor does it, the work does not touch service entrance equipment, and it stays under $2,500 in any 12-month period. Anything involving the service entrance always needs a permit, and so does work above that dollar limit or work a homeowner does themselves. The fee is set by the value of the job on the city's valuation table.",
        "sourceUrl": "https://www.honolulu.gov/dpp/permitting/building-permits-home/bp-fee-calc/",
        "fee": "Valuation-based under ROH 18 Table 18-A, as applied by the city's own fee calculator: $20 for work valued at $500 or less; $8 plus $2.50 per $100 of value from $500.01 to $1,000; $12 plus $2.20 per $100 from $1,000.01 to $20,000; $82 plus $18 per $1,000 from $20,000.01 to $50,000. Plan Review Fee is 20% of the building permit fee, capped at $25,000, where plans are required.",
        "feeAsOf": "Fee calculator page last modified 2024-10-22"
      },
      "water-heater-replacement": {
        "requirement": "A water heater swap in Honolulu is plumbing work under a building permit, judged against the 2021 Uniform Plumbing Code that took effect in the city on 03/01/24 rather than against the IRC, whose plumbing and fuel gas chapters Hawaii deletes outright. Whether you need the permit at all turns on the city's $2,500-per-12-months exemption for plumbing repair work done by a licensed plumbing contractor; otherwise the fee follows the valuation table. If the house is brand new rather than being retrofitted, a solar water heater is required under Act 204.",
        "sourceUrl": "https://www.honolulu.gov/dpp/permitting/building-permits-home/building-permit-requriements/"
      },
      "garbage-disposal-replacement": {
        "requirement": "Honolulu publishes no permit line specific to a garbage disposal. It falls under the general rule that a building permit covers any plumbing work that is not exempted, so the deciding question is the city's exemption for plumbing repair work done by a licensed plumbing contractor under $2,500 in any 12-month period. Note that the broader $10,000 maintenance-repair exemption does not help here, because it applies only where the work does not affect any plumbing installation.",
        "sourceUrl": "https://www.honolulu.gov/dpp/permitting/building-permits-home/building-permit-requriements/"
      },
      "smoke-detector-replacement": {
        "requirement": "Honolulu has no smoke-alarm permit of its own, but it has no blanket exemption either: a building permit covers any electrical work that is not exempted, and the exemptions that could apply are electrical repair work by a licensed electrical contractor under $2,500 in any 12-month period, or maintenance repairs under $10,000 of valuation that do not affect any electrical installation. Hardwiring an alarm affects an electrical installation, so the licensed-contractor exemption is the relevant one.",
        "sourceUrl": "https://www.honolulu.gov/dpp/permitting/building-permits-home/building-permit-requriements/"
      }
    }
  },
  "houston-tx": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Houston (City-Wide Fee Schedule, Building Code Enforcement fees)",
      "url": "https://cohweb.houstontx.gov/fin_feeschedule/default.aspx"
    },
    "codeEdition": {
      "text": "Houston enforces its own separate Building, Residential, Plumbing, Mechanical and Electrical Codes rather than one combined code. The city's fee schedule cites each by section: permit fees sit in Building Code Chapter 118, the Residential Code uses IRC-style numbering such as R108.5 and R115.4, and the Electrical and Plumbing Codes carry their own numbering, for example Electrical Code Section 301.4 and Plumbing Code Section 103.3.1.",
      "sourceUrl": "https://cohweb.houstontx.gov/fin_feeschedule/default.aspx"
    },
    "registration": {
      "text": "Houston licenses some trades at city level on top of the state credential. A contractor laying public or private sanitary or storm sewers and drains needs a City of Houston sewer and drain contractor licence, published at $33.56 under City Code Chapter 47 and Plumbing Code Sections 104.3 and 416. An irrigator pays a city registration fee of $32.52 under Plumbing Code Section 103.3.1. Both figures are the rates in force from January 1, 2026.",
      "sourceUrl": "https://cohweb.houstontx.gov/fin_feeschedule/default.aspx"
    },
    "codeItems": [
      {
        "text": "Houston treats a garbage disposal as electrical work, not just plumbing. The city charges a per-unit electrical permit fee for a disposal under Building Code Section 118.6.2, in the same list as a dishwasher, oven, clothes dryer and window air-conditioner receptacle, so the appliance circuit is what gets inspected.",
        "sourceUrl": "https://cohweb.houstontx.gov/fin_feeschedule/default.aspx"
      },
      {
        "text": "Houston counts gas work by openings rather than by appliance. A gas permit and inspection covers up to four openings for one base charge under Building Code Section 118.5.1, with a smaller charge for each opening past the first four on the same permit, and the city lists a separate temporary gas inspection fee.",
        "sourceUrl": "https://cohweb.houstontx.gov/fin_feeschedule/default.aspx"
      },
      {
        "text": "Houston offers an annual electrical maintenance permit, charged per premises under Electrical Code Section 301.4, which lets a property cover routine electrical maintenance for the year instead of pulling a permit for each small job. The published rate from January 1, 2026 is $272.62 per premises.",
        "sourceUrl": "https://cohweb.houstontx.gov/fin_feeschedule/default.aspx"
      },
      {
        "text": "Houston's plumbing minimum permit fee is set higher than the minimum for every other permit type, so the floor on a plumbing job in Houston is above the floor on an electrical or mechanical one.",
        "sourceUrl": "https://cohweb.houstontx.gov/fin_feeschedule/default.aspx"
      },
      {
        "text": "The Houston Fire Department tells homeowners to put an alarm in every bedroom, in the hallway connecting the rooms, and in the living room, den and other living areas, with at least one on each floor. It gives mounting distances too: 4 to 12 inches below the ceiling on a wall, at least 4 inches off any wall on a ceiling, and 3 feet down from the peak on a high-pitched ceiling.",
        "sourceUrl": "https://www.houstontx.gov/fire/safetyinfo/smokealarms.html"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Houston is permitted plumbing work, and because gas work is charged by the number of gas openings the permit covers the gas connection as well as the fixture.",
        "sourceUrl": "https://cohweb.houstontx.gov/fin_feeschedule/default.aspx",
        "fee": "Plumbing Minimum Permit Fee $97.56; Gas permit and Inspection Base Charge for up to 4 openings $45.53, plus $7.80 for each additional opening after the first 4 on the same permit",
        "feeAsOf": "January 1, 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "Houston charges a per-unit electrical permit fee for a garbage disposal and a per-fixture plumbing fee for the sink connection, so a disposal swap can touch both trades.",
        "sourceUrl": "https://cohweb.houstontx.gov/fin_feeschedule/default.aspx",
        "fee": "Garbage Disposal - Fee per Unit $4.70 (Building Code Sec. 118.6.2); Plumbing Fixture Base Charge for 1 to 3 units $34.24, plus $11.41 for each additional fixture over 3 on the same permit; Plumbing Minimum Permit Fee $97.56",
        "feeAsOf": "January 1, 2026"
      },
      "plumber-service-call": {
        "requirement": "Houston sets a minimum plumbing permit fee that applies however small the job is, charges per plumbing fixture above that, and bills a separate fee when an inspector has to come back.",
        "sourceUrl": "https://cohweb.houstontx.gov/fin_feeschedule/default.aspx",
        "fee": "Plumbing Minimum Permit Fee $97.56; Plumbing Fixture Base Charge for 1 to 3 units $34.24, plus $11.41 for each additional fixture over 3; Re-Inspection Fee $94.00; Sewer Connection, each $53.71",
        "feeAsOf": "January 1, 2026"
      },
      "electrician-service-call": {
        "requirement": "Houston charges an electrical permit by the outlet, fixture and panel, but a minimum permit fee applies to the whole permit, so a one-outlet job still hits the floor; a return inspection is billed separately.",
        "sourceUrl": "https://cohweb.houstontx.gov/fin_feeschedule/default.aspx",
        "fee": "Electrical permit: Minimum Permit Fee $91.06; Electrical Outlet - Fee per Outlet $1.34; Electrical Lighting or appliance - Fee per Fixture $1.34; Electrical Panel with 8 or more circuits each $9.39; Electrical Meter Loop and Service up to 50kW $94.00; Re-Inspection Fee $94.00",
        "feeAsOf": "January 1, 2026"
      },
      "smoke-detector-replacement": {
        "requirement": "The Houston Fire Department asks for an alarm in every bedroom, in the hallway linking them and in each living area, with at least one per floor, and gives the mounting distances off the ceiling and walls.",
        "sourceUrl": "https://www.houstontx.gov/fire/safetyinfo/smokealarms.html"
      }
    }
  },
  "huntsville-al": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Huntsville Urban Development Department, Inspection Division",
      "url": "https://www.huntsvilleal.gov/development/building-construction/building-license-permits/"
    },
    "codeEdition": {
      "text": "Huntsville's Inspection Department lists the codes it enforces as the 2018 International Building, Mechanical, Plumbing, Fuel Gas, Swimming Pool and Spa, Existing Building and Residential Codes, the 2017 NFPA 70 National Electrical Code, and the 2015 International Energy Conservation Code as the Alabama Energy Code, plus amendments to those technical codes. The Fire and Rescue Department separately enforces the 2021 International Fire Code including Appendices C, D (less section D107) and E.",
      "sourceUrl": "https://www.huntsvilleal.gov/development/building-construction/inspections/requirements/"
    },
    "permitPolicy": {
      "text": "In Huntsville the trade permit and the building permit are pulled by different people. Plumbing, gas, mechanical and electrical contractors must be certified by the matching Alabama state board and must purchase the permits for their own trade, and specialty subcontractors cannot buy building permits at all. A homeowner can buy the building permit for their own house if they intend to live in it for at least a year after completion and all permits close, and must hand over a copy of the recorded deed; the city states in its own guidance that acting as your own contractor is not recommended.",
      "sourceUrl": "https://www.huntsvilleal.gov/development/building-construction/building-license-permits/license-classification/"
    },
    "registration": {
      "text": "Every contractor and subcontractor working inside the city limits needs a City of Huntsville privilege (general business) licence on top of the state certification, under Ordinance 93-725, plus a contractor's liability insurance certificate, and Zoning Administration must clear the licence for zoning compliance. The city's licence fee schedule prices electrical, plumbing, gas fitting, and heating and air conditioning contractors identically on annual gross receipts: $75.00 up to $24,999, $150.00 from $25,000 to $99,999, $250.00 from $100,000 to $999,999, $350.00 from $1,000,000 to $4,999,999 and $500.00 from $5,000,000 up. A general contractor must also show the inspector a full list of subcontractors with their licence numbers, and may not let a subcontractor start before that subcontractor shows a current city privilege licence.",
      "sourceUrl": "https://www.huntsvilleal.gov/wp-content/uploads/2024/12/2025_City-of-Huntsville-License-Fee-Schedule.pdf"
    },
    "codeItems": [
      {
        "text": "Huntsville puts a flood step in front of nearly every permit: all building permits and most standalone trade permits require a completed Flood Development Permit to be issued before any other permit is approved, and a job in a FEMA Special Flood Hazard Area cannot be filed online at all, it must be submitted in person.",
        "sourceUrl": "https://www.huntsvilleal.gov/development/building-construction/building-license-permits/"
      },
      {
        "text": "Huntsville still works from the 2017 National Electrical Code, not a 2020 or later edition, so the AFCI and GFCI scope an inspector applies here is the 2017 NEC's, and residential energy work is judged against the 2015 IECC as the Alabama Energy Code.",
        "sourceUrl": "https://www.huntsvilleal.gov/development/building-construction/inspections/requirements/"
      },
      {
        "text": "At electrical rough-in Huntsville wants wires pulled and stapled with no insulation installed yet, and the electrical final is not passed until every fixture, receptacle and appliance is in, including the electrical side of the HVAC system.",
        "sourceUrl": "https://www.huntsvilleal.gov/development/building-construction/inspections/requirements/"
      },
      {
        "text": "Who calls the inspection matters in Huntsville. The plumbing 30-day temporary has to be requested by the plumber, and gas and mechanical temporary finals have to be requested by the HVAC and gas permit holders, not by the general contractor.",
        "sourceUrl": "https://www.huntsvilleal.gov/development/building-construction/inspections/requirements/"
      },
      {
        "text": "Two administrative holds stand between finished work and a Certificate of Occupancy in Huntsville: the Public Works Department's Engineering Hold and the Inspection Division's Sub-Contractors List Hold must both be released first.",
        "sourceUrl": "https://www.huntsvilleal.gov/development/building-construction/inspections/requirements/"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "A water heater swap in Huntsville is permitted as plumbing, gas or mechanical work, and the city requires that permit to be bought by the appropriately licensed trade contractor rather than by the homeowner or the general contractor; most trade permits can be taken out through the city's online trade permitting system.",
        "sourceUrl": "https://www.huntsvilleal.gov/development/building-construction/building-license-permits/permit-costs/"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work in Huntsville needs its own permit, purchased by a plumbing contractor certified by the Alabama state board and holding a current City of Huntsville privilege licence; a specialty subcontractor must work under a licensed contractor or the property owner acting as contractor.",
        "sourceUrl": "https://www.huntsvilleal.gov/development/building-construction/building-license-permits/license-classification/"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Huntsville needs an electrical permit pulled by a state-certified electrical contractor who also holds a City of Huntsville privilege licence, and the work is inspected against the 2017 National Electrical Code that the city's Inspection Department enforces.",
        "sourceUrl": "https://www.huntsvilleal.gov/development/building-construction/inspections/requirements/"
      },
      "garbage-disposal-replacement": {
        "requirement": "Swapping a garbage disposal is plumbing and electrical work, and Huntsville requires any plumbing, electrical, gas or mechanical work to be permitted by the appropriate licensed contractor, separately from any building permit for the same project.",
        "sourceUrl": "https://www.huntsvilleal.gov/development/building-construction/building-license-permits/permit-costs/"
      }
    }
  },
  "indianapolis-in": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Indianapolis Department of Business and Neighborhood Services",
      "url": "https://www.indy.gov/agency/department-of-business-and-neighborhood-services"
    },
    "codeEdition": {
      "text": "Houses in Indianapolis are built and inspected to the Indiana Residential Code 2020, which is the 2018 IRC with Indiana amendments and took effect December 26, 2019. Other trades run on older base codes: the Indiana Plumbing Code 2012 is built on the 2006 IPC and took effect December 24, 2012, while the Indiana Building, Mechanical and Fuel Gas Codes are 2014 editions based on the 2012 I-Codes.",
      "sourceUrl": "https://up.codes/codes/indiana"
    },
    "codeItems": [
      {
        "text": "Indiana's residential code includes a replacement carve-out a national guide would not mention: if the old water heater had no pan drain, the code does not require one for the replacement heater. The pan itself is still required wherever a leak would cause damage, and it has to be at least 1 1/2 inches deep with a 3/4-inch minimum indirect drain.",
        "sourceUrl": "https://up.codes/viewer/indiana/irc-2018/chapter/28/water-heaters"
      },
      {
        "text": "Where a pan drain is installed, Indiana requires it to run full size and end either over an indirect waste receptor or outside the building, between 6 and 24 inches above the adjacent ground.",
        "sourceUrl": "https://up.codes/viewer/indiana/irc-2018/chapter/28/water-heaters"
      },
      {
        "text": "Seismic strapping of a water heater is not a general Indiana requirement. The code calls for anchoring or strapping in the upper and lower thirds of the tank only in Seismic Design Categories D0, D1 and D2, plus townhouses in Category C, so for most Indianapolis houses it is the manufacturer's instructions rather than a seismic rule that governs.",
        "sourceUrl": "https://up.codes/viewer/indiana/irc-2018/chapter/28/water-heaters"
      },
      {
        "text": "A water heater with an ignition source installed in a garage has to be raised so the ignition source sits at least 18 inches above the garage floor, unless the appliance is listed as flammable vapor ignition-resistant.",
        "sourceUrl": "https://up.codes/viewer/indiana/irc-2018/chapter/28/water-heaters"
      },
      {
        "text": "Indiana narrows the smoke-alarm retrofit trigger. A whole-house alarm upgrade to new-construction standards is required only when permitted alterations, additions or a complete replacement of the electrical system occur, and the code specifically exempts plumbing and mechanical work, electrical work in existing rooms other than new or relocated bedrooms, and work limited to replacing, relocating or upgrading a service panel or meter base.",
        "sourceUrl": "https://up.codes/viewer/indiana/irc-2018/chapter/3/building-planning"
      }
    ],
    "byGuide": {
      "smoke-detector-replacement": {
        "requirement": "Swapping a smoke alarm in Indianapolis does not by itself force a whole-house alarm upgrade; Indiana's code only requires alarms to be brought up to new-construction standards when permitted electrical alterations, additions or a full electrical system replacement are done, and it exempts plumbing or mechanical work and a plain service panel or meter base swap.",
        "sourceUrl": "https://up.codes/viewer/indiana/irc-2018/chapter/3/building-planning"
      },
      "water-heater-replacement": {
        "requirement": "Indiana's residential code governs the water heater swap itself: the inspector looks for the drain pan where a leak could cause damage, the pan drain terminating properly, and an 18-inch elevated ignition source in a garage, but a pan drain is not required if the old installation did not have one.",
        "sourceUrl": "https://up.codes/viewer/indiana/irc-2018/chapter/28/water-heaters"
      }
    }
  },
  "jackson-ms": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Jackson Department of Planning and Development, Office of Code Services (Building Permits Division)",
      "url": "https://jacksonms.gov/government/city-departments/planning-and-development/office-of-code-services/building-permits/"
    },
    "codeEdition": {
      "text": "Jackson's Building Permits Division page lists the adopted codes: 2018 International Building Code with amendments, 2018 International Residential Code with amendments, 2018 International Plumbing Code with amendments, 2018 International Mechanical Code with amendments, 2018 International Fuel Gas Code with amendments, 2018 International Existing Building Code with no amendments, and the 2017 National Electrical Code with no amendments. The fire code and property maintenance code (both 2018 editions) are adopted by separate ordinances.",
      "sourceUrl": "https://jacksonms.gov/government/city-departments/planning-and-development/office-of-code-services/building-permits/"
    },
    "permitPolicy": {
      "text": "Jackson says a permit is required whenever an owner or the owner's authorized agent, usually a contractor, proposes to construct, enlarge, repair, move, demolish or change the occupancy of a building or structure, and the city lists electrical, plumbing, gas, heating and air conditioning, and furnaces or boilers among the work that needs one. The Building Permits Division also performs the inspections. Applications go through the city's online permitting portal.",
      "sourceUrl": "https://jacksonms.gov/government/city-departments/planning-and-development/office-of-code-services/building-permits/"
    },
    "registration": {
      "text": "Jackson requires an annual city business license, applied for through the Business Licensing Division with a notarized privilege tax form and a Mississippi Secretary of State certificate of good standing, and renewed every year in the month it expires. The city states that the fee varies by business type and size and does not publish an amount. No trade-specific electrical or plumbing registration separate from this license was found published on the city's site.",
      "sourceUrl": "https://jacksonms.gov/business/business-licenses/"
    },
    "codeItems": [
      {
        "text": "Electrical work in Jackson is judged against the 2017 National Electrical Code, adopted with no local amendments. That is an older edition than the 2020 or 2023 NEC most national guidance is written to, so an inspector here applies the 2017 rules rather than the newer ones.",
        "sourceUrl": "https://jacksonms.gov/government/city-departments/planning-and-development/office-of-code-services/building-permits/"
      },
      {
        "text": "Jackson adopts the 2018 International Plumbing Code with amendments and pulls in Appendices A through F, so appendix material that many cities leave out, including the water-piping sizing appendix, is enforceable here.",
        "sourceUrl": "https://jacksonms.gov/government/city-departments/planning-and-development/office-of-code-services/building-permits/"
      },
      {
        "text": "Gas work is permitted under a separate code in Jackson: the city lists gas as its own permit category and adopts the 2018 International Fuel Gas Code with amendments and Appendices A through D, which matters for a gas-fired water heater changeout.",
        "sourceUrl": "https://jacksonms.gov/government/city-departments/planning-and-development/office-of-code-services/building-permits/"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Jackson requires a permit to repair or replace plumbing and gas work, which covers a water heater changeout, and the Building Permits Division does the inspection.",
        "sourceUrl": "https://jacksonms.gov/government/city-departments/planning-and-development/office-of-code-services/building-permits/"
      },
      "plumber-service-call": {
        "requirement": "Repair work on plumbing in Jackson needs a permit; the city lists plumbing among the work that cannot be constructed, repaired or altered without one.",
        "sourceUrl": "https://jacksonms.gov/government/city-departments/planning-and-development/office-of-code-services/building-permits/"
      },
      "electrician-service-call": {
        "requirement": "Electrical repair and alteration work in Jackson needs a permit from the Building Permits Division, which also carries out the inspection.",
        "sourceUrl": "https://jacksonms.gov/government/city-departments/planning-and-development/office-of-code-services/building-permits/"
      }
    }
  },
  "jacksonville-fl": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Jacksonville Building Inspection Division",
      "url": "https://www.jacksonville.gov/departments/public-works/building-inspection-division"
    },
    "codeEdition": {
      "text": "Jacksonville enforces the Florida Building Code 8th Edition (2023) alongside the city's own building ordinances; anything submitted on or after January 1, 2024 has to comply with the 8th Edition. The city lists the 2023 Florida Building Code volumes for Building, Residential, Existing Buildings, Plumbing, Mechanical, Fuel Gas, Energy Conservation and Accessibility, the 2023 Florida Fire Prevention Code 8th Edition, and - worth noting - NFPA 70, the 2020 National Electrical Code, as the electrical code for Duval County.",
      "sourceUrl": "https://www.jacksonville.gov/departments/public-works/building-inspection-division/codes"
    },
    "permitPolicy": {
      "text": "A Jacksonville homeowner may pull a permit in their own name for their primary residence, provided their name is on the deed and the property is not for sale or rent. They must sign an Owner's Affidavit stating they will do the work themselves or directly supervise it, and for work on an existing house they have to attach proof of homestead exemption. The catch for trade work: any licensed or registered contractor the owner hires for electrical, plumbing or mechanical work must pull their own permit tied to the homeowner's building permit. Starting work before applying for a permit carries a $250 fine.",
      "sourceUrl": "https://www.jacksonville.gov/departments/public-works/building-inspection-division/residential-permits"
    },
    "registration": {
      "text": "Jacksonville licenses trades locally through its Construction Trades Qualifying Board under Ordinance Code Chapters 62 and 342, covering electrical, plumbing, HVAC, gas, water treatment and other categories, and it runs its own competency examinations. Published amounts include a $75.00 contractor certificate application fee, $25.00 for a certificate of competency, $65.00 for a journeyman craftsman examination and $115.00 for a master craftsman examination, with biennial renewals of $160.00 for a contractor certificate, $60.00 for a master craftsman and $50.00 for a journeyman. Separately, to pull permits a contractor must register with the Building Inspection Division using the New Contractor Registration Form, a Florida state construction license, photo ID and proof of workers' compensation coverage or exemption.",
      "sourceUrl": "https://www.jacksonville.gov/departments/boards-and-commissions/construction-trades-qualifying-board"
    },
    "codeItems": [
      {
        "text": "At the final inspection a Jacksonville inspector checks the water heater against the project's energy form. A heater whose capacity or type does not match what the energy calculations specify is one of the division's listed reasons for failing a final.",
        "sourceUrl": "https://www.jacksonville.gov/Departments/public-works/Building-Inspection-Division/Residential-Inspection"
      },
      {
        "text": "Jacksonville expects a termite treatment sticker posted at both the electrical panel and the water heater. A missing sticker is on the division's published list of final-inspection failures - a Florida habit that no national water heater guide mentions.",
        "sourceUrl": "https://www.jacksonville.gov/Departments/public-works/Building-Inspection-Division/Residential-Inspection"
      },
      {
        "text": "For a slab-on-grade house, Jacksonville spells out the grounding electrode: at least 20 feet of #5 rebar with a minimum of 2 feet projecting out of the slab, and the vertical leg has to be visually marked so the inspector can tell it from the other vertical steel. If it is not marked at the slab inspection, the inspection fails.",
        "sourceUrl": "https://www.jacksonville.gov/Departments/public-works/Building-Inspection-Division/Residential-Inspection"
      },
      {
        "text": "Because much of Duval County sits in a wind-borne debris zone, missing window protection on a project in that zone is one of the division's listed final-inspection failures, and the city publishes a Wind Zone Verification under Ordinance Code section 320.103.",
        "sourceUrl": "https://www.jacksonville.gov/departments/public-works/building-inspection-division/guidelines"
      },
      {
        "text": "Jacksonville reminds permit holders that a Notice of Commencement has to be recorded and a copy filed with the Building Inspection Division before any inspection can be scheduled, and that the permit number must appear on it. The city's own figures for when one is needed are improvements over $5,000, or $15,000 for mechanical work.",
        "sourceUrl": "https://www.jacksonville.gov/departments/public-works/building-inspection-division/residential-permits"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Jacksonville requires a permit to replace a water heater, and it says so twice over: water heater replacement is listed as permitted repair work, and the city's no-permit list covers replacing plumbing fixtures after the stop but specifically excludes water heaters.",
        "sourceUrl": "https://www.jacksonville.gov/departments/finance/city-fees#Building%20Inspection%20Division",
        "fee": "Plumbing Permit Fees - Section 320.409: $11.00 for each roughing-in and fixture or plugged outlet, a list that includes hot water tanks or boosters; Minimum fee for a plumbing permit $60.00"
      },
      "plumber-service-call": {
        "requirement": "Jacksonville needs no permit to stop a plumbing leak, clear a drain stoppage, or replace a plumbing fixture downstream of the stop, as long as the work does not involve replacing or rearranging valves, pipes or fixtures - and water heaters are carved out of that exemption. Extending, remodeling or repairing water, waste, soil, vent, building drain or sewer pipe is permitted work charged on estimated cost.",
        "sourceUrl": "https://www.jacksonville.gov/departments/finance/city-fees#Building%20Inspection%20Division",
        "fee": "Plumbing Permit Fees - Section 320.409: Repairs charged at $11.00 for each $100 of estimated cost or fractional part thereof; Minimum fee for a plumbing permit $60.00; failed inspection reinspection fee $45"
      },
      "electrician-service-call": {
        "requirement": "A new electrical service or rewiring needs a permit in Jacksonville, and the city's no-permit list does not exempt general electrical repairs. Residential service permits are priced by amperage and ordinary repair work falls under a flat repairs-and-miscellaneous charge.",
        "sourceUrl": "https://www.jacksonville.gov/departments/finance/city-fees#Building%20Inspection%20Division",
        "fee": "Electrical Permit Fees - Section 320.409, Residential Service Charge: 0-100 ampere service $80.00; 101-200 ampere service $100.00; each additional 50 amperes or part thereof $20.00; Repairs and miscellaneous $60.00; Minimum fee $60.00; Safety inspection $60.00"
      },
      "smoke-detector-replacement": {
        "requirement": "Jacksonville's electrical fee schedule prices hardwired smoke detectors per device, but it excepts single-family homes, multifamily buildings and room additions from that per-detector charge, so work in a house falls under the city's ordinary repair or minimum electrical fee instead.",
        "sourceUrl": "https://www.jacksonville.gov/departments/finance/city-fees#Building%20Inspection%20Division",
        "fee": "Electrical Permit Fees - Section 320.409: Smoke detectors wired into electrical systems (excepting single-family, multifamily and room additions), each $2.00; Repairs and miscellaneous $60.00; Minimum fee $60.00"
      },
      "garbage-disposal-replacement": {
        "requirement": "Jacksonville lists replacement of plumbing fixtures after the stop as work needing no permit, with water heaters the stated exception, so a straight disposal swap that touches nothing else generally falls in that category; once valves, pipes or fixtures have to be replaced or rearranged the exemption no longer applies and the plumbing permit minimum is $60.00.",
        "sourceUrl": "https://www.jacksonville.gov/departments/public-works/building-inspection-division/faqs"
      }
    }
  },
  "jersey-city-nj": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Jersey City Division of the Construction Code Official (Dept. of Housing, Economic Development & Commerce)",
      "url": "https://www.jerseycitynj.gov/cityhall/HousingAndDevelopment/constructioncode"
    },
    "codeEdition": {
      "text": "Jersey City administers and enforces the New Jersey Uniform Construction Code. As of the August 17, 2026 adoption date the state subcodes are the 2024 International Residential Code (NJ edition) for one- and two-family homes, the 2024 National Standard Plumbing Code (NJ edition), the 2023 National Electrical Code (NFPA 70), the 2024 International Fuel Gas Code and the 2024 International Mechanical Code.",
      "sourceUrl": "https://www.nj.gov/dca/codes/codreg/current.shtml"
    },
    "permitPolicy": {
      "text": "Jersey City issues permits centrally through its online permit portal; plumbing and electrical technical sections must be sealed by the licensed trade contractor. If the owner of a one- or two-family home does the work personally, a certification inside the permit folder covers it, which matches the state rule that only licensed tradespeople may do plumbing or electrical work except a single-family homeowner on his or her own dwelling. Anyone filing on someone else's behalf must be registered with the city as a Permit Processor. Every New Jersey permit also carries a state training surcharge of $1.90 per $1,000 of construction value with a $1.00 minimum.",
      "sourceUrl": "https://www.jerseycitynj.gov/cityhall/HousingAndDevelopment/constructioncode/application___review_process/"
    },
    "registration": {
      "text": "A Jersey City Contractor License is required for every contractor who does not hold a state trade license, and for all work on commercial property. Applications go through the city permit portal. The city does not publish the license fee or bond amount on this page.",
      "sourceUrl": "https://www.jerseycitynj.gov/cityhall/HousingAndDevelopment/constructioncode/contractors___permit_processors/"
    },
    "codeItems": [
      {
        "text": "Jersey City runs its own ongoing backflow-preventer program: each device must be tested annually by a licensed plumber and the report filed with the plumbing subcode official, and the city bills a $75.00 administrative fee per device per year. Skipping it can draw a violation.",
        "sourceUrl": "https://www.jerseycitynj.gov/cityhall/HousingAndDevelopment/constructioncode/ongoing_inspections___invoices/"
      },
      {
        "text": "The Jersey City Division of Fire uses its own certification form on which an electrician, fire alarm company or the owner certifies that every battery-operated smoke detector on the premises is a 10-year sealed device and working, and that the carbon monoxide detectors work.",
        "sourceUrl": "https://www.jerseycitynj.gov/UserFiles/Servers/Server_6189660/File/City%20Hall/Public%20Safety/Fire%20Prevention/SMOKE%20%20CARBON%20MONOXIDE%20DETECTOR%20CERTIFICATION%20FORM.pdf"
      },
      {
        "text": "Homes built before January 1, 1977 must have 10-year sealed-battery smoke alarms, and one- and two-family houses have to comply before a sale or change of occupancy. AC hardwired alarms and CO alarms are outside the rule, but a combination smoke/CO single-station device must be the 10-year sealed type.",
        "sourceUrl": "https://www.nj.gov/dca/divisions/dfs/pdf/10%20year%20sealed%20battery%20smoke%20alarm%20press%20release.pdf"
      },
      {
        "text": "New Jersey does not use the IPC or UPC: its plumbing subcode is the National Standard Plumbing Code, 2024 NJ edition, and the NJ edition defines hot water as potable water at not less than 120 and not more than 140 degrees F, which sets the window a replacement water heater's thermostat has to fall inside.",
        "sourceUrl": "https://www.nj.gov/dca/codes/codreg/pdf_regs/njac_5_23_3.pdf"
      },
      {
        "text": "New Jersey strikes two national AFCI rules from the electrical subcode: NEC 210.12(E) on branch-circuit extensions, modifications and replacements, and NEC 406.4(D)(4) on arc-fault protection when a receptacle is replaced. A small electrical repair in Jersey City therefore does not trigger the AFCI upgrade a national guide would describe.",
        "sourceUrl": "https://www.nj.gov/dca/codes/codreg/pdf_regs/njac_5_23_3.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater with one of like capacity is classed as minor work in New Jersey: a plumbing permit is still required, but you may start once the city has been given notice, with the permit application following within five business days.",
        "sourceUrl": "https://www.nj.gov/dca/codes/codreg/pdf_regs/njac_5_23_2.pdf"
      },
      "smoke-detector-replacement": {
        "requirement": "Jersey City lists swapping a smoke alarm or detector head for a like device, and installing battery-powered smoke alarms, as ordinary maintenance that needs no permit.",
        "sourceUrl": "https://www.jerseycitynj.gov/cityhall/HousingAndDevelopment/constructioncode/ordinary_maintenance/"
      },
      "garbage-disposal-replacement": {
        "requirement": "Jersey City treats replacing a plumbing fixture with a similar fixture, with no change to the piping arrangement, as ordinary maintenance needing no permit; adding a fixture that was not there before is minor work and does need a permit.",
        "sourceUrl": "https://www.jerseycitynj.gov/cityhall/HousingAndDevelopment/constructioncode/ordinary_maintenance/"
      },
      "plumber-service-call": {
        "requirement": "Jersey City lists clearing a stoppage, repairing a leak by replacing piping, and replacing faucets, valves, traps or ball cocks as ordinary maintenance that needs no permit; rearranging or resizing water, waste or vent piping does need a plumbing permit.",
        "sourceUrl": "https://www.jerseycitynj.gov/cityhall/HousingAndDevelopment/constructioncode/ordinary_maintenance/"
      },
      "electrician-service-call": {
        "requirement": "Jersey City lists replacing a receptacle, switch or light fixture with a like item as ordinary maintenance needing no permit, provided a replacement in a GFCI, damp or tamper-resistant location meets NEC 406.4(D).",
        "sourceUrl": "https://www.jerseycitynj.gov/cityhall/HousingAndDevelopment/constructioncode/ordinary_maintenance/"
      }
    }
  },
  "kansas-city-mo": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Kansas City, Missouri City Planning & Development Department, Permits Division",
      "url": "https://www.kcmo.gov/city-hall/departments/city-planning-development/permits-division"
    },
    "codeEdition": {
      "text": "Kansas City enforces its own Building and Rehabilitation Code, built on the 2018 International Building Code, which Council approved effective June 28, 2020. The residential side was updated to the 2018 International Residential Code, and the 2018 International Swimming Pool and Spa Code replaced IRC Appendix G. The energy provisions moved to the 2021 International Energy Conservation Code with local amendments, effective July 1, 2023.",
      "sourceUrl": "https://www.kcmo.gov/city-hall/departments/city-planning-development/building-and-rehabilitation-code/"
    },
    "permitPolicy": {
      "text": "An owner who occupies a single-family home as a principal residence, or will occupy it once the work is finished, may pull their own electrical, plumbing or mechanical permit, but only if the owner and unpaid family or friends buy the materials and do all the work. Paying anyone to do the work ends the exception, and that person must hold the city license and pull the permit themselves. The owner files a homeowner affidavit with the application and has to schedule the city inspections. On anything other than a single-family home, trade permits are issued only to licensed contractors.",
      "sourceUrl": "https://www.kcmo.gov/home/showpublisheddocument/15772/638973333692600000"
    },
    "registration": {
      "text": "Kansas City licenses contractors itself on top of any state credential, through the City Planning & Development Contractor Licensing Branch. A certificate of qualification and a contractor license each cost a $60 non-refundable application fee, plus a $181 issuance fee on approval and $181 to renew every four years. Plumbing contractors must also carry at least $1,000,000 aggregate liability coverage per occurrence and leave a $500 cash deposit with the Finance Department before applying. A change of company name, ownership or organization means a new application at $60 plus the $181 issuance fee.",
      "sourceUrl": "https://www.kcmo.gov/home/showpublisheddocument/16418/639089920136970000"
    },
    "codeItems": [
      {
        "text": "Kansas City treats smoke alarms as part of almost any permitted job. Its bulletin says alarms are required whenever an alteration, repair or addition needing a permit of any type happens, and compliance is checked at the inspection for that work. Only exterior-only work, including roof sheathing replacement, and work confined to plumbing or mechanical systems is excused.",
        "sourceUrl": "https://www.kcmo.gov/home/showpublisheddocument/15882/638989685520370000"
      },
      {
        "text": "In an existing Kansas City dwelling, battery alarms are allowed only where getting building wiring to the location would mean removing wall or finish material. Everywhere else the inspector looks for hardwired alarms with battery backup, interconnected so one alarm sounds them all, and the hardwiring itself takes an electrical permit.",
        "sourceUrl": "https://www.kcmo.gov/home/showpublisheddocument/15882/638989685520370000"
      },
      {
        "text": "Kansas City applies a specific spacing rule when one alarm is used to cover two sleeping areas: the alarm has to sit no further than half the listed maximum spacing from any sleeping-room door, with 30 feet on center the typical listed spacing unless the manufacturer says otherwise, and it must be audible inside each sleeping area with the door shut.",
        "sourceUrl": "https://www.kcmo.gov/home/showpublisheddocument/15882/638989685520370000"
      },
      {
        "text": "Kansas City's exempt-work list for trade permits is short and literal. Replacing a faucet or another plumbing fixture, replacing a component part of an appliance, and replacing a light switch or light fixture are the minor repairs named as needing no permit; most other electrical, plumbing or heating and ventilating work does need one before it starts.",
        "sourceUrl": "https://www.kcmo.gov/city-hall/departments/city-planning-development/electrical-plumbing-and-mechanical-permits"
      }
    ],
    "byGuide": {
      "smoke-detector-replacement": {
        "requirement": "Swapping an alarm on its own is not itself a listed permit item in Kansas City, but any permitted alteration or repair in the home triggers the full smoke-alarm requirement, and running new wiring to hardwire and interconnect the alarms needs an electrical permit.",
        "sourceUrl": "https://www.kcmo.gov/home/showpublisheddocument/15882/638989685520370000"
      },
      "plumber-service-call": {
        "requirement": "Kansas City needs a permit before most plumbing work starts; the only minor repairs it names as exempt are replacing a faucet or another plumbing fixture and replacing a component part of an appliance.",
        "sourceUrl": "https://www.kcmo.gov/city-hall/departments/city-planning-development/electrical-plumbing-and-mechanical-permits"
      },
      "electrician-service-call": {
        "requirement": "Replacing a light switch or a light fixture needs no Kansas City permit, but most other electrical work does, and on a single-family home only the occupying owner doing the work personally, or a city-licensed electrical contractor, may pull it.",
        "sourceUrl": "https://www.kcmo.gov/city-hall/departments/city-planning-development/electrical-plumbing-and-mechanical-permits"
      }
    }
  },
  "knoxville-tn": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Knoxville Department of Plans Review and Inspections",
      "url": "https://permits.knoxvilletn.gov/"
    },
    "codeEdition": {
      "text": "Knoxville enforces the 2024 editions of the International Building, Residential, Existing Building, Fire, Plumbing, Mechanical, Fuel Gas and Swimming Pool and Spa Codes. Electrical work is judged against the 2023 National Electrical Code (NFPA 70), energy work against the 2018 International Energy Conservation Code, and accessibility against ICC ANSI A117.1-2017. The city links the separate adopting ordinances for the 2024 construction codes, the 2024 fire code, the 2023 electrical code and the 2018 energy code. The Green Construction Code is voluntary and reviewed only on request. Several of the building official's standing policy statements still cite the 2018 IRC, which was the edition in force when they were issued.",
      "sourceUrl": "https://permits.knoxvilletn.gov/Test/Home1/Plans-Review/Construction-Codes"
    },
    "permitPolicy": {
      "text": "A Knoxville homeowner may pull mechanical, electrical or plumbing permits for their own principal residence without a city trade contractor's license, but has to sign the Homeowner and Unlicensed Contractor Acknowledgement Form certifying they live there or are making it their primary residence and are not working on it to sell, rent or lease. Property held by an LLC or a similar entity does not qualify. The homeowner MEP exemption is closed to manufactured homes, condemned homes, townhouses, condominiums and fire-damaged structures, to temporary poles and to electrical work on a home with no certificate of occupancy, and it cannot be used if the same homeowner was issued an MEP permit at another address in the past five years. A homeowner acting as their own residential builder may file only one such application in any two-year period.",
      "sourceUrl": "https://permits.knoxvilletn.gov/files/assets/building/v/1/licensing/documents/homeowner-and-unlicensed-contractor-ack-form.pdf"
    },
    "registration": {
      "text": "Anyone who applies for a Knoxville permit must first be registered with the Plans Review and Inspections Office under a registration type matching their qualifications, which for most trades runs alongside a State of Tennessee license. The city offers three tracks: state contractor, homeowner, and unlicensed or state limited licensee (Tennessee LLE or LLP). Since 2022 the city has not required a bond for subcontractor licenses, and it points applicants who reciprocate a state license to Tennessee's own bond rules. No city registration fee is published on the registration page.",
      "sourceUrl": "https://permits.knoxvilletn.gov/Register-To-Pull-A-Permit"
    },
    "codeItems": [
      {
        "text": "Knoxville's building official issued a standing AFCI policy for small jobs in one- and two-family dwellings: where branch circuit wiring is modified, replaced or extended in an area that requires AFCI protection, the circuit has to get either a combination-type AFCI at the origin of the branch circuit or an outlet branch-circuit AFCI at the first receptacle. The one way out is an extension of no more than 6 feet that adds no outlets or devices.",
        "sourceUrl": "https://permits.knoxvilletn.gov/Policies-Fast-Facts/Policy-Statements-and-Determinations"
      },
      {
        "text": "The code exempts plumbing and mechanical work from the carbon monoxide alarm retrofit trigger, but Knoxville reads that exemption as applying only to systems that are not fuel fired. Replacing a gas water heater or other fuel-fired appliance under permit therefore requires carbon monoxide alarms in the locations the residential code sets for new dwellings.",
        "sourceUrl": "https://permits.knoxvilletn.gov/Policies-Fast-Facts/Policy-Statements-and-Determinations"
      },
      {
        "text": "On interior work inside an existing Knoxville dwelling, the city requires smoke alarms in the code's required locations but does not make them interconnected or hard-wired: battery-powered alarms are accepted unless the permit says otherwise. Exterior work such as roofing, siding, windows or a deck, and plumbing or mechanical work, do not trigger the retrofit.",
        "sourceUrl": "https://permits.knoxvilletn.gov/Policies-Fast-Facts/Policy-Statements-and-Determinations"
      },
      {
        "text": "Before a Knoxville inspector will release power to a service, the city's electrical service connection policy has them verify that all service entrance conductors can be disconnected, that every 125-volt single-phase 15, 20 or 30 amp receptacle installed for use during construction has GFCI protection, that equipment and connections are undamaged and uncontaminated, and that every conductor landed on the busbar terminates in a device, appliance, junction box or other approved connection. Temporary construction power and service release are alternatives, not something you can run at the same time, and the inspector can have the utility pull power if an unsafe condition turns up.",
        "sourceUrl": "https://permits.knoxvilletn.gov/Policies-Fast-Facts/Policy-Statements-and-Determinations"
      },
      {
        "text": "Knoxville gives one free reinspection per discipline and then charges $50 for each further reinspection, and a special request or after-hours inspection is also $50 per discipline. Starting work before the permit is issued on a one- or two-family project costs the value of the permit fee again, capped at $1,000.",
        "sourceUrl": "https://permits.knoxvilletn.gov/files/assets/building/v/1/building-code-faq/2024-development-services-fee-schedule.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Knoxville requires a residential plumbing permit for home plumbing work, and the city's permit list names gas piping and gas water heaters specifically; a water heater swap with no building permit behind it is billed as a stand-alone trade permit.",
        "sourceUrl": "https://permits.knoxvilletn.gov/files/assets/building/v/1/building-code-faq/2024-development-services-fee-schedule.pdf",
        "fee": "Stand-Alone Trade Permit: .5% of the trade valuation, $55 minimum (plus 2.75% if paid by credit card)",
        "feeAsOf": "Development Services Fee Schedule 2024"
      },
      "electrician-service-call": {
        "requirement": "A residential electrical permit is required in Knoxville for all home electrical work downstream of the utility connection, and a job with no building permit behind it is charged as a stand-alone trade permit.",
        "sourceUrl": "https://permits.knoxvilletn.gov/files/assets/building/v/1/building-code-faq/2024-development-services-fee-schedule.pdf",
        "fee": "Stand-Alone Trade Permit: .5% of the trade valuation, $55 minimum (plus 2.75% if paid by credit card)",
        "feeAsOf": "Development Services Fee Schedule 2024"
      },
      "plumber-service-call": {
        "requirement": "A residential plumbing permit covers all home plumbing in Knoxville, including gas piping, and a stand-alone plumbing job is priced off the trade valuation with a published minimum.",
        "sourceUrl": "https://permits.knoxvilletn.gov/files/assets/building/v/1/building-code-faq/2024-development-services-fee-schedule.pdf",
        "fee": "Stand-Alone Trade Permit: .5% of the trade valuation, $55 minimum (plus 2.75% if paid by credit card)",
        "feeAsOf": "Development Services Fee Schedule 2024"
      },
      "smoke-detector-replacement": {
        "requirement": "Knoxville treats swapping smoke alarms as general repair and maintenance that needs no permit, but once you pull a permit for other interior work the dwelling has to have alarms in all the locations the residential code requires for a new house; they may be battery powered and need not be interconnected unless the permit says so.",
        "sourceUrl": "https://permits.knoxvilletn.gov/Policies-Fast-Facts/Policy-Statements-and-Determinations"
      }
    }
  },
  "las-vegas-nv": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Las Vegas Department of Community Development, Building and Safety Division",
      "url": "https://www.lasvegasnevada.gov/Government/Departments/Building-Safety"
    },
    "codeEdition": {
      "text": "On July 16, 2025 the Las Vegas City Council adopted the 2024 International Building, Residential and Existing Building Codes, the 2023 National Electrical Code, the 2024 Uniform Plumbing Code, the 2024 Uniform Mechanical Code and the 2024 International Fire and Energy Conservation Codes, together with local amendments. The new editions took effect January 5, 2026, and any project first submitted on or after that date must be designed to them.",
      "sourceUrl": "https://files.lasvegasnevada.gov/building-safety/2025/Industry_Notice-2024_Code_Adoption.pdf"
    },
    "permitPolicy": {
      "text": "Las Vegas lets a homeowner pull a no-plans permit directly: the online application starts by choosing either Building Contractor or Residential Owner Builder, and only the contractor path asks for license information. The city's no-plans list covers a same-for-same water heater change-out (tankless included), minor electrical of 12 devices or fewer, gas line repair, water piping replacement and miscellaneous drainage or vent piping repair. Anything not on that list has to be submitted with plans through the city's Citizen Portal.",
      "sourceUrl": "https://files.lasvegasnevada.gov/building-safety/Forms/General/Apply-for-a-Permit-Without-Plans%202025.pdf"
    },
    "codeItems": [
      {
        "text": "Southern Nevada's amendment to Uniform Plumbing Code 507.5, as further amended by Las Vegas, requires a drain pan under a water heater set in an attic, in or on an attic ceiling assembly, or on a floor-ceiling or floor-subfloor assembly. The pan must be at least 1-1/2 inches deep with a drain of at least 3/4 inch to an approved point, and the end of that drain line has to be readily visible. A tankless unit in a readily accessible spot and a point-of-use heater are exempt.",
        "sourceUrl": "https://files.lasvegasnevada.gov/building-safety/2025/2024-UPC-Amendments-CLV-Amended.pdf"
      },
      {
        "text": "The same amendment bans routing the temperature and pressure relief valve discharge into the water heater drain pan, and requires the T&P drain to terminate outside the building unless the manufacturer's listing rules that out. Where it cannot go outside, it may discharge through an air gap into a clothes washer standpipe, floor sink, floor-mounted mop sink or a floor drain fitted with a listed funnel. The drain line must be straight-run approved pipe, not a coil.",
        "sourceUrl": "https://files.lasvegasnevada.gov/building-safety/2025/2024-UPC-Amendments-CLV-Amended.pdf"
      },
      {
        "text": "Las Vegas backflow prevention assemblies have to be tested by a certified backflow assembly tester when installed, repaired or relocated, and at least annually after that. The tester has to leave a copy of the certification for each device on site.",
        "sourceUrl": "https://files.lasvegasnevada.gov/building-safety/2025/2024-UPC-Amendments-CLV-Amended.pdf"
      },
      {
        "text": "The Southern Nevada amendment to the 2023 NEC caps a dwelling branch circuit at twelve outlets, and requires a dedicated 20-amp circuit for a dishwasher, trash compactor and microwave oven. Outlets serving smoke detectors are not counted toward the twelve-outlet limit.",
        "sourceUrl": "https://files.lasvegasnevada.gov/building-safety/2025/2023-NEC-Amendments.pdf"
      },
      {
        "text": "The local NEC amendments rewrite the grounding electrode rules: plate electrodes are deleted as an acceptable electrode type, and a concrete-encased electrode is required for new buildings. An electrician doing a service change in Las Vegas may have to bring the grounding electrode system up to these local rules.",
        "sourceUrl": "https://files.lasvegasnevada.gov/building-safety/2025/2023-NEC-Amendments.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Las Vegas requires a plumbing permit to replace a water heater, and a same-for-same swap (including tankless) can be bought online without plans; the fee is the water heater inspection line plus a one-time permit issuance charge.",
        "sourceUrl": "https://files.lasvegasnevada.gov/building-safety/Building-Safety-Fee-Tables.pdf",
        "fee": "$22 permit/inspection fee for a Water Heater, plus the $55 MPE Permit Issuance fee charged once per inspection project",
        "feeAsOf": "July 2021"
      },
      "plumber-service-call": {
        "requirement": "Repairing or altering drainage or vent piping in Las Vegas takes a plumbing permit charged per fixture, and it is on the city's list of permits issued online without plans.",
        "sourceUrl": "https://files.lasvegasnevada.gov/building-safety/Building-Safety-Fee-Tables.pdf",
        "fee": "$64 permit/inspection fee for miscellaneous repair, including repair or alteration of drainage or vent piping, each fixture, plus the $55 MPE Permit Issuance fee charged once per inspection project",
        "feeAsOf": "July 2021"
      },
      "electrician-service-call": {
        "requirement": "Small electrical jobs in Las Vegas take a Minor Electrical permit, which the city issues online without plans for 12 devices or fewer, though a dedicated circuit to a fixed appliance needs plans.",
        "sourceUrl": "https://files.lasvegasnevada.gov/building-safety/Building-Safety-Fee-Tables.pdf",
        "fee": "$64 permit/inspection fee for Minor Electrical, plus the $55 MPE Permit Issuance fee charged once per inspection project",
        "feeAsOf": "July 2021"
      }
    }
  },
  "lexington-ky": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Lexington-Fayette Urban County Government, Division of Building Inspection",
      "url": "https://lexingtonky.gov/working/building-permits"
    },
    "codeEdition": {
      "text": "For one- and two-family houses Lexington enforces the 2018 Kentucky Residential Code, which is the 2015 IRC with Kentucky amendments, together with the 2015 International Mechanical Code, the 2009 International Energy Conservation Code, the 2009 National Fuel Gas Code and the 2023 NFPA 70 National Electrical Code. Plumbing is not a city code at all: the city lists Kentucky State Plumbing Law, Codes and Regulations at 815 KAR Chapter 20 as the governing text. Commercial and multi-family work runs on the 2018 Kentucky Building Code, which is the 2015 IBC.",
      "sourceUrl": "https://lexingtonky.gov/working/current-building-codes"
    },
    "permitPolicy": {
      "text": "Lexington says an electrical permit is required for all electrical work anywhere in Fayette County. A homeowner may pull their own electrical permit, but only for a property they own and currently live in: the city will not issue a homeowner electrical permit for vacant property, rental property, a duplex or a mobile home. A contractor pulling the permit instead must hold a Master Electrician licence or employ one, and must also hold an LFUCG business licence. Electrical inspections are not done by city staff; they are arranged through the Commonwealth Inspection Bureau, which sets its own inspection fee.",
      "sourceUrl": "https://lexingtonky.gov/working/building-permits/electrical-permits-licensing-inspections"
    },
    "registration": {
      "text": "Lexington runs its own contractor registration on top of state licensing, under Ordinance 35-2000 and section 5-86 of the LFUCG Code of Ordinances. Where a registered contractor is used, the contractor makes the permit application on the property owner's behalf. An owner acting as their own builder files an Affidavit of Exemption from Contractor Registration, which also commits them to the rule that any non-resident of the property who works in the construction trades as a paid entity on the job has to be a registered contractor, family or not. No registration fee or bond figure could be read, because the city's codified ordinances sit behind a bot check.",
      "sourceUrl": "https://content.lexingtonky.gov/sites/default/files/2025-03/CONTRACTOR%20REGISTRATION%20AFFIDAVIT.pdf"
    },
    "codeItems": [
      {
        "text": "Kentucky's water-heater rule turns on whether there is a single check valve at the water meter or service. If there is, a correctly sized thermal expansion tank has to be fitted on the cold supply near the heater and pressurised to the right setting. A Lexington inspector will look for this because the city enforces the state plumbing code rather than a code of its own.",
        "sourceUrl": "https://dhbc.ky.gov/Documents/HOs%20Info%20-%20Water%20Heater.pdf"
      },
      {
        "text": "Kentucky requires a corrosion-resistant watertight pan under any water heater installed after 1 April 2021 in an attic, above a drop ceiling, or on wood flooring in occupied space, and the pan needs at least a three-quarter inch drain piped like a relief-valve discharge line. The relief valve may discharge into the pan only if the pan pipe is a full one inch, is rated for hot water, and empties through an air gap.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/055/"
      },
      {
        "text": "A water heater in a Kentucky crawl space needs a travel path with at least five feet of vertical clearance and has to sit on at least two inches of corrosion-resistant material strong enough to carry it. Replacing a heater that was already in a crawl space before 1 September 2006 is exempt from the five-foot clearance, which matters on Lexington's older housing stock.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/055/"
      },
      {
        "text": "Kentucky is specific about where the relief discharge ends. In a room with a floor drain it has to be piped to within two inches of the floor; with no floor drain it has to be piped to within four inches of the ground surface. Piped outside in PEX or CPVC, the line has to be covered against ultraviolet light. The relief device itself goes no more than three inches from the top of the heater.",
        "sourceUrl": "https://dhbc.ky.gov/Documents/HOs%20Info%20-%20Water%20Heater.pdf"
      },
      {
        "text": "Three details the state's own homeowner handout flags that a national guide skips: the shutoff valve has to be within three feet of the heater and reachable from its accessible side, a ferrous-to-copper joint has to use a dielectric or other insulating fitting to stop electrolysis, and a flexible final water connector has to carry an ASME A112.18.6 mark on the connector, its label or its box. Flue pipe is held together with screws, not tape, three for three-inch pipe and four for four-inch.",
        "sourceUrl": "https://dhbc.ky.gov/Documents/HOs%20Info%20-%20Water%20Heater.pdf"
      },
      {
        "text": "A fuel-fired water heater in Kentucky cannot be put back into a closed room or closet unless the space has a louver door or is ventilated for combustion air to the National Fuel Gas Code standard in the Kentucky Building Code, and it cannot go in a bathroom, toilet room or sleeping room unless it is direct-vent or through-the-wall. The flue has to extend two feet above the roof and must not terminate within six feet of a door or window.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/055/"
      },
      {
        "text": "Kentucky puts a paperwork duty on the seller and installer rather than the homeowner: under KRS 318.200, anyone selling or installing a water heating device has thirty days from the sale to send the purchaser's name and address and the unit's serial number to the state department or to the city or county agency with jurisdiction.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/055/"
      },
      {
        "text": "A Kentucky plumbing permit goes only to a licensed master plumber or to a homeowner working on a home they occupy or built for their own residential use. The homeowner route carries conditions: apply before work starts, file an affidavit, do the work personally, and have taken no other homeowner permit for new-home construction in the last five years. A journeyman may not do the work unless a master plumber holds a valid permit and supervises.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/050/"
      },
      {
        "text": "Lexington splits the trades between three bodies, which catches people out. The Division of Building Inspection handles building and electrical permits, plumbing plan review sits with the Plumbing Program at the Lexington Health Department, and the electrical inspection itself is carried out by the Commonwealth Inspection Bureau.",
        "sourceUrl": "https://lexingtonky.gov/working/building-permits/plumbing-permits"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater needs a Kentucky plumbing permit, and the state sets a deliberately flat price for it: if only one heater is installed or replaced in a single building, the permit fee is the base fee alone with no per-appliance add-on, and the permit carries five inspections at no extra charge.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/050/",
        "fee": "$50 base fee for a residential one- and two-family plumbing permit; if only one new domestic water heater is installed or replaced within a single building, the only fee for the plumbing permit shall be $50; five inspections included at no additional cost, $50 for each additional inspection",
        "feeAsOf": "815 KAR 20:050, latest effective date 3-1-2022"
      },
      "plumber-service-call": {
        "requirement": "Kentucky lists exactly what triggers a plumbing permit in Lexington and exactly what does not: a new installation, a fixture or waste opening being moved, a replaced sewer or water service, a new backflow device or a water heater all need one, while repairing a leak, a cock or a valve, or cleaning out a waste or sewer pipe, does not.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/050/",
        "fee": "$50 base fee plus $14 for each plumbing fixture, appliance, or opening left for a fixture or appliance, for residential one- and two-family units ($50 plus $20 each in other buildings); fee limited to the base fee where the work includes no new installation; five inspections at no additional cost, then $50 per additional inspection, which does not apply if the permit cost exceeds $250",
        "feeAsOf": "815 KAR 20:050, latest effective date 3-1-2022"
      },
      "garbage-disposal-replacement": {
        "requirement": "A disposer is a plumbing appliance, so whether a Lexington permit is needed depends on the state's published trigger list: swapping one in place is not one of the listed triggers and repairs of leaks, cocks and valves are expressly exempt, but moving or relocating the fixture or waste opening to fit the new unit does require a permit.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/050/",
        "fee": "$50 base fee plus $14 for each plumbing fixture or appliance, for residential one- and two-family units; where the work includes no new installation the fee is limited to the base fee",
        "feeAsOf": "815 KAR 20:050, latest effective date 3-1-2022"
      },
      "electrician-service-call": {
        "requirement": "Lexington requires an electrical permit for all electrical work in Fayette County and charges a single flat price for it regardless of the job, but the inspection is a separate cost: it is scheduled through the Commonwealth Inspection Bureau, which quotes its own fee.",
        "sourceUrl": "https://lexingtonky.gov/working/building-permits/electrical-permits-licensing-inspections",
        "fee": "Electrical permits cost $10 each"
      },
      "smoke-detector-replacement": {
        "requirement": "Lexington publishes no exempt-work list for electrical permits and states flatly that they are required for all electrical work in Fayette County, so replacing a hard-wired smoke alarm falls under the same flat electrical permit, pulled by the resident owner or by a Master Electrician.",
        "sourceUrl": "https://lexingtonky.gov/working/building-permits/electrical-permits-licensing-inspections",
        "fee": "Electrical permits cost $10 each"
      }
    }
  },
  "lincoln-ne": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Lincoln Planning and Development Services, Building and Safety",
      "url": "https://www.lincoln.ne.gov/City/Departments/PDS/Building-Safety"
    },
    "codeEdition": {
      "text": "Lincoln's City Council has adopted, each with local amendments: the 2021 International Building Code, 2021 International Existing Building Code, 2021 International Residential Code, 2018 IECC, 2023 National Electrical Code, 2021 International Fire Code, 2012 International Property Maintenance Code, 2021 International Mechanical Code, 2021 International Fuel Gas Code, the Lincoln Hydronics Code, the 2021 Uniform Plumbing Code and the Gas Piping and Systems Code.",
      "sourceUrl": "https://www.lincoln.ne.gov/City/Departments/Building-Safety/Codes"
    },
    "permitPolicy": {
      "text": "Lincoln lets homeowners pull their own plumbing permits for work such as replacing a water heater, fitting a water softener, putting in a garbage disposal, setting a fixture or running a gas line, but not for building sewers, water services or excavations. On the electrical side a permit goes only to a registered electrical contractor or to a homeowner under section 23.10.160, and that homeowner permit covers branch-circuit and feeder wiring only in a detached single-family home they own and live in as their principal residence - never service equipment, and never pools or hot tubs. The city may refuse a homeowner permit if it believes someone else will do the work or that the house is about to be sold. Starting plumbing work before the permit is issued doubles the fee, except for genuine after-hours emergencies.",
      "sourceUrl": "https://online.encodeplus.com/regs/lincoln-ne/doc-view.aspx?secid=10565"
    },
    "registration": {
      "text": "Lincoln requires city registration on top of the state license. An electrical contractor must register with the City of Lincoln before any electrical permit is issued, and registration of a State of Nebraska electrical contractor license costs $250.00 for two years ($200.00 for a fire alarm installer), with a $50 late fee after December 31 and half-price registration taken out in even-numbered years. Plumbers register in four classes through the city's Examining Board of Plumbers and must pass a written exam. Electrical, plumbing and HVAC contractors must carry at least $500,000 per occurrence in general liability naming the City of Lincoln as additional insured, with the master's name shown as an insured; a bond is only required for work in the public right-of-way, and a master plumber doing excavation in the public ways posts a $5,000.00 payment bond.",
      "sourceUrl": "https://online.encodeplus.com/regs/lincoln-ne/doc-view.aspx?secid=10565"
    },
    "codeItems": [
      {
        "text": "Lincoln amends UPC 604.12 so that no flexible connector of any kind may be used on a water heater connection. Braided stainless steel flexible connectors are allowed only for fixtures (30 inches), washing machines (72 inches) and dishwashers or icemakers (120 inches), and flexible PVC connectors are banned outright.",
        "sourceUrl": "https://online.encodeplus.com/regs/lincoln-ne/doc-view.aspx?secid=10727"
      },
      {
        "text": "Lincoln amends UPC 604.13 to bar PEX, PEX-AL-PEX, PE-AL-PE and PE-RT tubing from the first 18 inches of piping connected to a water heater, so the hot and cold stubs off the heater have to be metal.",
        "sourceUrl": "https://online.encodeplus.com/regs/lincoln-ne/doc-view.aspx?secid=10727"
      },
      {
        "text": "Lincoln rewrites UPC 608.5 so a relief valve inside the building drains all the way to the outside of the building, in galvanized steel, hard-drawn copper or a listed relief-valve drain tube, ending not more than six inches above the ground or flood level and pointing down. The drain may not be trapped or exposed to freezing and its end may not be threaded. Discharge to open air must be at least five feet horizontally from any opening into the building below it.",
        "sourceUrl": "https://online.encodeplus.com/regs/lincoln-ne/doc-view.aspx?secid=10727"
      },
      {
        "text": "Lincoln deletes UPC 507.2, the seismic provision, so the seismic strapping a national water-heater guide describes is not a Lincoln requirement.",
        "sourceUrl": "https://online.encodeplus.com/regs/lincoln-ne/doc-view.aspx?secid=10727"
      },
      {
        "text": "Lincoln adopts the 2023 NEC but keeps five sections at the 2017 edition: 210.8(A), 210.8(A)(3), 210.8(A)(5), 230.67(A) and 230.85. The 2023 code's wider GFCI coverage, surge-protection rule and exterior emergency-disconnect rule therefore are not enforced here as a national guide would describe them.",
        "sourceUrl": "https://online.encodeplus.com/regs/lincoln-ne/doc-view.aspx?secid=10565"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Lincoln requires a plumbing permit to replace a water heater, and a homeowner may pull it themselves; the fee is a per-appliance charge on the city's plumbing fee schedule.",
        "sourceUrl": "https://www.lincoln.ne.gov/City/Departments/PDS/Building-Safety/Plumbing/Plumbing-Fees",
        "fee": "Water Heater Gas $8; Water Heater Electric $8 (Reinspection Fee $35)"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal takes a plumbing permit in Lincoln, charged per fixture; replacing a fixture or changing its type or kind requires the permit even though simple repairs do not.",
        "sourceUrl": "https://www.lincoln.ne.gov/City/Departments/PDS/Building-Safety/Plumbing/Plumbing-Fees",
        "fee": "Garbage Disposal $8"
      },
      "plumber-service-call": {
        "requirement": "Lincoln needs no permit for minor repair work - fixing a leaking trap, water pipe or drain pipe, clearing a drain, resetting an existing fixture, or replacing faucets, washers, float valves, ball stops, hoses or a sump pump. Replacing or relocating water, drain or vent piping or a fixture, or changing the type of fixture, does need a plumbing permit.",
        "sourceUrl": "https://online.encodeplus.com/regs/lincoln-ne/doc-view.aspx?secid=10727"
      },
      "electrician-service-call": {
        "requirement": "An electrical permit is required in Lincoln to install, alter or add to electrical equipment, charged as a base fee plus a fee for each branch circuit or feeder, with a separate homeowner schedule. Routine maintenance that repairs or replaces existing equipment with the same size and type, making no change to the wiring, needs no permit.",
        "sourceUrl": "https://online.encodeplus.com/regs/lincoln-ne/doc-view.aspx?secid=10565",
        "fee": "Contractors: Base Permit Fee $30.00 (added to all other fees) + $6.00 each branch circuit and/or feeder; service equipment 0-200 amperes $30.00; Re-Inspection fee $50.00 each. Homeowners: Minimum permit fee $30.00 + $8.00 each new, extended or modified branch circuit, $20.00 each sub-panel feeder",
        "feeAsOf": "Ord. 21875, June 1, 2026"
      },
      "smoke-detector-replacement": {
        "requirement": "Swapping a hard-wired smoke alarm for one of the same size and type, with no change to the wiring, falls under Lincoln's routine-maintenance exemption and needs no electrical permit; new or altered wiring for an alarm does need one.",
        "sourceUrl": "https://online.encodeplus.com/regs/lincoln-ne/doc-view.aspx?secid=10565"
      }
    }
  },
  "little-rock-ar": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Little Rock Planning and Development Department, Building Codes Division",
      "url": "https://littlerock.gov/government/city-departments/planning-and-development/divisions/"
    },
    "codeEdition": {
      "text": "Little Rock's enforced construction codes list, dated January 7, 2023, adopts the 2021 Arkansas Fire Prevention Code Vol. 2 as the building code and Vol. 3 as the residential code (both based on the 2021 International codes), the 2020 National Electrical Code as revised by Chapter 8 of the city's own ordinances, the 2018 Arkansas Plumbing Code with Appendices B, C, D and F, the 2018 Arkansas Fuel Gas Code, and the 2021 International Mechanical Code.",
      "sourceUrl": "https://www.littlerock.gov/media/18644/enforced-construction-codes-2023-c-sized-sheet.pdf"
    },
    "permitPolicy": {
      "text": "No electrical work may be done without a permit, and electrical permits are normally issued only to the master electrician in charge or to a licensed person. A homeowner can get a permit for work on the house they live in: they must show proof of ownership and that they occupy or will occupy it, and unless they already hold a State of Arkansas master or journeyman electrician license they pay a $35.00 consultation fee and sit down with the Electrical Inspections Supervisor, who judges their competence for the job before the permit is issued. If two consecutive inspections on the same work fail, the city can require a licensed electrician to finish it.",
      "sourceUrl": "https://www.littlerock.gov/!userfiles/editor/docs/planning/Statics_Specialreports/Electric_code.pdf"
    },
    "registration": {
      "text": "Before a permit is issued, Little Rock's permit desk wants a copy of the Arkansas Contractors License, a City of Little Rock contractor's (business/privilege) license from the Collector's Office, a $10,000 surety bond made out to the City of Little Rock, and for the special trades a copy of the master plumbing or master electrical license (Class A for mechanical). Electrical contracting firms must separately register their name, address and the master electrician supervising the business with the Building Codes Division permit section, and must report within three days if that master electrician leaves.",
      "sourceUrl": "https://www.littlerock.gov/!userfiles/editor/docs/planning/building%20codes/Documents%20Needed%20For%20Permits%20030212.pdf"
    },
    "codeItems": [
      {
        "text": "Little Rock writes its own water-heater bonding rule: in one- and two-family dwellings a #6 copper minimum bonding conductor must run from the service enclosure to the water heater, with a jumper across the cold and hot water sides, and the gas house piping must be bonded from the service enclosure to the house side of the gas meter outside the house. All of these connections have to stay accessible.",
        "sourceUrl": "https://www.littlerock.gov/!userfiles/editor/docs/planning/Statics_Specialreports/Electric_code.pdf"
      },
      {
        "text": "Every outdoor convenience receptacle outlet in the city must be GFCI protected, with no exceptions carved out in the local article.",
        "sourceUrl": "https://www.littlerock.gov/!userfiles/editor/docs/planning/Statics_Specialreports/Electric_code.pdf"
      },
      {
        "text": "Smoke alarms in new one- and two-family homes must be hard-wired with battery backup, placed on each level, in each bedroom and in the hallway outside, and interconnected. The city applies that same new-construction standard to an existing home whenever its electrical system is rewired.",
        "sourceUrl": "https://www.littlerock.gov/!userfiles/editor/docs/planning/Statics_Specialreports/Electric_code.pdf"
      },
      {
        "text": "When new wiring goes into an existing building, the city will not approve it until existing hazardous wiring, open knife switches and open fuse blocks have been taken out. Any framing opened up during the work has to be rewired to current code.",
        "sourceUrl": "https://www.littlerock.gov/!userfiles/editor/docs/planning/Statics_Specialreports/Electric_code.pdf"
      },
      {
        "text": "The local article adds dedicated-circuit rules a national guide would not list: a refrigerator must have its own circuit, bathroom heat must be on its own circuit, a hydromassage tub circuit needs a readily accessible GFCI device, and a gas range needs a 120-volt receptacle placed behind it rather than above it.",
        "sourceUrl": "https://www.littlerock.gov/!userfiles/editor/docs/planning/Statics_Specialreports/Electric_code.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Little Rock takes a plumbing permit, charged as a per-appliance unit fee against a flat minimum, with a data processing fee added on top.",
        "sourceUrl": "https://www.littlerock.gov/media/19234/ord-22204-fees.pdf",
        "fee": "$17.00 water heater (plumbing repair/alteration unit cost); minimum fee for any plumbing permit $50.00; data processing fee $25.00 in addition to the permit charge",
        "feeAsOf": "December 6, 2022"
      },
      "plumber-service-call": {
        "requirement": "Repair or alteration of existing plumbing in Little Rock is permitted on a per-fixture basis against a $50 minimum, and a permit is required for any work over $5,000 or any work that requires an inspection.",
        "sourceUrl": "https://www.littlerock.gov/media/19234/ord-22204-fees.pdf",
        "fee": "$6.00 for each plumbing fixture outlet or appliance on repair/alteration/addition work; minimum fee for any plumbing permit $50.00; data processing fee $25.00",
        "feeAsOf": "December 6, 2022"
      },
      "electrician-service-call": {
        "requirement": "No electrical work may be performed in Little Rock without an electrical permit, and however small the itemized charges come to, the permit cannot cost less than the $50 minimum.",
        "sourceUrl": "https://www.littlerock.gov/media/19234/ord-22204-fees.pdf",
        "fee": "Minimum fee for permit for electrical work $50.00; itemized unit costs include $25.00 per inspection, $45.00 re-inspection and $45.00 investigation; data processing fee $25.00",
        "feeAsOf": "December 6, 2022"
      },
      "smoke-detector-replacement": {
        "requirement": "Little Rock's electrical fee schedule prices hard-wired smoke and carbon monoxide detectors by count, and the inspector will let five detectors be grouped into one inspection if they are all ready at the same time and in the same building.",
        "sourceUrl": "https://www.littlerock.gov/media/19234/ord-22204-fees.pdf",
        "fee": "$12.00 for 1-4 smoke or carbon monoxide detectors; $5.00 for each smoke detector over 4; minimum fee for permit for electrical work $50.00",
        "feeAsOf": "December 6, 2022"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal is a priced line item on both Little Rock's electrical and plumbing schedules, so the work is permittable, and a permit is required for any job over $5,000 or any job that requires an inspection.",
        "sourceUrl": "https://www.littlerock.gov/media/19234/ord-22204-fees.pdf",
        "fee": "Electrical: $6.00 for disposal/ceiling fan, vent hood, bath fan or exhaust fan (each). Plumbing: $6.00 per fixture outlet or appliance. Minimum fee $50.00 for either an electrical or a plumbing permit",
        "feeAsOf": "December 6, 2022"
      }
    }
  },
  "los-angeles-ca": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Los Angeles Department of Building and Safety (LADBS)",
      "url": "https://dbs.lacity.gov/services/plan-review-permitting"
    },
    "codeEdition": {
      "text": "Los Angeles enforces the California Building Standards Code as amended by the City, published as the Los Angeles Building, Plumbing, Electrical and Mechanical Codes inside the LA Municipal Code. LADBS told applicants that projects filed from January 1, 2023 had to meet the then-current California edition as amended by the City, and its current plumbing-code bulletins carry an effective date of January 1, 2026 and cite the Los Angeles Plumbing Code by section (for example LAPC 507.2).",
      "sourceUrl": "https://dbs.lacity.gov/sites/default/files/efs/pdf/publications/newsletters/LADBS-Jan-2023-Newsletter.pdf"
    },
    "permitPolicy": {
      "text": "A Los Angeles property owner may take out a permit as Owner/Builder on a single-family dwelling if they show proof that they own the property and proof that they currently live at the address. LADBS also makes the owner read, initial and sign an Owner-Builder Acknowledgment and Verification of Information form before the permit is issued, and an agent can sign it only with the owner's notarized authorization.",
      "sourceUrl": "https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/application-for-electrical-permit-pc-elec-app-02.pdf"
    },
    "registration": {
      "text": "A contractor pulling a Los Angeles permit must produce a City of Los Angeles business tax registration certificate, or a newly paid receipt for one, on top of the state contractor's license. LADBS also asks at permit issuance for the workers' compensation certificate made out to the state license board, the contractor's license pocket ID, and notarized letters for any agent signing on the contractor's behalf.",
      "sourceUrl": "https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/notice-to-contractors---insurance-and-license-requirements-ib-p-gi2014-001.pdf"
    },
    "codeItems": [
      {
        "text": "Los Angeles inspectors check water heater bracing in detail. The tank must be strapped in two places, in the upper third and the lower third, with the lower strap at least 4 inches above the control unit. Anchors must be lag screws at least 1/4 inch in diameter with at least 1-1/2 inches of thread biting into a wall stud, each with a large flat washer behind the strap. Perforated plumber's tape is not accepted on any tank over 40 gallons, and the clearance to the wall printed on the appliance nameplate is treated as critical.",
        "sourceUrl": "https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/how-to-brace-your-water-heater-ib-p-pc2011-003.pdf"
      },
      {
        "text": "Los Angeles splits water heater permits by the size of the appliance. A gas water heater is handled by the Plumbing Inspection Section only while it stays at or below 210 degrees F, 160 psi, 120 gallons and 400,000 BTU per hour. Pass any one of those and the city also requires a separate installation permit from its Pressure Vessel Section. LADBS also states that every storage heater installation needs an approved, listed, correctly sized combination temperature-and-pressure relief valve.",
        "sourceUrl": "https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/permits-for-gas-water-heaters-ib-p-pc2014-006.pdf"
      },
      {
        "text": "Los Angeles requires every newly constructed building to be an all-electric building, which the ordinance defines as having no combustion equipment for water heating among other uses. The rule is written for new construction, so it does not by itself force a gas water heater in an existing house to be swapped for an electric one, but it is the reason a new LA house will not have a gas heater to replace.",
        "sourceUrl": "https://dbs.lacity.gov/sites/default/files/efs/pdf/ordinances/22-0151_ord_187714_1-23-23.pdf"
      },
      {
        "text": "Los Angeles prices a thermal expansion tank, an earthquake gas shutoff valve and a pressure regulating valve as separate permit items on its plumbing schedule, so each one added alongside a water heater is written onto the permit and inspected rather than treated as part of the heater.",
        "sourceUrl": "https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/plumbing-permit-fee-schedule.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Los Angeles requires a plumbing permit to install or replace a gas water heater, and LADBS issues it as an express permit with no plan check; the inspector looks at the two seismic straps, the relief valve and anything added with the heater.",
        "sourceUrl": "https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/plumbing-permit-fee-schedule.pdf",
        "fee": "Water heater and vent or heat exchanger $28.00; Thermal Expansion Tank $15.00; minimum $90 if applying for 2 or more items, minimum $55 for one item costing less than $55; permit issuing fee $23.00 if the sub-total is over $90; plus 3% D.S.C.S. and 6% System's Surcharge, $1.00 minimum each",
        "feeAsOf": "July 2017"
      },
      "garbage-disposal-replacement": {
        "requirement": "Replacing a garbage disposal in Los Angeles needs a plumbing permit, which LADBS treats as an express permit for replacing a plumbing fixture, and the city charges less for a swap than for a brand-new fixture.",
        "sourceUrl": "https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/plumbing-permit-fee-schedule.pdf",
        "fee": "Garbage Disposal, replace or remove existing $10.00; Garbage Disposal, new $23.00; minimum $55 if applying for one item costing less than $55; plus 3% D.S.C.S. and 6% System's Surcharge, $1.00 minimum each",
        "feeAsOf": "July 2017"
      },
      "plumber-service-call": {
        "requirement": "Los Angeles charges a plumbing permit per item of work, and a small repair still runs into the city's minimum permit charge; a failed inspection that brings the inspector back out is billed as an extra trip.",
        "sourceUrl": "https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/plumbing-permit-fee-schedule.pdf",
        "fee": "Replace or remove existing fixtures $10.00 each; Waste & Vent Alter/Repair $10.00; Sewer Alter/Repair/Cap $24.00; Extra Trip $90.00; Miscellaneous Permit $90.00; minimum $90 if applying for 2 or more items, minimum $55 for one item costing less than $55",
        "feeAsOf": "July 2017"
      },
      "electrician-service-call": {
        "requirement": "Los Angeles charges an electrical permit by the circuit or by the count of devices, so even a small job lands on the city's minimum permit charge, and LADBS bills an extra trip when the inspector has to return.",
        "sourceUrl": "https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/permit-fee-schedule-for-electrical-permits-pc-elec-feesched01.pdf",
        "fee": "General use 120V branch circuits, 1-10 circuits $17.00 each; Receptacle, light, switch or telephone units, 1-5 units $18.00 total, 6-10 units $22.00 total; Extra Trip $90.00 each; Miscellaneous Permit $90.00; minimum $90 if applying for 2 or more items, minimum $55 for one item costing less than $55; permit issuing fee $23.00 if the sub-total is over $90",
        "feeAsOf": "December 2016"
      },
      "smoke-detector-replacement": {
        "requirement": "Los Angeles treats smoke detectors in a house, duplex or apartment unit as electrical work needing a permit, and LADBS lists it as an express permit so no plan check is involved.",
        "sourceUrl": "https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/permit-fee-schedule-for-electrical-permits-pc-elec-feesched01.pdf",
        "fee": "SFD and Apartment Smoke Detectors, 1 residential unit $15.00; each additional residential unit in a multi-dwelling occupancy $12.00; minimum $55 if applying for one item costing less than $55",
        "feeAsOf": "December 2016"
      }
    }
  },
  "louisville-ky": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Kentucky Department of Housing, Buildings and Construction, Division of Plumbing (state plumbing permit authority covering Louisville)",
      "url": "https://dhbc.ky.gov/"
    },
    "codeEdition": {
      "text": "The 2015 International Residential Code is the mandatory residential code in Kentucky, with the Kentucky amendments in the 2018 Kentucky Residential Code (Third Edition, August 2024) overriding anything in conflict. For a single-family dwelling, building permits, inspections and certificates of occupancy are required only where a local ordinance requires them.",
      "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/007/125/"
    },
    "permitPolicy": {
      "text": "A Kentucky plumbing permit is issued only to a licensed master plumber, or to a homeowner who will personally do the work in a home they occupy. The homeowner has to apply before starting and file an affidavit with the application, and cannot have taken a homeowner permit for a new home in the previous five years. A journeyman may only work under a master plumber's permit.",
      "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/050/"
    },
    "codeItems": [
      {
        "text": "A water heater in a crawl space needs a travel path with at least five feet of vertical clearance and must sit on at least two inches of corrosion-resistant material strong enough to carry it. Replacing a heater that was already in a crawl space before September 1, 2006 is exempt from the height rule.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/055/"
      },
      {
        "text": "Since April 1, 2021, a water heater in an attic, above a drop ceiling, or on wood flooring in occupied space must have a corrosion-resistant watertight pan under it with at least a 3/4-inch drain piped like a TPR discharge line. The TPR valve may discharge into that pan only if the pan drain is one inch and discharges through an air gap to an approved point.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/055/"
      },
      {
        "text": "A fuel-fired water heater must vent to a flue or chimney that extends two feet above the roof and does not terminate within six feet of a door or window, and it may not be connected to a flue serving a coal-burning appliance. It cannot go in a bathroom, toilet room or sleeping room unless it is direct-vent or through-the-wall, and a closet installation needs a louver door or combustion-air ventilation.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/055/"
      },
      {
        "text": "Direct-vent water heater terminals have Kentucky-specific clearances: nine inches from any opening flue gases could enter for units up to 50,000 BTU per hour, twelve inches for larger units, and the terminal and air intake must be at least twelve inches above grade.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/055/"
      },
      {
        "text": "State Housing, Buildings and Construction inspectors now carry carbon monoxide detection instruments, and every inspection they perform includes a visual check of the mechanical room and a CO reading.",
        "sourceUrl": "https://dhbc.ky.gov/Documents/CarbonMonoxideTestingInitiative1-26.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Kentucky requires a state plumbing permit, and that permit covers five plumbing inspections at no extra charge.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/050/",
        "fee": "$50 flat when one new or replacement domestic water heater is installed in a building; otherwise $50 base fee plus $14 for each fixture, appliance or water heater in a one- or two-family home",
        "feeAsOf": "effective March 1, 2022"
      },
      "plumber-service-call": {
        "requirement": "Kentucky does not require a plumbing permit to repair a leak, a cock or a valve, or to clean out a waste or sewer pipe, but moving or relocating a fixture or waste opening does need one, and work that is not a new installation is charged only the base permit fee.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/020/050/",
        "fee": "$50 base fee (residential one- and two-family); the fee is limited to the base fee when the work is not new installation",
        "feeAsOf": "effective March 1, 2022"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Louisville is permitted and inspected against the National Electrical Code by the local certified electrical inspector, and appliances and work exempted by Kentucky Residential Code section R105.2 are not inspected.",
        "sourceUrl": "https://apps.legislature.ky.gov/law/kar/titles/815/035/020/"
      }
    }
  },
  "lubbock-tx": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Lubbock Building Safety Department, Building Inspection Division",
      "url": "https://www.mylubbock.us/530/FAQS-Reports"
    },
    "codeEdition": {
      "text": "Lubbock's Building Safety Department lists the 2021 International Residential Code, 2021 International Building Code, 2021 International Plumbing Code, 2021 International Mechanical Code, 2021 International Fuel Gas Code, 2021 International Energy Conservation Code and the 2020 National Electrical Code as the codes in force. The city's ordinance page records the adopting ordinances — 2024-O0025 for the 2021 IBC (with a later amendment, 2025-O0116), 2024-O0026 for the 2021 IPC, 2024-O0027 for the 2021 IMC and 2024-O0028 for the 2020 NEC — and notes that the local amendments sit in Chapter 28, Building Regulations, of the city code. Lubbock warns that failing to meet these minimum standards is a Class C misdemeanour.",
      "sourceUrl": "https://www.mylubbock.us/906/Ordinances"
    },
    "permitPolicy": {
      "text": "Lubbock splits permit rights by who you are and which trade is involved. A homeowner living in the house as their homestead may take out structural, plumbing and mechanical permits, but the work has to be done by the homeowner or an immediate family member — and an electrical permit still requires a licensed electrical contractor or master electrician. An owner of a rental property who does not live there may take out only a structural permit, again with the work done by the owner or immediate family; plumbing, mechanical and electrical permits have to be pulled by licensed subcontractors. Subcontractors get their permits after the general contractor's main permit is issued. A permit is required before work starts on building construction or changes, or on electrical, gas, mechanical or plumbing systems regulated by the adopted codes, and a permit expires 180 days after the previous inspection.",
      "sourceUrl": "https://www.mylubbock.us/530/FAQS-Reports"
    },
    "registration": {
      "text": "Any building or general contractor working in Lubbock has to register with the city, and the registration application carries a $75.00 fee. The state-licensed trades — electrical, plumbing and mechanical — are marked exempt per state law on the city's own form, so those categories pay no city registration fee. Every applicant has to show financial responsibility either as commercial general liability coverage of at least $100,000 or a $20,000 compliance bond, and must list the people authorised to apply for permits. The registration and any live permits go void if the bond or insurance lapses or a required state licence expires, and the Building Official can suspend or revoke a registration for cause under Section 28.04 of the city code.",
      "sourceUrl": "https://www.mylubbock.us/DocumentCenter/View/326/General-Contractors-Registration-Form-PDF"
    },
    "codeItems": [],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Lubbock requires a permit before a water heater is replaced, and the city issues it as one of its quick generic permits. A homeowner living in the house can pull the plumbing permit, but only if the work is done by the homeowner or an immediate family member — otherwise a licensed plumbing subcontractor has to take it out.",
        "sourceUrl": "https://www.mylubbock.us/530/FAQS-Reports"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work on a system regulated by Lubbock's adopted codes needs a permit before the work starts, and the city issues generic permits for common jobs such as a sewer line, gas line or lawn sprinkler; the permit expires 180 days after the last inspection.",
        "sourceUrl": "https://www.mylubbock.us/530/FAQS-Reports"
      },
      "electrician-service-call": {
        "requirement": "Lubbock will not issue an electrical permit to a homeowner at all — an electrical permit requires a licensed electrical contractor or master electrician, even where the owner lives in the house, and the city has a generic permit type for an electrical service.",
        "sourceUrl": "https://www.mylubbock.us/530/FAQS-Reports"
      }
    }
  },
  "madison-wi": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Madison Building Inspection Division (Dept. of Planning & Community & Economic Development)",
      "url": "https://www.cityofmadison.com/dpced/building-inspection"
    },
    "codeEdition": {
      "text": "Madison's Development Services Center directs 1- and 2-family alteration work to the state code, Wis. Admin. Code chs. SPS 320-325 (Wisconsin Uniform Dwelling Code); any building with three or more attached units is handled under the commercial building code instead.",
      "sourceUrl": "https://www.cityofmadison.com/development-services-center/1-2-family-residential/alterations/general-alterations-including"
    },
    "permitPolicy": {
      "text": "An owner-occupant altering their own single-family home may pull both the building permit and the mechanical permits (plumbing, electrical, HVAC). An owner-occupant building a new house may pull only the building permit, and a non-occupant owner of a 1- or 2-family rental needs licensed professionals for both building and mechanical permits.",
      "sourceUrl": "https://www.cityofmadison.com/development-services-center/1-2-family-residential"
    },
    "codeItems": [
      {
        "text": "Madison's smoke alarm ordinance reaches every residential building, including owner-occupied single-family homes: alarms must be hardwired with battery backup or powered by a sealed, non-removable 10-year battery, and no alarm may stay in service longer than ten years unless the manufacturer allows it.",
        "sourceUrl": "https://www.cityofmadison.com/fire/your-safety/smoke-alarms/smoke-alarm-ordinance"
      },
      {
        "text": "Placement is stricter than the usual one-per-floor rule: an alarm is required in each bedroom, in each sleeping area, within six feet of every door leading to a bedroom or sleeping area, and on each floor of the building.",
        "sourceUrl": "https://www.cityofmadison.com/fire/your-safety/smoke-alarms/smoke-alarm-ordinance"
      },
      {
        "text": "Electrical permits are counted by \"openings\" - outlets, switches, fixtures, junction boxes, subpanels and fixed appliances all count - and a service panel replacement is counted and priced separately from openings.",
        "sourceUrl": "https://www.cityofmadison.com/development-services-center/documents/forms/permit-electrical.pdf"
      },
      {
        "text": "Water heaters and water softeners are named in the scope of the city's plumbing repair/replace permit, and plumbing permit fees are calculated from the number of new or replaced fixtures.",
        "sourceUrl": "https://www.cityofmadison.com/development-services-center/1-2-family-residential/online-permits"
      },
      {
        "text": "Moving or adding a permanent fixture (toilet, sink, shower, island or counter) pushes the job out of the over-the-counter permit and into plan review, so a relocated water heater or sink is not a same-day permit in Madison.",
        "sourceUrl": "https://www.cityofmadison.com/development-services-center/1-2-family-residential/online-permits"
      },
      {
        "text": "Connecting to, installing or replacing a water service requires a separate Water Utility application signed by a master plumber (and by the property owner for a new or replacement service), submitted with fees before work starts.",
        "sourceUrl": "https://www.cityofmadison.com/water/plumbers-contractors"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater needs a Madison plumbing permit; the city's plumbing data sheet is the application for water heater and softener replacements and prices the permit by fixture.",
        "sourceUrl": "https://www.cityofmadison.com/development-services-center/documents/forms/permit-plumbing.pdf",
        "fee": "$8.00 per fixture - minimum fee $25.00"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work that adds or moves a fixture needs a plumbing permit from Building Inspection, priced per fixture with a minimum fee; jobs that do not require plan review can be applied for over the counter or online.",
        "sourceUrl": "https://www.cityofmadison.com/development-services-center/documents/forms/permit-plumbing.pdf",
        "fee": "$8.00 per fixture - minimum fee $25.00"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in an existing building needs an electrical permit, priced by the number of openings added or moved, with a separate charge for replacing a service panel.",
        "sourceUrl": "https://www.cityofmadison.com/development-services-center/documents/forms/permit-electrical.pdf",
        "fee": "$25.00 for openings 1-10 + $1.00 per additional opening; $50.00 per service panel"
      },
      "smoke-detector-replacement": {
        "requirement": "Madison does not treat smoke alarms as a permit item, but its ordinance sets what you may install: a hardwired alarm with battery backup or a sealed 10-year-battery alarm, in each bedroom and sleeping area, within six feet of each bedroom door and on every floor, replaced at ten years.",
        "sourceUrl": "https://www.cityofmadison.com/fire/your-safety/smoke-alarms/smoke-alarm-ordinance"
      }
    }
  },
  "memphis-tn": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Memphis and Shelby County Office of Construction Code Enforcement",
      "url": "https://www.shelbycountytn.gov/Directory.aspx?did=381"
    },
    "codeEdition": {
      "text": "Memphis and unincorporated Shelby County are covered by one joint code set adopted by both the Memphis City Council and the Shelby County Board of Commissioners, effective December 31, 2021: the 2021 International Building Code with local amendments, together with the 2021 International Residential, Plumbing, Mechanical, Fuel Gas, Existing Building, Fire and Energy Conservation Codes and the 2020 National Electrical Code, each with its own local amendments. The electrical ordinance repealed the 2018 Memphis and Shelby County Electrical Code.",
      "sourceUrl": "https://www.shelbycountytn.gov/DocumentCenter/View/39392/2021-International-Building-Code-with-Local-Amendments"
    },
    "permitPolicy": {
      "text": "Trade permits in Memphis go to the contractor, not the homeowner: the plumbing code says a permit is issued only to a licensed and/or registered contractor who performs the work, and the owner or agent must first hire one. The electrical code carries the one homeowner exception — a permit may be issued to the owner of a single-family home that is their principal residence and is not held for rent, lease or resale, provided they score at or above the 70th percentile on an approved examination, do the work themselves or with immediate family, and take no more than one such permit every two years. Retaking the exam costs $25 after the first free attempt. On the building side a property owner may pull a permit for a single-family dwelling within the limits state law sets, and the county's residential handout lets a homeowner do demolition on their own home against a $300.00 refundable cash bond plus the permit fee.",
      "sourceUrl": "https://www.shelbycountytn.gov/DocumentCenter/View/39391/2020-National-Electrical-Code-with-Local-Amendments"
    },
    "registration": {
      "text": "A state licence alone is not enough here. A contractor must hold a State of Tennessee licence and then register it with the Construction Code Enforcement licensing section, along with a Memphis and Shelby County business licence and a qualifying-agent affidavit from the State Contractors Board; registration and renewal are $50 each. The joint code also requires a $25,000 contractor bond, capped at $50,000 for a single entity holding several registrations. Electrical work additionally runs through locally issued credentials — a Master Electrician licence from the Building Official, plus journeyman and industrial plant electrician licences — and contractor vehicles must carry the firm name and registration number.",
      "sourceUrl": "https://www.shelbycountytn.gov/DocumentCenter/View/33929/General-Information-about-submittals"
    },
    "codeItems": [
      {
        "text": "Memphis makes an inspector re-check wiring that has sat idle: residential wiring out of service for 365 days or more (90 days or more for commercial) has to be re-inspected before the power company may energise it again. On a long-vacant house that turns a simple reconnect into an inspection.",
        "sourceUrl": "https://www.shelbycountytn.gov/DocumentCenter/View/39391/2020-National-Electrical-Code-with-Local-Amendments"
      },
      {
        "text": "Adding to an existing electrical system in Memphis requires a load calculation showing the existing service can carry the added load — so a new circuit for a hot tub, EV charger or sub-panel can turn into a service-size question rather than a simple add-on.",
        "sourceUrl": "https://www.shelbycountytn.gov/DocumentCenter/View/39391/2020-National-Electrical-Code-with-Local-Amendments"
      },
      {
        "text": "The local plumbing amendments push gas water heaters out of the plumbing code: a fuel gas water heater and its venting system are regulated under the International Fuel Gas Code, while the plumbing permit covers the potable water piping. A gas heater swap is therefore judged against two separate amended codes.",
        "sourceUrl": "https://www.shelbycountytn.gov/DocumentCenter/View/39435/2021-IPC-Amendments-Final"
      },
      {
        "text": "An electrical permit holder in Memphis may name no more than two authorised agents to apply for permits on the licence, and the Electrical Board can levy civil penalties of up to $50 per violation with each day counted separately.",
        "sourceUrl": "https://www.shelbycountytn.gov/DocumentCenter/View/39391/2020-National-Electrical-Code-with-Local-Amendments"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Memphis takes a permit — the local plumbing code requires one for all potable water systems — and the permit can only be issued to a plumbing contractor who holds a Tennessee licence and has registered it with Construction Code Enforcement, so a homeowner cannot pull it themselves. A gas heater's venting is inspected under the amended Fuel Gas Code rather than the plumbing code, and starting the work before the permit is issued triples the fee.",
        "sourceUrl": "https://www.shelbycountytn.gov/DocumentCenter/View/39435/2021-IPC-Amendments-Final"
      },
      "plumber-service-call": {
        "requirement": "Memphis issues a plumbing permit only to a licensed and registered plumbing contractor who is doing the work, and the owner or agent has to hire one first; there is no homeowner plumbing exam here as there is for electrical. Work begun before the permit is issued is charged triple the usual permit fee, and the fee itself comes off a schedule the city publishes as Appendix A to the plumbing code.",
        "sourceUrl": "https://www.shelbycountytn.gov/DocumentCenter/View/39435/2021-IPC-Amendments-Final"
      },
      "electrician-service-call": {
        "requirement": "An electrical permit in Memphis normally goes to a licensed or registered electrical contractor, but a homeowner living in the house may qualify by passing an approved exam at the 70th percentile or better, doing the work themselves or with immediate family, and taking no more than one such permit every two years. If the job adds to the existing system the city wants a load calculation proving the service can carry it, and wiring that has been out of service a year or more must be re-inspected before it is energised.",
        "sourceUrl": "https://www.shelbycountytn.gov/DocumentCenter/View/39391/2020-National-Electrical-Code-with-Local-Amendments"
      }
    }
  },
  "miami-fl": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Miami Building Department",
      "url": "https://www.miami.gov/My-Government/Departments/Building"
    },
    "codeEdition": {
      "text": "Miami enforces the statewide Florida Building Code. The 8th Edition (2023) has been the code in force, and the Florida Building Code Ninth (2026) Edition takes effect on December 31, 2026, after which every permit application and set of plans submitted must meet the new edition.",
      "sourceUrl": "https://www.miamidade.gov/global/economy/building/home.page"
    },
    "permitPolicy": {
      "text": "Florida's owner-builder exemption is what lets a Miami homeowner pull their own permit. It covers improving a one- or two-family home for the owner's own occupancy and not offered for sale or lease, and the owner must provide direct onsite supervision of all work not done by licensed contractors. The owner has to appear in person, sign the permit application, and sign a long disclosure statement accepting legal and financial responsibility; selling or leasing within a year of completion raises a presumption that the exemption was abused. Florida's electrical licensing law carries its own parallel exemption for an owner doing electrical work on a single-family or duplex residence for their own use.",
      "sourceUrl": "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0489/Sections/0489.103.html"
    },
    "codeItems": [
      {
        "text": "Miami runs an Easy Permit program for small jobs that need no plan review, and a water heater change-out is on both the electrical and the plumbing Easy Permit lists, as are a disposal change-out, a residential service repair, re-piping or repairs, and setting an electric water heater. Only a licensed, qualified contractor in good standing can use it; the permit is emailed straight to the address on that contractor's file, so a homeowner cannot run a job through this route.",
        "sourceUrl": "https://www.miami.gov/Permits-Construction/Permit-Catalog/Get-an-Easy-Permit"
      },
      {
        "text": "Miami's electrical Easy Permit list carries a line for water heater replacement only, separate from the plumbing change-out line. A tank swap in Miami can therefore involve a plumbing permit and an electrical permit rather than one trade permit.",
        "sourceUrl": "https://www.miami.gov/Permits-Construction/Permit-Catalog/Get-an-Easy-Permit"
      },
      {
        "text": "Miami prices residential trade permits off the job's estimated cost rather than per fixture, and it says plainly that the published figures exclude the State of Florida and Miami-Dade County surcharges, so the schedule number is never the final bill.",
        "sourceUrl": "https://www.miami.gov/files/assets/public/v/1/document-resources/pdf-docs/building/fee-schedule-exhibit-c-bldg-chpts-10-17-20-508.pdf"
      },
      {
        "text": "Miami attaches a residential Solid Waste surcharge of $0.22 per $100 of estimated construction cost to the permit, with a floor of $26.00 and a ceiling of $600.00, plus a $40.00 non-refundable application fee on every permit.",
        "sourceUrl": "https://www.miami.gov/files/assets/public/v/1/document-resources/pdf-docs/building/fee-schedule-exhibit-c-bldg-chpts-10-17-20-508.pdf"
      },
      {
        "text": "Getting caught without a permit is priced into Miami's schedule. The after-the-fact permit carries a $110.00 base fee, doubled on homestead residential property and quadrupled on commercial, and a separate $500.00 case initiation fee applies to work without a permit.",
        "sourceUrl": "https://www.miami.gov/files/assets/public/v/1/document-resources/pdf-docs/building/fee-schedule-exhibit-c-bldg-chpts-10-17-20-508.pdf"
      },
      {
        "text": "Miami-Dade County's own permit guidance for the area spells out that altering or repairing an electrical or plumbing system needs a permit, and names replacing a hot water heater or a gas appliance as an example, while painting, wallpapering, or putting a ceiling fan into an existing outlet does not. It also notes that a permit is issued in the name of the person doing the work, and that an owner may do unlimited repairs on a single-family home they occupy even though owner-builder permits for new houses are limited to one every two years.",
        "sourceUrl": "https://www.miamidade.gov/permits/library/brochures/home-renovation.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Miami needs a permit, and the city prices residential building, plumbing, mechanical and electrical permits as a percentage of the estimated job cost, with a flat charge for small jobs and a floor underneath every permit.",
        "sourceUrl": "https://www.miami.gov/files/assets/public/v/1/document-resources/pdf-docs/building/fee-schedule-exhibit-c-bldg-chpts-10-17-20-508.pdf",
        "fee": "Residential up to 3 units: 0.50% of estimated construction cost; Residential less than estimated $2,500.00: $45.00; Minimum Permit Fee: $110.00; plus $40.00 non-refundable application fee (State of Florida and Miami-Dade County surcharges not included)",
        "feeAsOf": "April 23, 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "A disposal change-out is on Miami's plumbing Easy Permit list, so a licensed plumber can pull the permit with no plan review and get it by email the same day, and the fee is figured from the estimated job cost with a flat charge for work under $2,500.",
        "sourceUrl": "https://www.miami.gov/files/assets/public/v/1/document-resources/pdf-docs/building/fee-schedule-exhibit-c-bldg-chpts-10-17-20-508.pdf",
        "fee": "Residential up to 3 units: 0.50% of estimated construction cost; Residential less than estimated $2,500.00: $45.00; Minimum Permit Fee: $110.00; plus $40.00 non-refundable application fee",
        "feeAsOf": "April 23, 2026"
      },
      "plumber-service-call": {
        "requirement": "Miami treats a plumbing service call as a permitted job priced off the estimated cost of the work, and a failed inspection is recharged, so a small repair can cost more in fees than the valuation alone suggests.",
        "sourceUrl": "https://www.miami.gov/files/assets/public/v/1/document-resources/pdf-docs/building/fee-schedule-exhibit-c-bldg-chpts-10-17-20-508.pdf",
        "fee": "Residential up to 3 units: 0.50% of estimated construction cost; Residential less than estimated $2,500.00: $45.00; Minimum Permit Fee: $110.00; Re-inspection fee: $57.00; plus $40.00 non-refundable application fee",
        "feeAsOf": "April 23, 2026"
      },
      "electrician-service-call": {
        "requirement": "A residential electrical service repair is on Miami's Easy Permit list and needs no plan review, but it is still a permit priced from the estimated cost of the work, with a minimum and a charge for any reinspection.",
        "sourceUrl": "https://www.miami.gov/files/assets/public/v/1/document-resources/pdf-docs/building/fee-schedule-exhibit-c-bldg-chpts-10-17-20-508.pdf",
        "fee": "Residential up to 3 units: 0.50% of estimated construction cost; Residential less than estimated $2,500.00: $45.00; Minimum Permit Fee: $110.00; Re-inspection fee: $57.00; plus $40.00 non-refundable application fee",
        "feeAsOf": "April 23, 2026"
      },
      "smoke-detector-replacement": {
        "requirement": "Miami's electrical Easy Permit list includes a smoke detector permit for multi-family buildings, so an alarm job in an apartment building goes through the no-plan-review route with a licensed contractor; the list shows no equivalent single-family smoke detector permit.",
        "sourceUrl": "https://www.miami.gov/Permits-Construction/Permit-Catalog/Get-an-Easy-Permit"
      }
    }
  },
  "milwaukee-wi": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Milwaukee Department of Neighborhood Services",
      "url": "https://city.milwaukee.gov/DNS/permits/LicensedContractors"
    },
    "codeEdition": {
      "text": "Milwaukee does not write its own plumbing code. The city adopts the State of Wisconsin plumbing code, chapters SPS 381 through 387, by ordinance, and its Plumbing Inspection Section enforces that text alongside the city's own permit and licensing ordinances.",
      "sourceUrl": "https://city.milwaukee.gov/plumbing"
    },
    "permitPolicy": {
      "text": "Milwaukee's position is that all plumbing work in the city has to be done under a permit from the Development Center, and the permit applicant has to hold one of four credentials: Master Plumber, Master Plumber Restricted - Service, Master Plumber Restricted - Appliance, or Utility Contractor with a plumber's performance bond and a certificate of liability insurance on file with the City Attorney. There is one homeowner exception: the owner of a one-family building who occupies it may apply for a permit for remodeling or alteration work inside that building. Whoever holds the permit calls the Plumbing Inspection Section for each inspection as the work progresses.",
      "sourceUrl": "https://city.milwaukee.gov/plumbing"
    },
    "registration": {
      "text": "Milwaukee licenses trades itself. The city states that electrical contractors and plumbing contractors must be licensed by the City of Milwaukee in order to take out permits, and that a home improvement contractor must be licensed by the city as well as by the State of Wisconsin. The licence lookup is run by the city, with electrical questions going to the DNS Electrical Inspection Section, plumbing to the Plumbing Inspection Section and home improvement to the City Clerk's License Division. No licence fee or bond figure is published on that page.",
      "sourceUrl": "https://city.milwaukee.gov/DNS/permits/LicensedContractors"
    },
    "codeItems": [
      {
        "text": "Milwaukee has a plumbing licence class pitched at appliance work, Master Plumber Restricted - Appliance, and a separate Master Plumber Restricted - Service class. Which class a contractor holds decides what they may pull a Milwaukee plumbing permit for, so a water-heater or appliance job can legitimately be done by a holder of a restricted licence rather than a full master plumber.",
        "sourceUrl": "https://city.milwaukee.gov/plumbing"
      },
      {
        "text": "Milwaukee lists what its plumbing inspectors actually look at as work progresses: the grading of sewers and drains so flow keeps moving downhill, a leak test of the system, materials carrying the approval of a recognised testing laboratory, cross-connections between potable water and any questionable source, hazardous waste being discharged to the sewer, and the vent piping that balances pressure in the system.",
        "sourceUrl": "https://city.milwaukee.gov/plumbing"
      },
      {
        "text": "Milwaukee's electrical fee schedule itemises appliances separately from the plumbing permit: a water heater is its own $15 electrical line and an air conditioner outlet in a one- or two-family dwelling is $20, both on top of the one- and two-family minimum electrical permit fee.",
        "sourceUrl": "https://city.milwaukee.gov/ImageLibrary/Groups/ccClerk/Ordinances/Volume-2/CH200-sub5.pdf"
      },
      {
        "text": "Milwaukee charges escalating electrical reinspection fees of $50 for the first, $100 for the second and $200 for each one after that, and on the plumbing side sets a $75 minimum for any inspection, reinspection, test or retest, so a failed inspection has a published price rather than being absorbed.",
        "sourceUrl": "https://city.milwaukee.gov/ImageLibrary/Groups/ccClerk/Ordinances/Volume-2/CH200-sub5.pdf"
      },
      {
        "text": "For a new fire alarm system or an alteration to one, Milwaukee requires a full witness test coordinated with two DNS trades inspectors rather than a single sign-off.",
        "sourceUrl": "https://city.milwaukee.gov/DNS/Inspections_Sections/Electrical"
      },
      {
        "text": "Milwaukee's electrical inspection page states that the state has adopted the 2011 National Electrical Code and that the city adopts the state electrical code, SPS 316, by reference, with that state code in turn adopting NFPA 70. The page tells applicants to confirm their particular installation with their district inspector.",
        "sourceUrl": "https://city.milwaukee.gov/DNS/Inspections_Sections/Electrical"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Milwaukee requires a permit for all plumbing work, so a water heater swap is permitted and inspected, and the charge is the city's minimum plumbing permit fee plus a per-appliance connection fee; an electric heater also picks up its own line on the electrical schedule.",
        "sourceUrl": "https://city.milwaukee.gov/ImageLibrary/Groups/ccClerk/Ordinances/Volume-2/CH200-sub5.pdf",
        "fee": "Plumbing: minimum permit fee $75, which also applies to installations in one- and 2-family buildings, plus $15 for installation and connection of each plumbing fixture or appliance, plus a $10 processing fee per plumbing permit; Electrical schedule lists Water heater $15",
        "feeAsOf": "Milwaukee Code s. 200-33-43, page printed 12/15/2020 (electrical lines in s. 200-33-11, page printed 12/14/2021)"
      },
      "plumber-service-call": {
        "requirement": "There is no small-job exemption in Milwaukee: the city says all plumbing work must be done under a permit from the Development Center, the fee starts at a published minimum even in a one- or two-family home, and any inspection, reinspection, test or retest carries its own minimum charge.",
        "sourceUrl": "https://city.milwaukee.gov/ImageLibrary/Groups/ccClerk/Ordinances/Volume-2/CH200-sub5.pdf",
        "fee": "$75 minimum permit fee (also applies to installations in one- and 2-family buildings); $15 per plumbing fixture or appliance installed and connected; $10 processing fee per plumbing permit; $75 minimum for any inspection, reinspection, test or retest",
        "feeAsOf": "Milwaukee Code s. 200-33-43, page printed 12/15/2020"
      },
      "garbage-disposal-replacement": {
        "requirement": "Because Milwaukee requires a permit for all plumbing work and prices it per fixture or appliance installed and connected, a disposer swap is billed as the minimum plumbing permit fee plus the per-appliance charge rather than being treated as exempt maintenance.",
        "sourceUrl": "https://city.milwaukee.gov/ImageLibrary/Groups/ccClerk/Ordinances/Volume-2/CH200-sub5.pdf",
        "fee": "$75 minimum permit fee plus $15 for installation and connection of each plumbing fixture or appliance, plus a $10 processing fee per plumbing permit",
        "feeAsOf": "Milwaukee Code s. 200-33-43, page printed 12/15/2020"
      },
      "electrician-service-call": {
        "requirement": "A Milwaukee electrical permit for a one- or two-family dwelling starts at a published minimum fee and then adds a small amount for each switch, receptacle or device outlet, with a separate flat charge for a service and service switch, and reinspections are billed at rising rates.",
        "sourceUrl": "https://city.milwaukee.gov/ImageLibrary/Groups/ccClerk/Ordinances/Volume-2/CH200-sub5.pdf",
        "fee": "Minimum permit fee: $85 for installations and repairs in one- and 2-family dwellings ($95 in other buildings); Outlet for switch, receptacle, device, etc.: $2; Service with one service switch up to 400 amps: $100, each additional service switch $25; Feeder up to 400 amps: $40; Reinspection $50 first, $100 second, $200 each additional; $10 processing fee per electrical permit",
        "feeAsOf": "Milwaukee Code s. 200-33-11, page printed 12/14/2021"
      }
    }
  },
  "minneapolis-mn": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Minneapolis Development Review, Community Planning & Economic Development",
      "url": "https://www.minneapolismn.gov/business-services/licenses-permits-inspections/construction-permits/"
    },
    "codeEdition": {
      "text": "Minnesota sets one statewide code and Minneapolis enforces it. The 2020 Minnesota State Building Code took effect March 31, 2020, except the Minnesota Mechanical and Fuel Gas Code which took effect April 6, 2020, and it includes the 2020 Minnesota Residential Code and 2020 Minnesota Plumbing Code. Supplements have since been added for adult changing stations, effective August 15, 2025, and window cleaning safety features, effective November 7, 2025, and the 2024 Minnesota Commercial Energy Code took effect January 5, 2024. Electrical work is judged against the 2026 National Electrical Code, which Minnesota adopted without amendment effective August 17, 2026.",
      "sourceUrl": "https://www.dli.mn.gov/business/codes-and-laws/2020-minnesota-state-building-code"
    },
    "permitPolicy": {
      "text": "An individual who owns and lives in a unit of a one- to four-unit dwelling may pull their own Minneapolis construction permit and must show valid photo ID; a corporation, LLC or partnership cannot. An owner-occupant of an attached or detached single-family home may also do their own plumbing or mechanical work, but is specifically not allowed to work on gas-fired heating equipment. Anyone who builds or improves more than one property within any 24-month period must hold a State of Minnesota Residential Building Contractor or Residential Remodeler licence, and contractors applying for a building permit must show a residential specialty contractor licence or one of those state licences.",
      "sourceUrl": "https://www.minneapolismn.gov/business-services/licenses-permits-inspections/construction-permits/permits-overview/permit-applicants/"
    },
    "registration": {
      "text": "Minneapolis licenses trade contractors itself on top of the state licence, and the 2026 city licence fee is $299 each for a Plumber, a Gas Fitter, and a Heating, Ventilation and Air Conditioning Installer. Separately, masters and journeymen need a city Certificate of Competency Card to work in Minneapolis in the fuel gas fitter, plumber/gas specific, refrigeration, warm air/ventilation, and steam and hot water trades. The card requires at least four years of work experience and a city exam, the plumbing/gas specific exam also requires a state plumbing licence at the equivalent trade level plus gas-specific education, and the city recognises reciprocity with Saint Paul.",
      "sourceUrl": "https://www.minneapolismn.gov/business-services/licenses-permits-inspections/business-licenses/contractors/competency-cards/"
    },
    "codeItems": [
      {
        "text": "Minneapolis does not issue electrical permits at all. The city tells applicants to get electrical and elevator permits from the Minnesota Department of Labor and Industry, so a panel or circuit job is permitted and inspected by the state while the plumbing on the same project is permitted by the city. That means two separate applications, two fee schedules and two inspectors on one water heater or remodel.",
        "sourceUrl": "https://www.minneapolismn.gov/business-services/licenses-permits-inspections/construction-permits/permits-overview/permit-types/"
      },
      {
        "text": "Minneapolis's exemption for small plumbing repairs is conditional, and the conditions are what an inspector looks at. The exemption only holds in a one- or two-family dwelling if conditions are sanitary and not hazardous and if you do not alter or replace the existing water supply line or plumbing piping system. Touch the supply line or the piping system and the same job needs a permit.",
        "sourceUrl": "https://www.minneapolismn.gov/business-services/licenses-permits-inspections/construction-permits/exempt-from-permit/"
      },
      {
        "text": "Installing a non-testable backflow preventer device is on Minneapolis's list of work that requires a plumbing permit, alongside water heaters, water piping and connecting gas appliances. Minneapolis also runs a separate regulated backflow assembly programme with its own testing requirements, forms and fees.",
        "sourceUrl": "https://www.minneapolismn.gov/business-services/licenses-permits-inspections/construction-permits/permits-overview/permit-types/plumbing-permits/"
      },
      {
        "text": "If you start construction in Minneapolis before the permit is issued, the city may double your fees, and may require you to demolish some or all of the work either to bring it into compliance or simply so inspectors can see whether it complies. Emergency repairs are the exception: you can do the work first, but the permit application has to be filed by the next working business day.",
        "sourceUrl": "https://www.minneapolismn.gov/business-services/licenses-permits-inspections/construction-permits/permits-overview/fees/"
      },
      {
        "text": "On the state-issued electrical permit, Minnesota requires every bit of wiring to be inspected before it is concealed by insulation, drywall, sheathing, panelling, backfilled trenches or poured concrete, and wiring covered before that inspection has to be opened back up. Checking the rough-in box commits you to a minimum of two inspection trips, and electrical inspectors audit the fee at the final inspection and can invoice more if the circuit count was understated.",
        "sourceUrl": "https://www.dli.mn.gov/sites/default/files/pdf/ele-permit-instr.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Minneapolis requires a city plumbing permit to replace or install a water heater, and the permit cannot fall below the city's published minimum plumbing fee.",
        "sourceUrl": "https://www.minneapolismn.gov/business-services/licenses-permits-inspections/construction-permits/permits-overview/fees/plumbing/",
        "fee": "Minimum Fee - Residential & Commercial $85.20 (Includes $1.00 State Surcharge); a non-heating gas burner not exceeding 399,999 Btu is listed at $73.30"
      },
      "plumber-service-call": {
        "requirement": "Minneapolis requires a plumbing permit to replace or install fixtures or water piping, or to connect a gas appliance, and the permit is priced per fixture or per length of piping but never below the city minimum; small repairs such as a leaking fixture, a broken drain, waste or vent pipe, a sink faucet or a clean-out plug are exempt in a one- or two-family home as long as the water supply line and piping system are left alone.",
        "sourceUrl": "https://www.minneapolismn.gov/business-services/licenses-permits-inspections/construction-permits/permits-overview/fees/plumbing/",
        "fee": "Minimum Fee - Residential & Commercial $85.20 (Includes $1.00 State Surcharge); $41.40 for a full fixture, a fixture set only, or waste and vent only; $41.40 per each 100 lineal feet of water distribution piping replaced or extended; $41.40 per each $500 of alterations"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Minneapolis is permitted and inspected by the Minnesota Department of Labor and Industry rather than the city, and a homeowner working on their own existing home pays a minimum inspection fee plus a statutory permit fee and surcharge, with a second inspection charged if any wiring will be concealed.",
        "sourceUrl": "https://www.dli.mn.gov/sites/default/files/pdf/ele-homeowner-existing.pdf",
        "fee": "$55.00 minimum fee for inspection, plus another $55.00 if a rough-in inspection is required, plus a $25.00 permit fee imposed on every permit per M.S. 326B.37 and a $1.00 surcharge per M.S. 326B.148; alternatively the fee is calculated at $35 per power source for a 0-400 amp service and $12 per feeder or circuit where fewer than 15 are installed, whichever total is greater",
        "feeAsOf": "REV 8.2025"
      },
      "garbage-disposal-replacement": {
        "requirement": "Minneapolis does not require a permit to install a new garbage disposal or replace an existing one in a one- or two-family dwelling, provided conditions are sanitary and not hazardous and you do not alter or replace the existing water supply line or plumbing piping system.",
        "sourceUrl": "https://www.minneapolismn.gov/business-services/licenses-permits-inspections/construction-permits/exempt-from-permit/"
      },
      "smoke-detector-replacement": {
        "requirement": "Minneapolis lists installing, replacing and repairing smoke alarms and carbon monoxide detectors as interior work that does not require a construction permit.",
        "sourceUrl": "https://www.minneapolismn.gov/business-services/licenses-permits-inspections/construction-permits/exempt-from-permit/"
      }
    }
  },
  "mobile-al": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Mobile Department of Building Safety (Build Mobile)",
      "url": "https://www.cityofmobile.gov/departments/build-mobile/"
    },
    "codeEdition": {
      "text": "Mobile adopted a full set of 2021 International codes on November 8, 2022, each by its own ordinance with city amendments attached, all effective sixty days after adoption: the 2021 International Building Code as 'The Building Code of the City of Mobile', the 2021 International Residential Code as the 'Residential Building Code of the City of Mobile', the 2021 International Plumbing Code, the 2021 International Existing Building Code, the 2021 International Property Maintenance Code, and the 2020 National Electrical Code as the 'Electrical Code of the City of Mobile'. The city's own code department is renamed Build Mobile in the residential code amendments.",
      "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901183965-057.pdf"
    },
    "permitPolicy": {
      "text": "A homeowner may pull a permit in Mobile only for work they physically do themselves on the home they own and occupy. For plumbing the homeowner must pass an in-house competency test given by the Code Official and sign an affidavit, with repairing or replacing an existing water service or sewer line excepted from the test; for electrical work the homeowner must pass an in-house test and execute an electrical affidavit. Anyone other than the owner doing the work counts as a contractor. An electrical permit application is granted only to a homeowner or to a licensed and bonded electrical contractor, and a plumbing permit is issued only once the application has been signed by a licensed master plumber.",
      "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901163845-055.pdf"
    },
    "registration": {
      "text": "Mobile registers and bonds trades on top of the state ticket. Plumbing contractors must hold the required City, County or State licence, register their name and place of business in the Code Official's book, and keep a current $10,000 licence and permit bond on file approved by the city Legal Department; a Master or Journeyman Plumber certified by Alabama must be on the job and in charge. Electricians must hold a certificate of competency from the City of Mobile Board of Electrical Examiners before working as a master, journeyman or low-voltage electrician, must carry a $10,000 licence and surety bond signed by the master certificate holder, and must show 14 classroom hours of approved continuing education every three years to renew. Published card and exam fees include $50 journeyman and maintenance electrician renewal, $30 master electrician renewal with a business licence, a $25 state issuance fee, $135 master exam, and $85 journeyman and maintenance exams.",
      "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901131119-048.pdf"
    },
    "codeItems": [
      {
        "text": "Mobile strips the permit exemptions out of the residential code: the IRC's 'work exempt from permits' lists for electrical, gas, mechanical and plumbing are each deleted in their entirety, so the usual small-job carve-outs a national guide cites do not exist here.",
        "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901183965-057.pdf"
      },
      {
        "text": "Mobile also deletes the IRC's whole mechanical, fuel gas, plumbing and electrical parts, including Chapter 28 Water Heaters, Chapter 20 Boilers and Water Heaters and Chapter 17 Combustion Air. Water heater work on a house is judged against the 2021 International Plumbing Code, gas work against the 2021 International Fuel Gas Code and wiring against the 2020 National Electrical Code instead.",
        "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901183965-057.pdf"
      },
      {
        "text": "Attic and overhead water heaters get Mobile-specific rules. Every tank-type heater or storage tank in an attic or overhead space must be reachable by a permanent fixed staircase, the attic passageway must be at least 30 inches high and 22 inches wide with continuous solid flooring at least 24 inches wide and no more than 20 feet long, and a level service space at least 30 by 30 inches must sit at the service side. Tankless units are allowed in attics only with a pan, and no water heater may be installed above a drop ceiling.",
        "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901163845-055.pdf"
      },
      {
        "text": "Mobile rewrites the drain-pan rule so the pan must be at least 1 1/2 inches deep and drained by an indirect, hot-rated waste pipe of at least 1 inch diameter, and it narrows TPR and pan discharge to a waste receptor or to the outdoors only.",
        "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901163845-055.pdf"
      },
      {
        "text": "Two more Mobile additions an inspector will look for on a heater swap: non-metallic pipe is banned within 6 inches of the inlet, outlet or vent of any water heater unless an approved transition fitting on an electric heater is documented by the manufacturer, and the electrical disconnect, timers, controls and fuel shutoff must sit within 6 feet of the heater and no more than 6 feet above the finished floor, with an identifying label.",
        "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901163845-055.pdf"
      },
      {
        "text": "Mobile sets minimum water heater capacities of its own. Residential heaters must be sized from the city's added Table 506 by fuel and bedroom count, and commercial heaters must be sized by an Alabama-licensed design professional, with a 30-gallon minimum for any food or drink establishment.",
        "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901163845-055.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater needs a plumbing permit in Mobile, and the city's plumbing fee schedule charges a $10 minimum plumbing permit plus $5 per fixture unit, with each inspection $5; a gas heater also needs a gas permit, whose minimum is $30. The city lets a state-certified Master Gas Fitter buy the water heater permit, held to the same qualifications as a plumber.",
        "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901145528-052.pdf",
        "fee": "$10.00 minimum plumbing permit + $5.00 each fixture unit + $5.00 each inspection; gas permit minimum $30.00",
        "feeAsOf": "Building Codes Permit Fee Schedule Ordinance adopted November 8, 2022, effective 60 days after adoption"
      },
      "plumber-service-call": {
        "requirement": "Most plumbing work in Mobile needs a permit: the minimum plumbing permit is $10.00 plus $5.00 per fixture unit, and a $1.00 issuance fee is added to every permit. The only jobs the city exempts are stopping leaks in drains, water, soil, waste or vent pipe, clearing stoppages, repairing leaks in pipes, valves or fixtures, and pulling and resetting a water closet, and even then replacing a defective concealed pipe counts as new work needing a permit.",
        "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901145528-052.pdf",
        "fee": "$10.00 minimum plumbing permit + $5.00 each fixture unit; $1.00 permit issuance fee on all permits",
        "feeAsOf": "Building Codes Permit Fee Schedule Ordinance adopted November 8, 2022, effective 60 days after adoption"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Mobile needs a permit from Build Mobile, pulled by the homeowner doing their own work or by a licensed and bonded electrical contractor with a master or journeyman electrician on the job and in charge. The electrical minimum permit fee is $10.00; the schedule then prices the specific job, for example $15.00 for a 200-amp or smaller service or service repair, $15.00 for repairs to outlets or fixtures, and $5.00 for a water heater circuit. Minor repair work such as changing lamps or plugging approved portable equipment into existing receptacles is exempt.",
        "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901145528-052.pdf",
        "fee": "$10.00 minimum electrical permit; $15.00 main service or service repair up to 200 amps; $15.00 repairs to outlets or fixtures",
        "feeAsOf": "Building Codes Permit Fee Schedule Ordinance adopted November 8, 2022, effective 60 days after adoption"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal is a plumbing fixture connection, and Mobile's plumbing fee schedule charges $5.00 per fixture unit against a $10.00 minimum plumbing permit. The city's only plumbing permit exemptions are leak stopping, clearing stoppages and removing and resetting a water closet where no valves, pipes or fixtures are replaced or rearranged, and Mobile deleted the IRC's residential plumbing exemption list outright.",
        "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901145528-052.pdf",
        "fee": "$10.00 minimum plumbing permit + $5.00 each fixture unit",
        "feeAsOf": "Building Codes Permit Fee Schedule Ordinance adopted November 8, 2022, effective 60 days after adoption"
      },
      "smoke-detector-replacement": {
        "requirement": "Mobile's electrical fee schedule prices smoke detectors in the same band as fixtures and ballasts, at $7.00 for 1 to 10 devices, rising with count, against a $10.00 electrical permit minimum. Because the city deleted the IRC's electrical permit exemptions, hardwired alarm work is judged against the 2020 National Electrical Code as adopted by Mobile rather than the IRC.",
        "sourceUrl": "https://www.cityofmobile.gov/uploads/22110901145528-052.pdf",
        "fee": "$7.00 for 1-10 fixtures, ballasts or smoke detectors; $10.00 minimum electrical permit",
        "feeAsOf": "Building Codes Permit Fee Schedule Ordinance adopted November 8, 2022, effective 60 days after adoption"
      }
    }
  },
  "nashville-tn": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Metro Nashville & Davidson County Department of Codes and Building Safety",
      "url": "https://www.nashville.gov/departments/codes"
    },
    "codeEdition": {
      "text": "Metro Nashville adopted the 2024 International Building, Residential, Existing Building, Fuel Gas, Mechanical, Plumbing, Swimming Pool and Spa, and Energy Conservation Codes, each with local amendments, by ordinance BL2025-898. Electrical work is under the 2023 National Electrical Code, and accessibility under ICC A117.1-2017.",
      "sourceUrl": "https://www.nashville.gov/departments/codes/codes-administration/adopted-codes-list"
    },
    "permitPolicy": {
      "text": "A Nashville property owner who lives in, or intends to live in, a single-family house may pull their own building permit as a self permit, taking on full responsibility for meeting the zoning, building and trades codes, and the city requires a notarized Affidavit of Exemption and Self Permit Affidavit. A self permit is not allowed for a detached accessory dwelling unit. Trade permits are a tighter case: only a licensed contractor with an ePermits account can apply online, and anyone else has to apply in person at the Codes department.",
      "sourceUrl": "https://www.nashville.gov/departments/codes/construction-and-permits/residential-building-permits"
    },
    "registration": {
      "text": "Nashville runs its own contractor registration on top of the state credential. A master plumber registers as a Metropolitan Plumbing Contractor under Metropolitan Code chapter 6.52, section 140, and an electrician registers as a Metropolitan Electrical Contractor under chapter 6, sections 6.20 and 140. Registration also requires a continuous permit bond running to the Metropolitan Government, which covers damage to public property and the cost of repairs a property owner incurs if the contractor does not follow the city's codes.",
      "sourceUrl": "https://filetransfer.nashville.gov/portals/0/sitecontent/Codes/docs/public_docs/Bond%20Permit%20Form-2010.pdf"
    },
    "codeItems": [
      {
        "text": "Nashville rewrote the plastic vent rules in the 2024 IRC and the 2024 International Fuel Gas Code. Plastic piping used to vent an appliance must be listed and labeled to UL 1738, the venting standard, not merely to a plumbing standard, and must be installed to the vent manufacturer's instructions with a contrasting-color primer where primer is required. The city enforced this from July 15, 2025 and has required it on all projects since January 1, 2026, which matters for any high-efficiency water heater or furnace vented in PVC or CPVC.",
        "sourceUrl": "https://www.nashville.gov/departments/codes/news/mechanical-code-amendments-offer-clarity-flue-venting"
      },
      {
        "text": "Metro Nashville requires a backflow preventer with its meter on large residences as well as on pools, irrigation and sprinkler systems. It has to go directly behind and as close to the water meter as possible, outside the structure, at or near the meter with no service branches upstream, at least a foot above the 100-year floodplain, and on ground that drains. Only a licensed plumber may install it.",
        "sourceUrl": "https://www.nashville.gov/departments/codes/construction-and-permits/building-permits-central/backflow"
      },
      {
        "text": "A Nashville backflow preventer must pass an initial Metro Water Services inspection and then an inspection every year after that. The water is shut off during the test, the plumber has to have test ports in place, and the device and meter must be accessible. A failed test means the owner calls Metro Water Services to schedule a reinspection.",
        "sourceUrl": "https://www.nashville.gov/departments/codes/construction-and-permits/building-permits-central/backflow"
      },
      {
        "text": "Nashville's own code text lists a water heater or circulation tank as a gas or mechanical appliance in its own right, separate from the plumbing fixture count, which is why replacing a gas water heater can draw both a plumbing permit and a gas/mechanical permit on the same job.",
        "sourceUrl": "https://www.nashville.gov/sites/default/files/2025-12/Building-Permit-Fee-Scheudle-2025.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Nashville prices a water heater swap as a line item on the trade permit, and because the city treats the heater as both a plumbing fixture and a gas or mechanical appliance, a gas unit can take two permits, each with its own minimum.",
        "sourceUrl": "https://www.nashville.gov/sites/default/files/2025-12/Building-Permit-Fee-Scheudle-2025.pdf",
        "fee": "Plumbing permit: Minimum fee (each permit) $75.00; Hot water heater $43.00. Gas/mechanical permit: Minimum fee (each permit) $75.00; Hot water heater $21.00. Electrical permit: Minimum fee (each permit) $75.00; Water heaters, residential, each $15.00. Reinspection fee (each) $50.00.",
        "feeAsOf": "2025"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal in Nashville is plumbing work covered by the city's plumbing permit, which carries a flat minimum plus a charge for each fixture outlet, counted whether or not the fixture is actually set when the work is done.",
        "sourceUrl": "https://www.nashville.gov/sites/default/files/2025-12/Building-Permit-Fee-Scheudle-2025.pdf",
        "fee": "Plumbing permit: Minimum fee (each permit) $75.00; Plumbing fixtures (each fixture) $11.00",
        "feeAsOf": "2025"
      },
      "plumber-service-call": {
        "requirement": "Nashville's plumbing permit fee schedule expressly covers repairs and alterations to an existing plumbing system, so a service call that changes the plumbing is permitted and starts at the city's flat minimum.",
        "sourceUrl": "https://www.nashville.gov/sites/default/files/2025-12/Building-Permit-Fee-Scheudle-2025.pdf",
        "fee": "Minimum fee (each permit) $75.00; Plumbing fixtures (each fixture) $11.00; Each additional building drain $32.00; Sewer connection $80.00; Water service connection $80.00; Reinspection fee (each) $50.00",
        "feeAsOf": "2025"
      },
      "electrician-service-call": {
        "requirement": "An electrical permit in Nashville covers additions, alterations and repairs to an existing system and never costs less than the city's flat minimum, and if the work starts before the permit is issued the fees are tripled.",
        "sourceUrl": "https://www.nashville.gov/sites/default/files/2025-12/Building-Permit-Fee-Scheudle-2025.pdf",
        "fee": "Minimum fee (each permit) $75.00; 10 or fewer lighting outlets $6.00, each additional outlet over 10 $1.00; Service, new installation, increasing size, or relocation, per meter $12.00; Distribution, lighting or switch panels 200 amperes or less, each $10.00; Reinspection fee (each) $50.00; fees tripled where work begins before a permit is issued",
        "feeAsOf": "2025"
      }
    }
  },
  "new-orleans-la": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of New Orleans Department of Safety & Permits",
      "url": "https://nola.gov/next/safety-and-permits/home/"
    },
    "codeEdition": {
      "text": "New Orleans enforces the construction codes adopted by the Louisiana State Uniform Construction Code Council; for houses that is the Louisiana Residential Code 2021, based on the 2021 International Residential Code with state amendments, in force since January 1, 2023. The city's own permit pages describe the adopted codes as the International Construction Code and International Fire Code as adopted by the City of New Orleans.",
      "sourceUrl": "https://up.codes/viewer/louisiana/irc-2021"
    },
    "permitPolicy": {
      "text": "A homeowner can apply for the building permit itself, but not for the trade permits. An electrical permit in New Orleans can be obtained only by an electrical contractor holding a Class \"A\" Electrical License from the city, a mechanical or gas permit only by a contractor holding the matching Class \"A\" city mechanical licence, and a plumbing permit only by an Orleans Parish licensed master plumber.",
      "sourceUrl": "https://nola.gov/electrical-permit/"
    },
    "registration": {
      "text": "New Orleans licenses tradespeople itself on top of the state licence. An electrician working in the city must hold and renew a city Electrical License annually; the Class \"A\" Master Electrical Contractor licence costs $125.00, only one holder is allowed per company, and the applicant must carry general liability cover of at least $500,000 plus workers compensation with the City of New Orleans named as certificate holder.",
      "sourceUrl": "https://nola.gov/class-a-electrical-license/"
    },
    "codeItems": [
      {
        "text": "New Orleans treats a backflow preventer as mechanical equipment for zoning purposes: it cannot sit in a required front or corner-side yard without a variance from the Board of Zoning Adjustments, and anything placed in a side or rear yard must not block emergency access between the house and the property line.",
        "sourceUrl": "https://nola.gov/review-requirements-for-backflow-preventers/"
      },
      {
        "text": "On mechanical and fuel-gas work the city's Mechanical Division wants paperwork a national guide would not mention: a blower-door test by nationally certified personnel on New Orleans report forms showing 5 to 7 air changes per hour at 50 pascals (or an approved visual inspection instead), duct-leakage test reports before occupancy unless the air handler and ducts are all inside conditioned space, and Manual J, S and D calculations certified by affidavit in One Stop for new construction and substantial renovations.",
        "sourceUrl": "https://nola.gov/mechanical-permit/"
      },
      {
        "text": "A wood-burning fireplace in New Orleans must have its outdoor combustion air visible to the inspector at rough-in, before the wall is closed up.",
        "sourceUrl": "https://nola.gov/mechanical-permit/"
      },
      {
        "text": "Louisiana's residential code sets the water-heater drain pan at not less than 2 inches deep with a drain of at least 1 inch, but adds that a replacement water heater does not have to be given a pan drain where none was installed before.",
        "sourceUrl": "https://up.codes/viewer/louisiana/irc-2021/chapter/28/water-heaters"
      },
      {
        "text": "Where the house falls under the Historic District Landmarks Commission or the Vieux Carre Commission, New Orleans adds a 50 percent surcharge to the building permit, plan review, demolition and sign permit fees.",
        "sourceUrl": "https://www.nola.gov/nola/media/One-Stop-Shop/Safety%20and%20Permits/SP-Building-Permit-Fee-Schedule.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in New Orleans goes on a Mechanical Gas permit, which only a Class \"A\" city-licensed mechanical gas contractor can apply for, and the fee is charged per heater by burner input. Removing or replacing the water piping also needs a separate plumbing permit from the Sewerage and Water Board.",
        "sourceUrl": "https://nola.gov/nola/media/One-Stop-Shop/Safety%20and%20Permits/Mechanical/OSS_SP_MECHANICAL_PERMIT_APPLICATION_SUPPLEMENT_D2-Gas.pdf",
        "fee": "Water heaters (gas, electric, heat pump or geothermal): through 50K BTU $20.00 each; 51K to 200K BTU $25.00 each"
      },
      "electrician-service-call": {
        "requirement": "New Orleans requires an electrical permit to install, repair, replace or alter any electrical apparatus or equipment, with changing light bulbs and fuses the only exceptions, and the permit can be pulled only by a contractor holding a Class \"A\" Electrical License from the city.",
        "sourceUrl": "https://nola.gov/electrical-permit/",
        "fee": "$40 application fee plus $3 per new circuit plus $0.30 per service amperage"
      },
      "plumber-service-call": {
        "requirement": "A plumbing permit is needed in New Orleans to remove or replace any water piping or plumbing fixture, it is issued by the Sewerage and Water Board rather than the Department of Safety and Permits, and only an Orleans Parish licensed master plumber may apply for it.",
        "sourceUrl": "https://www.nola.gov/nola/media/One-Stop-Shop/Safety%20and%20Permits/SP-Brochure-Guidelines-for-Building-Permits.pdf"
      },
      "garbage-disposal-replacement": {
        "requirement": "Swapping a garbage disposal counts as replacing a plumbing fixture, so it falls under the Sewerage and Water Board plumbing permit that only an Orleans Parish licensed master plumber can pull; if the job adds a circuit, a city electrical permit is needed too.",
        "sourceUrl": "https://www.nola.gov/nola/media/One-Stop-Shop/Safety%20and%20Permits/SP-Brochure-Guidelines-for-Building-Permits.pdf"
      },
      "smoke-detector-replacement": {
        "requirement": "New Orleans exempts only light bulbs and fuses from its electrical permit rule, so wired-in alarm work is not on the exempt list, and an electrical permit can be taken out only by a contractor with a Class \"A\" city Electrical License.",
        "sourceUrl": "https://nola.gov/electrical-permit/",
        "fee": "$40 application fee plus $3 per new circuit plus $0.30 per service amperage"
      }
    }
  },
  "new-york-ny": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "New York City Department of Buildings (DOB)",
      "url": "https://www.nyc.gov/site/buildings/index.page"
    },
    "codeEdition": {
      "text": "The 2022 New York City Construction Codes are the current set, covering the General Administrative Provisions, Building Code, Fuel Gas Code, Mechanical Code and Plumbing Code. The electrical code is on its own cycle and is tracked separately by DOB.",
      "sourceUrl": "https://www.nyc.gov/site/buildings/codes/codes.page"
    },
    "permitPolicy": {
      "text": "A homeowner cannot pull their own plumbing permit in New York City. Plumbing and fire-suppression permits are issued only to a Licensed Master Plumber, and before work starts the owner has to hire a Licensed Master Plumber, a New York State licensed professional engineer or a registered architect to file. DOB inspects all plumbing work that needed a permit, and the master plumber must close out every inspection and obtain final plumbing sign-off.",
      "sourceUrl": "https://www.nyc.gov/site/buildings/property-or-business-owner/plumbing-permits-applications.page"
    },
    "registration": {
      "text": "Residential repair work in New York City needs a Home Improvement Contractor license from the Department of Consumer and Worker Protection, on top of any trade license. The two-year license fee runs from $50 to $250 depending on where in the cycle the application falls, and the applicant must either pay $200 to join the Home Improvement Business Trust Fund or post a $20,000 surety bond.",
      "sourceUrl": "https://www.nyc.gov/site/dca/businesses/license-checklist-home-improvement-contractor.page"
    },
    "codeItems": [
      {
        "text": "New York City will not let a water heater relief-valve discharge line run to the outdoors or tie into the drainage system. It has to end through an air gap in the same room as the water heater, somewhere building occupants can readily see it, no more than 6 inches above the floor or waste-receptor rim, with no trap, no valves or tee fittings and no threaded end.",
        "sourceUrl": "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-161876"
      },
      {
        "text": "A water heater drain pan in New York City must be at least 1 1/2 inches deep and drain through a 3/4 inch or larger indirect waste pipe. The city adds an exception a national guide would not mention: a replacement water heater does not need a pan drain if none was there before, provided a leak detector is installed inside the pan.",
        "sourceUrl": "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-161892"
      },
      {
        "text": "A battery-powered smoke alarm installed in New York City must carry a non-removable, non-replaceable battery that lasts at least 10 years and must sound an audible end-of-life warning, so an ordinary 9-volt swap-out alarm will not comply. The rule comes from Local Law 112 of 2013 and Administrative Code 28-312.5, and it does not reach alarms powered by the building wiring.",
        "sourceUrl": "https://www.nyc.gov/assets/buildings/bldgs_bulletins/bb_2018-006.pdf"
      },
      {
        "text": "An in-kind water heater swap only qualifies for the simpler Limited Alteration Application Category 2 route if the unit is direct-vent gas-fired and the building is a one- or two-family dwelling of four stories or less. Category 2 has no cost ceiling but the filing must include all appliance and labor costs, and only one work type can go on one application.",
        "sourceUrl": "https://www.nyc.gov/site/buildings/industry/limited-plumbing-alterations.page"
      },
      {
        "text": "The 2025 New York City Electrical Code became fully operative on December 21, 2025. It is built on the 2020 edition of NFPA 70 with New York City amendments, so a 2023 NEC reference in a national guide will not match what an inspector here enforces.",
        "sourceUrl": "https://www.nyc.gov/site/buildings/codes/electrical-code.page"
      },
      {
        "text": "Simple repairs and straight replacement of existing faucets, toilets and sinks count as cosmetic in New York City and need no permit. Broader replacement or relocation of plumbing, gas piping and equipment can be done as ordinary plumbing work without a permit, but only by a Licensed Master Plumber.",
        "sourceUrl": "https://www.nyc.gov/site/buildings/property-or-business-owner/do-i-need-a-permit.page"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in New York City is filed as a Limited Alteration Application by a Licensed Master Plumber, and DOB inspects the work before sign-off.",
        "sourceUrl": "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-156650",
        "fee": "$130 minimum filing fee (Limited Alteration Application, one-, two- or three-family dwelling)",
        "feeAsOf": "June 2023"
      },
      "plumber-service-call": {
        "requirement": "Swapping an existing faucet, toilet or sink is cosmetic and needs no permit in New York City, but work on the waste, water or gas piping takes a permit that only a Licensed Master Plumber can pull, usually as a Limited Alteration Application.",
        "sourceUrl": "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-156650",
        "fee": "$130 minimum filing fee (Limited Alteration Application, one-, two- or three-family dwelling)",
        "feeAsOf": "June 2023"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in New York City needs an electrical permit filed by a DOB-licensed Master or Special Electrician, and the city charges a flat application fee rather than pricing by job value.",
        "sourceUrl": "https://www.nyc.gov/assets/buildings/rules/1_RCNY_101-03.pdf",
        "fee": "$40 electrical permit initial application (excluding minor work); $15 for minor work"
      },
      "smoke-detector-replacement": {
        "requirement": "New York City does not sell a permit for swapping a smoke alarm, but a battery-powered replacement must be a UL 217 unit with a sealed 10-year non-removable battery and an audible end-of-life signal.",
        "sourceUrl": "https://www.nyc.gov/assets/buildings/bldgs_bulletins/bb_2018-006.pdf"
      }
    }
  },
  "newark-nj": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Newark Department of Engineering (Office of Uniform Construction Code)",
      "url": "https://newarknj.gov/departments/engineering"
    },
    "codeEdition": {
      "text": "Newark enforces the New Jersey Uniform Construction Code. As of the August 17, 2026 adoption date the state subcodes are the 2024 International Residential Code (NJ edition) for one- and two-family homes, the 2024 National Standard Plumbing Code (NJ edition), the 2023 National Electrical Code (NFPA 70), the 2024 International Fuel Gas Code and the 2024 International Mechanical Code.",
      "sourceUrl": "https://www.nj.gov/dca/codes/codreg/current.shtml"
    },
    "permitPolicy": {
      "text": "Plumbing, electrical and HVAC work in New Jersey may only be done by someone licensed for that trade, with one exception: a single-family homeowner may do the work on his or her own dwelling. Newark's own Department of Engineering issues all construction permits; under the state code each municipality sets its own permit fees by ordinance, and every New Jersey permit also carries a state training surcharge of $1.90 per $1,000 of construction value with a $1.00 minimum.",
      "sourceUrl": "https://www.nj.gov/dca/codes/codreg/pdf_regs/njac_5_23_2.pdf"
    },
    "registration": {
      "text": "Newark's construction checklist requires the applicable New Jersey state trade license (State Electrical Business License, State Plumbing License, HVAC contractor license, Home Improvement Contractor or New Home Builder license) and, for commercial work, a separate City of Newark Contractor License. The city does not publish the registration fee or bond amount.",
      "sourceUrl": "https://www.newarknj.gov/DocumentCenter/View/2842/CONSTRUCTION-CHECK-LIST-2026"
    },
    "codeItems": [
      {
        "text": "Newark asks for a fire technical sheet on a water heater installation or replacement in a building of two families or more, which is on top of the plumbing paperwork a one-family job needs.",
        "sourceUrl": "https://www.newarknj.gov/DocumentCenter/View/2842/CONSTRUCTION-CHECK-LIST-2026"
      },
      {
        "text": "New Jersey is one of the few states that does not use the IPC or UPC: its plumbing subcode is the National Standard Plumbing Code, 2024 NJ edition, so fixture and water-heater rules are cited from the NSPC rather than from a model I-code.",
        "sourceUrl": "https://www.nj.gov/dca/codes/codreg/current.shtml"
      },
      {
        "text": "The New Jersey edition of the plumbing subcode defines hot water as potable water at not less than 120 and not more than 140 degrees F, which sets the window a replacement water heater's thermostat has to fall inside.",
        "sourceUrl": "https://www.nj.gov/dca/codes/codreg/pdf_regs/njac_5_23_3.pdf"
      },
      {
        "text": "New Jersey strikes two national AFCI rules from the electrical subcode: NEC 210.12(E) on branch-circuit extensions, modifications and replacements, and NEC 406.4(D)(4) on arc-fault protection when a receptacle is replaced. A small electrical repair in Newark therefore does not trigger the AFCI upgrade a national guide would describe.",
        "sourceUrl": "https://www.nj.gov/dca/codes/codreg/pdf_regs/njac_5_23_3.pdf"
      },
      {
        "text": "Homes built before January 1, 1977 must have 10-year sealed-battery smoke alarms, and one- and two-family houses have to comply before a sale or change of occupancy. Replacing an old alarm with a cheap removable-battery unit will not pass. AC hardwired alarms and CO alarms are not covered, but a combination smoke/CO single-station device must be the 10-year sealed type.",
        "sourceUrl": "https://www.nj.gov/dca/divisions/dfs/pdf/10%20year%20sealed%20battery%20smoke%20alarm%20press%20release.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater with one of like capacity is classed as minor work in New Jersey: you still need a plumbing permit, but you may start once you have given the city notice, and the permit application follows within five business days.",
        "sourceUrl": "https://www.nj.gov/dca/codes/codreg/pdf_regs/njac_5_23_2.pdf"
      },
      "smoke-detector-replacement": {
        "requirement": "No permit is needed in Newark to swap a smoke alarm or detector head for a like device, or to put in a battery-powered smoke alarm, because the state code treats that as ordinary maintenance.",
        "sourceUrl": "https://www.nj.gov/dca/codes/codreg/pdf_regs/njac_5_23_2.pdf"
      },
      "garbage-disposal-replacement": {
        "requirement": "Swapping a plumbing fixture for a similar one with no change to the piping arrangement is ordinary maintenance and needs no permit; adding a fixture that was not there before is minor work and does need a permit.",
        "sourceUrl": "https://www.nj.gov/dca/codes/codreg/pdf_regs/njac_5_23_2.pdf"
      },
      "plumber-service-call": {
        "requirement": "Common service work is permit-free in Newark as ordinary maintenance: clearing a stoppage, repairing a leak by replacing piping, and replacing faucets, valves, traps or ball cocks. Rearranging or resizing water, waste or vent piping needs a plumbing permit.",
        "sourceUrl": "https://www.nj.gov/dca/codes/codreg/pdf_regs/njac_5_23_2.pdf"
      },
      "electrician-service-call": {
        "requirement": "Replacing a receptacle, switch or light fixture with a like item is ordinary maintenance and needs no permit, though a replacement in a GFCI, damp or tamper-resistant location has to meet NEC 406.4(D). Adding up to five outlets on adequate existing circuits is minor work and does need a permit.",
        "sourceUrl": "https://www.nj.gov/dca/codes/codreg/pdf_regs/njac_5_23_2.pdf"
      }
    }
  },
  "norfolk-va": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Norfolk Department of City Planning, Permits and Inspections",
      "url": "https://www.norfolk.gov/2799/Permits-and-Inspections"
    },
    "codeEdition": {
      "text": "Norfolk enforces the Virginia Uniform Statewide Building Code, which is written and amended by the state Board of Housing and Community Development and enforced locally; cities may not write their own technical amendments. The 2021 Virginia codes took effect January 18, 2024, adopting the 2021 I-codes referenced through the Virginia Construction Code and the 2020 National Electrical Code.",
      "sourceUrl": "https://www.dhcd.virginia.gov/codes"
    },
    "permitPolicy": {
      "text": "Norfolk's trade permit applications are built around the contractor's state licence: the online portal asks for licence information exactly as it appears in DPOR, a Class A, B or C contractor may only pull permits in their own trade, and a master-licence holder is limited to projects of $1,000 or less. Statewide, the building official must be given either proof of state licensure or a written statement that the applicant is not subject to licensure before a permit is issued, and the applicant must also show that local taxes and licence fees are paid.",
      "sourceUrl": "https://www.norfolk.gov/6539/Trade-Permits"
    },
    "registration": {
      "text": "Norfolk does not publish a separate city trade registration for plumbers or electricians. It relies on the Virginia Department of Professional and Occupational Regulation licence, requires the licence number to match DPOR records at application, and asks for a contractor licensure affidavit with project submittals.",
      "sourceUrl": "https://www.norfolk.gov/6539/Trade-Permits"
    },
    "codeItems": [
      {
        "text": "Virginia deletes NEC Section 210.8(F) in its entirety from the NFPA 70 it enforces, so the national rule that pushes GFCI protection onto outdoor outlets serving equipment such as air conditioners does not apply in Norfolk.",
        "sourceUrl": "https://law.lis.virginia.gov/admincode/title13/agency5/chapter63/section300/"
      },
      {
        "text": "Virginia's statewide code treats some swaps as ordinary repairs needing no permit at all: replacing general-use snap switches, dimmer and control switches, 125-volt 15- or 20-amp receptacles, light fixtures and ceiling fans in a one- or two-family home, replacing plumbing fixtures without altering the water supply, drainage or vent piping, and replacing mechanical appliances that are not fuelled by gas or oil. A homeowner may still ask for a permit, and if they do the inspections come with it.",
        "sourceUrl": "https://law.lis.virginia.gov/admincode/title13/agency5/chapter63/section80/"
      },
      {
        "text": "Flood zones change the answer in Norfolk. The state code lets the building official require a permit for otherwise exempt work in a special flood hazard area, and Norfolk's own submittal guide says an elevation certificate is needed for new structures, additions, solar panels, garages, pools and alterations into habitable space in a flood zone, and that even a shed under 256 square feet needs a permit there.",
        "sourceUrl": "https://www.norfolk.gov/DocumentCenter/View/71681"
      },
      {
        "text": "Norfolk files a replacement water heater under its mechanical fee schedule rather than plumbing, so the permit is written as a mechanical equipment replacement even though the work is plumbing. Water supply, drainage and vent alterations and electric wiring are separately listed in the state code as work that always needs a permit application.",
        "sourceUrl": "https://www.norfolk.gov/DocumentCenter/View/1494"
      },
      {
        "text": "Virginia's code carves water heaters, boilers and pressure vessels out of the building code to the extent the Virginia Boiler and Pressure Vessel Regulations cover them, and lets the building official ask the owner for documents showing compliance with those regulations.",
        "sourceUrl": "https://law.lis.virginia.gov/admincode/title13/agency5/chapter63/section310/"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Norfolk needs a permit, billed from the city's mechanical fee schedule, and small permits land on the city's minimum permit fee.",
        "sourceUrl": "https://www.norfolk.gov/DocumentCenter/View/1494",
        "fee": "Replacement Water Heater $20 each; Minimum Permit Fee (Building and PME only) $50; $15 processing fee added to all permits; 2% surcharge on all permits",
        "feeAsOf": "July 1, 2021"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Norfolk takes an electrical permit priced by the ampacity of the service and by each circuit installed, extended, relocated or repaired.",
        "sourceUrl": "https://www.norfolk.gov/DocumentCenter/View/1494",
        "fee": "Electrical service 0-200 AMP $50; 201-400 AMP $100; each circuit or feeder installed, extended, relocated or repaired $3 per circuit at 0-20 AMP rising to $20 per circuit at 121-200 AMP; Minimum Permit Fee (Building and PME only) $50; $15 processing fee; 2% surcharge",
        "feeAsOf": "July 1, 2021"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work in Norfolk takes a plumbing permit charged per fixture or device, with piping billed per service line, and the city's minimum permit fee applies to small jobs.",
        "sourceUrl": "https://www.norfolk.gov/DocumentCenter/View/1494",
        "fee": "Plumbing equipment/fixtures $10 per fixture/device/system; plumbing piping $20 per sewer/service line; sewer caps $50 each; Minimum Permit Fee (Building and PME only) $50; $15 processing fee; 2% surcharge",
        "feeAsOf": "July 1, 2021"
      }
    }
  },
  "oklahoma-city-ok": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Oklahoma City Development Services, Development Center",
      "url": "https://www.okc.gov/Services/Permits/Building-Trade-Permits"
    },
    "codeEdition": {
      "text": "Oklahoma City's adopted codes are the 2018 International Building Code, the 2017 National Electrical Code, the 2018 International Plumbing Code, the 2018 International Mechanical Code, the 2009 International Energy Conservation Code, the 2018 International Fire Code, the 2018 International Residential Code, the 2018 International Fuel Gas Code, the 2018 International Existing Building Code and ANSI 2009. The city publishes its own supplement for each one — Residential Building, Commercial Building, Plumbing, Electrical, Mechanical, Fuel Gas, Fire and Existing Building — and those supplements contain the local changes an inspector enforces.",
      "sourceUrl": "https://www.okc.gov/Infrastructure-Development/Development-Planning/Development-Center/Adopted-Building-Safety-Codes"
    },
    "permitPolicy": {
      "text": "Oklahoma City expects a licensed contractor to submit for a residential permit, but it leaves a homeowner route open: the city's residential submittal requirements say a licensed contractor is required to submit unless the work is performed by the homeowner, and allow a notarized homeowners insurance exemption form in place of a licensed contractor's certificate of insurance. The same submittal list requires the plans to show the location of the hot water tank, the smoke detectors in each bedroom, and combination smoke and carbon monoxide detectors outside each bedroom area.",
      "sourceUrl": "https://www.okc.gov/files/assets/city/v/1/development-services/documents/application-checklists/residential-construction.pdf"
    },
    "registration": {
      "text": "Oklahoma licenses the trades through the Construction Industries Board, and Oklahoma City then requires its own annual registration of that state license before a contractor can work inside city limits. Published registration charges are $100 initial and annual for an electrical contractor, $100 initial and annual for a master plumbing contractor, $95 initial and annual per category for a mechanical contractor, $100 for a residential building contractor, and $115 the first year then $57 to renew for a boiler contractor (with a $100 charge after the 90-day grace period). A residential building contractor must also carry general liability of at least $50,000 per occurrence and workers' compensation of at least $100,000 per occurrence, or file the state's Affidavit of Exempt Status.",
      "sourceUrl": "https://www.okc.gov/Infrastructure-Development/Business-Licensing/Contractor-Registration"
    },
    "codeItems": [
      {
        "text": "Oklahoma City adds a rule to the IRC that governs where a water heater can go. A fuel-burning central furnace or tank-type water heater may not be installed under a stairwell unless the space under the stairs is protected with fire suppression, and a fuel-burning tank-type water heater installed in a garage or other hazardous location has to be enclosed in a closet — the only way out of the closet is a direct-vent appliance protected from impact in an approved manner.",
        "sourceUrl": "https://www.okc.gov/files/assets/city/v/1/development-services/documents/2018-irc-amendments-state-included.pdf"
      },
      {
        "text": "Oklahoma City adds IRC Section P2801.7.1: where a water heater has to be elevated, it must sit on a stand or platform that is structurally appropriate for the load of the heater plus its water. An improvised platform is a correction item even if the clearance is right.",
        "sourceUrl": "https://www.okc.gov/files/assets/city/v/1/development-services/documents/2018-irc-amendments-state-included.pdf"
      },
      {
        "text": "Oklahoma City amends NEC 210.19(A) so branch circuit conductors may not be smaller than 12 AWG, deleting the code's references to 14 AWG. The 15-amp, 14 AWG lighting circuit that is normal in most of the country is not acceptable here, which matters on any rewire or added circuit.",
        "sourceUrl": "https://www.okc.gov/files/assets/city/v/1/development-services/documents/2017-nec-resolution.pdf"
      },
      {
        "text": "Oklahoma City writes several local electrical rules a national guide would not carry. A dwelling over 500 square feet must have a panelboard with capacity for at least 12 overcurrent devices, and a recessed panelboard needs a 3/4-inch empty raceway run from it into an attic or underfloor space for future use. Supplementary overcurrent protection may not be within three feet of a plumbing fixture. A bathroom wall switch has to be at least five feet horizontally from a tub or shower unless the circuit supplying the switch is GFCI protected. Receptacles may not be installed face up under countertops, sinks or tubs.",
        "sourceUrl": "https://www.okc.gov/files/assets/city/v/1/development-services/documents/2017-nec-resolution.pdf"
      },
      {
        "text": "On a service replacement, Oklahoma City requires the raceway of a service mast that supports the service drop or overhead service conductors to be rigid metal conduit, minimum trade size one and one-half inches. The city also caps the service disconnecting means for a water well at 40 amperes.",
        "sourceUrl": "https://www.okc.gov/files/assets/city/v/1/development-services/documents/2017-nec-resolution.pdf"
      },
      {
        "text": "Oklahoma City expands the access rules for backflow preventers: not less than twelve inches of access in five directions, access per the manufacturer's instructions, and a service platform wherever a preventer sits more than five feet above the floor or grade. The city also requires annual inspections of all backflow prevention assemblies and air gaps.",
        "sourceUrl": "https://www.okc.gov/files/assets/city/v/1/development-services/documents/2018-ipc-amendments-state-included.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Swapping a gas water heater in Oklahoma City is charged as a gasfitting replacement of a residential appliance, and the city's own supplement controls where the new heater can sit — not under a stairwell, and enclosed in a closet if it is a fuel-burning tank type in a garage.",
        "sourceUrl": "https://www.okc.gov/files/assets/city/v/1/development-services/documents/development-services-fee-changes.pdf",
        "fee": "$50.00 for each appliance or fixture under Section 60-29-20, Gasfitting, replacement of residential appliance or fixture (rate effective 7/1/2024); where a building permit is involved the minimum permit fee for alterations, removal and repair under Section 60-12-7(a) is $75.00; reinspection or trip fee $50.00",
        "feeAsOf": "City of Oklahoma City Development Services fee-change schedule, rates effective 7/1/2024 through 7/1/2026 (citywide fee study adopted by City Council in 2024)"
      },
      "plumber-service-call": {
        "requirement": "Oklahoma City charges residential plumbing work as an alteration base fee once the job is big enough to need a building permit, plus a flat charge for each sewer, soil pipe or water line that gets extended, and the work has to be done by a master plumbing contractor registered with the city.",
        "sourceUrl": "https://www.okc.gov/files/assets/city/v/1/development-services/documents/development-services-fee-changes.pdf",
        "fee": "$84.00 residential alteration base fee under Section 60-42-7(a), required when the alteration or addition is sufficient to require a building permit (rate effective 7/1/2026); $100.00 for each extended line under Section 60-42-7(d), extension of sanitary or storm sewer, soil pipe or water line (rate effective 7/1/2026); yard sprinkler system $30.00; reinspection or trip fee $50.00",
        "feeAsOf": "City of Oklahoma City Development Services fee-change schedule, rates effective 7/1/2024 through 7/1/2026 (citywide fee study adopted by City Council in 2024)"
      },
      "electrician-service-call": {
        "requirement": "Oklahoma City has a specific flat fee for small electrical jobs — five outlets or fewer with no change in service — and separate flat fees for a remodel and for a service change, and an electrician has to hold a state Construction Industries Board license plus a city electrical contractor registration.",
        "sourceUrl": "https://www.okc.gov/files/assets/city/v/1/development-services/documents/development-services-fee-changes.pdf",
        "fee": "$100.00 for minor electrical wiring, five outlets or less, unrelated to building permits and requiring no change in service, residential dwelling unit, under Section 60-18-12(a) (rate effective 7/1/2026); $100.00 for a residential add-on, remodel or minor electrical wiring with no change in service under Section 60-18-16(a); $100.00 for a residential service charge up to 200 amps under Section 60-18-16(b), plus $50.00 for each additional 100 amperes or portion thereof; $50.00 for a meter base inspection where no electrical work has been done; $75.00 temporary construction service; reinspection or trip fee $50.00",
        "feeAsOf": "City of Oklahoma City Development Services fee-change schedule, rates effective 7/1/2024 through 7/1/2026 (citywide fee study adopted by City Council in 2024)"
      },
      "smoke-detector-replacement": {
        "requirement": "Oklahoma City checks alarm coverage on any permitted residential job: the submittal requirements make the plans show smoke detectors within each bedroom and combination smoke and carbon monoxide detectors outside each bedroom area, so a remodel can pull in alarms the house never had.",
        "sourceUrl": "https://www.okc.gov/files/assets/city/v/1/development-services/documents/application-checklists/residential-construction.pdf"
      }
    }
  },
  "omaha-ne": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Omaha Planning Department, Permits and Inspections Division",
      "url": "https://planning.omaha.gov/permits-and-inspections"
    },
    "codeEdition": {
      "text": "Nebraska writes a statewide building code but lets cities adopt and enforce their own as long as it generally conforms, and Omaha has chosen to run its own. Omaha's codes sit in the Omaha Municipal Code: Chapter 43 Building, Chapter 40 Mechanical, Chapter 44 Article V Electrical, Chapter 49 Plumbing, Chapter 46 Fire and Chapter 48 Property Maintenance. The editions in force are the 2018 International Residential Code with Omaha amendments (effective July 1, 2020), the 2018 IBC, IEBC and IECC with amendments (effective January 1, 2022), the 2024 International Mechanical Code with amendments (effective May 20, 2026), the 2024 International Fire Code with amendments (effective July 1, 2026) and the 2023 National Electrical Code with amendments (effective December 24, 2025). Statewide the baseline is the 2018 IRC and IEBC, the 2018 Uniform Plumbing Code as the Nebraska Plumbing Code, and the 2023 NEC.",
      "sourceUrl": "https://up.codes/codes/omaha"
    },
    "permitPolicy": {
      "text": "Nebraska's State Electrical Act does not stop a property owner from doing electrical work on their own principal residence, so long as the residence is no larger than a single-family dwelling, and does not require that owner to be licensed. The Act also recognises city licences: someone holding a valid electrical licence issued by a city may work without a state licence, provided they only make installations inside that city's limits and the city licence meets the Act's requirements. Omaha issues its own occupational licences through the Planning Department.",
      "sourceUrl": "https://electrical.nebraska.gov/sites/default/files/doc/STATE%20ACT%20REVISED%20VERSION%2006%2026%202026-2.pdf"
    },
    "codeItems": [
      {
        "text": "Nebraska adopts the 2023 National Electrical Code as its minimum standard but deliberately keeps the 2017 NEC text for five sections: 210.8(A), 210.8(A)(3), 210.8(A)(5), 230.67(A) and 230.85. In practical terms the 2023 edition's expanded GFCI scope, its whole-house surge protection requirement and its outdoor emergency disconnect requirement are not enforced in Nebraska, which is the opposite of what a national guide written to the 2023 NEC will tell a homeowner.",
        "sourceUrl": "https://electrical.nebraska.gov/sites/default/files/doc/STATE%20ACT%20REVISED%20VERSION%2006%2026%202026-2.pdf"
      },
      {
        "text": "Omaha is too big for Nebraska's cut-rate residential electrical licences. A Class B electrical contractor licence and a Class B journeyman licence are valid only for systems up to 400 amps in dwellings of four units or fewer located in a municipality with fewer than 100,000 inhabitants. Omaha is far above that, so residential electrical work there has to be done under a full electrical contractor or Class A master electrician licence.",
        "sourceUrl": "https://electrical.nebraska.gov/sites/default/files/doc/STATE%20ACT%20REVISED%20VERSION%2006%2026%202026-2.pdf"
      },
      {
        "text": "Omaha runs its own municipal electrical inspection program with a city electrical inspector, so an Omaha electrical permit and inspection goes through the city rather than the Nebraska State Electrical Division. The state division keeps jurisdiction only over public educational facilities and state-owned property inside the city.",
        "sourceUrl": "https://electrical.nebraska.gov/municipal-county-electrical-inspection-programs"
      },
      {
        "text": "Under Nebraska's electrical statute, a single-family residential electrical installation that needs NEW service equipment is specifically made subject to the Act's inspection and enforcement provisions, even though ordinary single-family work is not. So a panel or service change on an Omaha house is inspected work in a way that a simple circuit addition may not be.",
        "sourceUrl": "https://electrical.nebraska.gov/sites/default/files/doc/STATE%20ACT%20REVISED%20VERSION%2006%2026%202026-2.pdf"
      }
    ],
    "byGuide": {
      "electrician-service-call": {
        "requirement": "Electrical work in Omaha is permitted and inspected by the City of Omaha's own electrical inspection program, not by the state division, and the city enforces the 2023 National Electrical Code with amendments. Because Nebraska's Class B residential licences are only valid in towns under 100,000 people, an Omaha job needs a full electrical contractor or Class A master electrician; a homeowner may still do the work on their own single-family principal residence without a licence.",
        "sourceUrl": "https://electrical.nebraska.gov/municipal-county-electrical-inspection-programs"
      }
    }
  },
  "orlando-fl": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Orlando Permitting Services Division (Economic Development Department)",
      "url": "https://orlando.gov/permits"
    },
    "codeEdition": {
      "text": "Orlando reviews applications filed on or before December 30, 2026 under the 8th Edition (2023) Florida Building Code and the 8th Edition Florida Fire Prevention Code. Applications filed on or after December 31, 2026 are reviewed under the 9th Edition (2026) Florida Building Code volumes (Building, Residential, Existing Building, Accessibility, Energy Conservation, Mechanical, Plumbing, Fuel Gas), the 2023 National Electrical Code (NFPA 70), and the 9th Edition (2026) Florida Fire Prevention Code.",
      "sourceUrl": "https://www.orlando.gov/Building-Development/Permits-Inspections/Get-a-Permit/Forms-Documents/Applicable-Codes-for-Permitting"
    },
    "permitPolicy": {
      "text": "A homeowner may pull the permit as an owner-builder, but must appear in person at Permitting Services to sign the city's Owner/Builder Declaration. By signing, the owner becomes the responsible party of record, agrees to provide direct on-site supervision, and accepts that the state exemption covers a one- or two-family residence for the owner's own use and is presumed violated if the home is sold or leased within one year of completion. The owner may not hire an unlicensed person as contractor or supervisor. Otherwise the permit is pulled by a contractor whose license and insurance are on file with the city.",
      "sourceUrl": "https://www.orlando.gov/files/sharedassets/public/departments/edv/permitting-services-division/bld/owner-builder-declaration-final-2021.pdf"
    },
    "registration": {
      "text": "Orlando requires contractors to register with its Permitting Services Division on top of the state license. State-certified contractors must file a current Florida business tax receipt, a copy of the DBPR state certification, and proof of workers' compensation coverage or exemption made out to the City of Orlando. State-registered contractors must also file an original surety bond or continuation certificate. If the city does not hold current documents, permits cannot be issued and inspections cannot be scheduled. No city registration fee is published on the page.",
      "sourceUrl": "https://www.orlando.gov/Building-Development/Permits-Inspections/Other/Register-a-Contractor"
    },
    "codeItems": [
      {
        "text": "Orlando will not let you schedule the first inspection on a job with a contract price over $5,000 until a Notice of Commencement has been recorded with the Orange County Comptroller and a copy filed with the city. A certified copy also has to be posted at the job site for the inspector to see. This catches homeowners on water-heater and panel jobs that cross $5,000 once labor is counted.",
        "sourceUrl": "https://orlando.gov/Building-Development/Permits-Inspections/File-a-Recorded-Notice-of-Commencement"
      },
      {
        "text": "Orlando's electrical permit application draws a hard line between a repair and a rewire. The Repair subtype only covers putting new equipment and materials back in the same location as the old. Rewiring one or more rooms, or opening walls, pushes the affected locations onto current code, so the inspector looks at those rooms against today's NEC rather than the vintage of the house.",
        "sourceUrl": "https://orlando.gov/files/sharedassets/public/departments/edv/permitting-services-division/bld/electrical-permit-2.20.pdf"
      },
      {
        "text": "An Orlando electrical permit application also has to name the serving utility, Orlando Utilities Commission or Duke Energy, and complete a service-type block giving phase, amperage and meter count before power can be released. A change in meter count or a new address triggers an extra Engineering and Zoning review of the allowable number of residential units.",
        "sourceUrl": "https://orlando.gov/files/sharedassets/public/departments/edv/permitting-services-division/bld/electrical-permit-2.20.pdf"
      },
      {
        "text": "Orlando stacks percentage surcharges on top of the trade permit fee itself: a 3% technology surcharge, a 1.5% Administrative Inspection Fund surcharge with a $2 minimum, a 1% state trust fund surcharge with a $2 minimum, and on building permits a 5% concurrency surcharge. A failed inspection is billed back at a $150 re-inspection fee, and an inspection cancelled with 24 hours notice or less costs $50.",
        "sourceUrl": "https://www.orlando.gov/files/sharedassets/public/v/1/departments/edv/permitting-services-division/permitting-development-fees-residential-2026.pdf"
      },
      {
        "text": "An Orlando permit expires if it sits six months without an inspection, and reviving it costs $50 or 25% of the original permit fee up to $1,000, whichever is greater, if done within six months of expiration. The city warns that an unclosed permit surfaces later when the property is sold.",
        "sourceUrl": "https://orlando.gov/Building-Development/Permits-Inspections/Get-a-Permit"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Orlando is permitted as residential plumbing/gas work, and the city's published residential fee for that permit is a flat base charge plus a per-fixture amount, before surcharges.",
        "sourceUrl": "https://www.orlando.gov/files/sharedassets/public/v/1/departments/edv/permitting-services-division/permitting-development-fees-residential-2026.pdf",
        "fee": "$66.24 plus $7 per fixture (Plumbing/Gas Permit Fee—Residential)",
        "feeAsOf": "Effective January 2026"
      },
      "plumber-service-call": {
        "requirement": "Orlando prices a residential plumbing or gas permit as a flat base charge plus a per-fixture amount, and the city states that Florida law requires a permit for most projects, even small ones.",
        "sourceUrl": "https://www.orlando.gov/files/sharedassets/public/v/1/departments/edv/permitting-services-division/permitting-development-fees-residential-2026.pdf",
        "fee": "$66.24 plus $7 per fixture (Plumbing/Gas Permit Fee—Residential)",
        "feeAsOf": "Effective January 2026"
      },
      "electrician-service-call": {
        "requirement": "An Orlando residential electrical permit is priced from the estimated construction cost of the work, with flat $50 fees for some common service calls such as a change of service, a safety check, or residential low voltage.",
        "sourceUrl": "https://www.orlando.gov/files/sharedassets/public/v/1/departments/edv/permitting-services-division/permitting-development-fees-residential-2026.pdf",
        "fee": "$66.24 for the first $1,000 of construction cost or fraction thereof, plus $11.03 for each additional $1,000 up to and including $25,000, plus $8.28 for each additional $1,000 above $25,000; Change of Service $50; Safety Check $50; Low Voltage Fee Residential $50",
        "feeAsOf": "Effective January 2026"
      }
    }
  },
  "philadelphia-pa": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Philadelphia Department of Licenses and Inspections (L&I)",
      "url": "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-a-plumbing-permit/"
    },
    "codeEdition": {
      "text": "Philadelphia moved to the 2021 International Codes effective January 1, 2026, covering the Building, Residential, Existing Building, Plumbing, Mechanical, Fuel Gas, Energy Conservation and ICC Performance Codes, with the 2020 National Electrical Code and 2019 NFPA 72 as referenced standards. Applications filed before July 1, 2026 could be reviewed under either the 2018 or the 2021 edition; anything filed on or after that date must meet the 2021 editions. The 2021 accessibility provisions are enjoined by a Commonwealth Court ruling, so the 2018 International Building Code accessibility provisions still apply, and the Philadelphia Administrative Code continues as the local construction code within the Pennsylvania Uniform Construction Code.",
      "sourceUrl": "https://www.phila.gov/media/20251021080549/B-2501-Implementation-of-2021-International-Codes.pdf"
    },
    "permitPolicy": {
      "text": "In Philadelphia a property owner may be the applicant on a plumbing or electrical permit, but not the person doing the work. A licensed master plumber has to oversee the plumbing, and a licensed electrical contractor has to perform the electrical work. When anyone other than that master plumber or electrical contractor files the application, L&I requires a signed statement on the tradesperson's letterhead confirming they are on the job. The other people allowed to apply as an owner's agent are a Pennsylvania-licensed design professional, an attorney, or a licensed expediter.",
      "sourceUrl": "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-a-plumbing-permit/"
    },
    "registration": {
      "text": "Philadelphia will not issue a permit to a trade licence that is not in good standing with the city. The master plumber or electrical contractor named on the application must hold an active city licence, be current on all City of Philadelphia taxes, and have current insurance on file with L&I. A contractor filing online also has to associate the licence or registration with their online account.",
      "sourceUrl": "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-an-electrical-permit/"
    },
    "codeItems": [
      {
        "text": "Philadelphia does not inspect electrical work itself. The owner or the owner's agent has to hire a licensed electrical inspection agency and pay it for every inspection on the permit, which is a cost on top of the city permit fee that a national guide would not account for.",
        "sourceUrl": "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-an-electrical-permit/"
      },
      {
        "text": "A large hot water heater in Philadelphia can need a second permit from the Philadelphia Department of Public Health, separate from the L&I plumbing permit, so an oversized tank is not a one-permit job.",
        "sourceUrl": "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-a-plumbing-permit/"
      },
      {
        "text": "Philadelphia requires a backflow prevention device to be installed by an approved technician, so a plumber who is licensed for the rest of the job is not automatically accepted for the backflow device.",
        "sourceUrl": "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-a-plumbing-permit/"
      },
      {
        "text": "Philadelphia draws its plumbing permit line at the pipe. Minor repairs using the same material, swapping a faucet, valve or part, stopping a leak, clearing a stoppage, and taking a toilet out and putting it back all go without a permit, so long as no pipe or fixture is replaced or moved. Replacing fixtures with the same kind is allowed under the city's EZ permit, which skips plans.",
        "sourceUrl": "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-a-plumbing-permit/"
      },
      {
        "text": "Philadelphia keeps fire alarm work out of its no-plans EZ electrical permit, and treats the power supply and signal cables for fire and smoke alarm systems as part of the rough-in approval, so alarm wiring is inspected at rough-in rather than only at the end.",
        "sourceUrl": "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-an-electrical-permit/"
      },
      {
        "text": "From July 1, 2026 a contractor named on a Philadelphia electrical permit application for an EV charger must hold a valid EVITP certification.",
        "sourceUrl": "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-an-electrical-permit/"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Philadelphia requires a plumbing permit to replace a water heater, the work must be overseen by a licensed master plumber, and a large heater can need an extra permit from the Department of Public Health.",
        "sourceUrl": "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-a-plumbing-permit/",
        "fee": "Water Heater $31 per water heater for Residential (1 or 2 family), $37 per water heater for Other Occupancies; $100 nonrefundable filing fee applied toward the final permit fee; City surcharge $3 and State surcharge $4.50 per permit",
        "feeAsOf": "October 1, 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "Swapping a garbage disposal in Philadelphia falls under the plumbing permit for fixture replacement with no piping work, which the city will issue as an EZ permit when the new fixture is the same kind as the old one.",
        "sourceUrl": "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-a-plumbing-permit/",
        "fee": "Fixture Replacement (No Piping Work) $31 for Residential (1 or 2 family); $75 for the first 7 fixtures and $6.30 for each additional fixture above 7 for Other Occupancies; $100 nonrefundable filing fee applied toward the final permit fee; City surcharge $3 and State surcharge $4.50 per permit",
        "feeAsOf": "October 1, 2026"
      },
      "plumber-service-call": {
        "requirement": "Philadelphia lets a plumber stop a leak, clear a stoppage, change a faucet or valve, or pull and reset a toilet without a permit, but replacing or moving pipe or a fixture needs one, and the $100 filing fee is charged up front and credited against the permit.",
        "sourceUrl": "https://www.phila.gov/media/20260729134349/PG_012_INF_Summary-of-construction-permit-fees-Eff-1.1.2025-Rev-7.2026.pdf",
        "fee": "Repair/Replacement of Water Lines, Waste Lines and Stacks, no fixtures: $37 Residential (1 or 2 family), $126 Other Occupancies; Water Distribution Line Replacement from curb stop into the building $126; Plumbing alterations to existing buildings $50 for the first 7 fixtures and $22.50 for each additional fixture above 7; optional Rough-in Permit $150",
        "feeAsOf": "October 1, 2026"
      },
      "electrician-service-call": {
        "requirement": "Philadelphia charges an electrical permit on the estimated cost of the electrical work rather than per device, exempts routine maintenance such as changing lamps, breakers and fuses, and makes the owner hire a licensed electrical inspection agency for the inspections.",
        "sourceUrl": "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-an-electrical-permit/",
        "fee": "Electrical Work $25 for each $1,000 or fraction thereof of estimated electrical construction cost, minimum $63 and maximum $18,975; $100 nonrefundable filing fee applied toward the final permit fee; City surcharge $3 and State surcharge $4.50 per permit; record retention fee $4 per plan; optional Rough-in Permit $150",
        "feeAsOf": "October 1, 2026"
      },
      "smoke-detector-replacement": {
        "requirement": "Wiring for smoke and fire alarm systems is electrical permit work in Philadelphia, it cannot go through the city's no-plans EZ electrical permit, and the cables are checked as part of the rough-in approval.",
        "sourceUrl": "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-an-electrical-permit/",
        "fee": "Electrical Work $25 for each $1,000 or fraction thereof of estimated electrical construction cost, minimum $63 and maximum $18,975",
        "feeAsOf": "October 1, 2026"
      }
    }
  },
  "phoenix-az": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Phoenix Planning and Development Department",
      "url": "https://www.phoenix.gov/administration/departments/pdd.html"
    },
    "codeEdition": {
      "text": "The 2024 Phoenix Building Construction Code took effect August 1, 2025, after City Council adoption on June 18, 2025. It is built on the 2024 IRC, 2024 IBC, 2024 IPC and 2024 UPC, the 2024 IMC and IFGC, and the 2023 National Electrical Code, each with Phoenix amendments published as separate documents.",
      "sourceUrl": "https://www.phoenix.gov/administration/departments/pdd/tools-resources/codes-ordinance/building-code.html"
    },
    "permitPolicy": {
      "text": "Either the property owner or a contractor may be the permit applicant. An owner signs a statement on the application that a licensed contractor is not required because the home is for the owner's sole occupancy and will not be sold or rented within a year of completion, citing A.R.S. 32-1121.A.5. A contractor instead writes in an Arizona Registrar of Contractors license class and number.",
      "sourceUrl": "https://www.phoenix.gov/content/dam/phoenix/pddsite/documents/trt/external/dsd_trt_pdf_00030.pdf"
    },
    "registration": {
      "text": "Phoenix's construction permit application asks only for the state Arizona Registrar of Contractors license class and number; it carries no field for a separate city trade registration or license number. No city registration fee or bond figure is published on the permit application.",
      "sourceUrl": "https://www.phoenix.gov/content/dam/phoenix/pddsite/documents/trt/external/dsd_trt_pdf_00030.pdf"
    },
    "codeItems": [
      {
        "text": "Phoenix narrows the IRC exception that lets smoke alarms be battery powered during alterations and repairs. In Phoenix the battery option only applies where there is no attic, crawl space or basement giving access for hardwiring, so on most remodels and rewires the inspector looks for interconnected hardwired alarms with battery backup. The same amendment applies to carbon monoxide alarms.",
        "sourceUrl": "https://www.phoenix.gov/content/dam/phoenix/pddsite/documents/codes-ordinances/amendmentcodes/2024-irc.pdf"
      },
      {
        "text": "Phoenix has pushed back the 2023 NEC 210.8(F) Exception 2 requirement for GFCI protection on outdoor HVAC equipment outlets. The department says full enforcement starts March 1, 2027, so a condenser or heat-pump circuit installed before then is not failed for the missing GFCI device.",
        "sourceUrl": "https://www.phoenix.gov/administration/departments/pdd/tools-resources/codes-ordinance/building-code.html"
      },
      {
        "text": "Phoenix treats a concealed pipe differently from a leak. Stopping a leak is exempt, but once a concealed trap, drain, water, soil, waste or vent pipe has to be cut out and replaced with new material, Phoenix counts that as new work requiring a permit and an inspection. Swapping a fixture in place is exempt, but relocating any valve, pipe or fixture requires a permit.",
        "sourceUrl": "https://www.phoenix.gov/content/dam/phoenix/pddsite/documents/codes-ordinances/amendmentcodes/2024-ibc-ch1.pdf"
      },
      {
        "text": "Phoenix sets its own amperage ceilings on exempt electrical swaps. Replacing a switch, receptacle, contactor or control device in kind is exempt up to 60 amperes, and replacing a circuit breaker in kind is exempt up to 125 amperes, but in both cases a service disconnect is carved out and needs a permit.",
        "sourceUrl": "https://www.phoenix.gov/content/dam/phoenix/pddsite/documents/codes-ordinances/amendmentcodes/2024-ibc-ch1.pdf"
      },
      {
        "text": "Phoenix deletes most of IRC Section P2904 and sends residential sprinkler design to the Phoenix Fire Code instead. Under the amendment a multipurpose or stand-alone system does not need a backflow preventer separating it from the house water piping provided it holds no antifreeze and has no fire department connection.",
        "sourceUrl": "https://www.phoenix.gov/content/dam/phoenix/pddsite/documents/codes-ordinances/amendmentcodes/2024-irc.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Phoenix does not require a permit to swap an existing water heater like-for-like in a one- or two-family home when a licensed contractor does the work; a permit is needed if the homeowner installs it themselves, or if the heater is relocated, and the permit fee is a reduced residential water-heater minimum that includes up to two inspections.",
        "sourceUrl": "https://www.phoenix.gov/content/dam/phoenix/pddsite/documents/impact-fees/fee-schedule.pdf",
        "fee": "$98 Minimum for Residential Water Heaters and Fences (project valuation $1 - $1,000); permits in that valuation band include a maximum of two inspections, with additional inspections at $195 each",
        "feeAsOf": "January 2026"
      },
      "plumber-service-call": {
        "requirement": "Clearing a stoppage, repairing a leak, pulling and resetting a toilet, or swapping a fixture in the same spot needs no Phoenix permit, but replacing concealed pipe or moving a valve, pipe or fixture does, and the fee is then set from the valuation of the work.",
        "sourceUrl": "https://www.phoenix.gov/content/dam/phoenix/pddsite/documents/impact-fees/fee-schedule.pdf",
        "fee": "$195 Base fee only (project valuation $1 - $1,000) under Table A: Building Safety Valuation-Based Permit Fee",
        "feeAsOf": "January 2026"
      },
      "electrician-service-call": {
        "requirement": "Minor electrical repair, lamp replacement and in-kind swaps of devices up to 60 amperes or breakers up to 125 amperes are exempt in Phoenix, but anything beyond that, including a service disconnect, takes an electrical permit priced from the valuation of the work.",
        "sourceUrl": "https://www.phoenix.gov/content/dam/phoenix/pddsite/documents/impact-fees/fee-schedule.pdf",
        "fee": "$195 Base fee only (project valuation $1 - $1,000) under Table A: Building Safety Valuation-Based Permit Fee",
        "feeAsOf": "January 2026"
      }
    }
  },
  "pittsburgh-pa": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Pittsburgh Department of Permits, Licenses and Inspections (PLI)",
      "url": "https://www.pittsburghpa.gov/Business-Development/Permits-Licenses-and-Inspections"
    },
    "codeEdition": {
      "text": "Construction in Pittsburgh runs under the Pennsylvania Uniform Construction Code, adopted by the Pennsylvania Construction Code Act (Act 45 of 1999). PLI's code page states the 2018 ICC base codes and 2018 accessibility codes were the adopted set, and that from January 1, 2026 the 2021 ICC base codes apply with the 2018 accessibility codes. Pittsburgh's own adoption and amendments sit in Section 1002 of the Pittsburgh City Code and stay in force as the state updates the UCC. Plumbing is the exception: PLI does not enforce the UCC plumbing provisions at all, and plumbing in Pittsburgh is regulated under the Allegheny County Health Department's own Article XV Plumbing Code.",
      "sourceUrl": "https://www.pittsburghpa.gov/Business-Development/Permits-Licenses-and-Inspections/References-Resources-and-Forms"
    },
    "permitPolicy": {
      "text": "Pittsburgh has no homeowner permit for trade work. The city's licensing rules define an electrical contractor as any person performing work that requires an electrical permit, and that person must hold a City of Pittsburgh electrical trade licence; an HVAC/Mechanical trade licence is likewise required to install, erect, enlarge, repair, alter, remove, convert or replace any mechanical system in the city. On the plumbing side Allegheny County requires a plan approved by the Health Department before work starts, and a landlord may make plumbing repairs only in their own residence — rental units must go to a Master Plumber.",
      "sourceUrl": "https://www.pittsburghpa.gov/files/assets/city/v/1/pli/documents/17099_final_pli_licensing_rules_and_regulations_may_2022.pdf"
    },
    "registration": {
      "text": "Pittsburgh issues its own trade licences on top of any state credential, each costing $90 initially and at annual renewal, with a $50 late fee: Electrical, HVAC/Mechanical, General Contractor, Fire Suppression, Sign Contractor and Stationary Engineer. A trade licence expires 365 days from issue and renewal requires eight hours of continuing education in the previous twelve months; a new general contractor licence also requires the firm's EPA Lead Renovation, Repair and Painting certification. A new electrical trade licence requires a passed Master Electrician exam (the city's own proctored exam or the ICC Standard Master Electrician exam) plus six years of combined experience and education. Plumbers are licensed by the county instead: Allegheny County charges $375 for a Master plumber licence and $125 for a Journeyman licence, with exam fees of $265 and $133.",
      "sourceUrl": "https://www.pittsburghpa.gov/files/assets/city/v/1/pli/documents/fees/2026-fee-schedule-final-2.pdf"
    },
    "codeItems": [
      {
        "text": "The split that catches people out in Pittsburgh: all plumbing not tied to a sprinkler system is regulated by the Allegheny County Health Department, not the city. A water heater or fixture job therefore needs a county plumbing plan approved before work begins and a county final inspection, while the gas and electrical sides of the same job are permitted and inspected by city PLI.",
        "sourceUrl": "https://www.pittsburghpa.gov/Business-Development/Permits-Licenses-and-Inspections/OneStopPGH-Permit-Center/Work-Not-Requiring-a-Permit"
      },
      {
        "text": "Pittsburgh's list of electrical work that needs no permit is unusually short: replacing lamps, plugging approved portable equipment into existing receptacles, reinstalling attachment plug receptacles but not the outlets themselves, replacing a branch-circuit overcurrent device of the required capacity in the same location, rearranging communications wiring in a one- or two-family house, and equipment under 25 volts that cannot supply more than 50 watts. Anything beyond that list is permit work and, by the city's own definition, work only a licensed electrical contractor may do.",
        "sourceUrl": "https://www.pittsburghpa.gov/Business-Development/Permits-Licenses-and-Inspections/OneStopPGH-Permit-Center/Work-Not-Requiring-a-Permit"
      },
      {
        "text": "The city treats \"ordinary repairs\" narrowly. Adding, altering, replacing or relocating any water supply, sewer, drain, drain leader, gas, soil, waste or vent piping, electric wiring or mechanical work is expressly not an ordinary repair and needs a permit, however small the job looks.",
        "sourceUrl": "https://www.pittsburghpa.gov/Business-Development/Permits-Licenses-and-Inspections/OneStopPGH-Permit-Center/Work-Not-Requiring-a-Permit"
      },
      {
        "text": "Pittsburgh prices and reviews electrical work by declared scope, and some scopes pull in extra review: a residential service rated over 400 amperes requires stamped drawings, while reconnecting an existing approved service only qualifies as a \"Service Reconnect In-Kind\" if the location, phase, amperage and service equipment are all unchanged. A roof-mounted solar array permit is limited to buildings that already hold a valid certificate of occupancy.",
        "sourceUrl": "https://www.pittsburghpa.gov/Business-Development/Permits-Licenses-and-Inspections/Permitting/Electrical-Permit"
      },
      {
        "text": "A residential mechanical permit in Pittsburgh is taken out against named work scopes, and modifying fuel gas piping without installing equipment is its own \"minor alteration\" scope. The city also has a defined emergency scope for replacing interior or exterior heating or ventilation equipment that PLI has condemned.",
        "sourceUrl": "https://www.pittsburghpa.gov/Business-Development/Permits-Licenses-and-Inspections/Permitting/Mechanical-Permit"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "A water heater swap in Pittsburgh goes through the Allegheny County Health Department, not the city: the county requires a plumbing permit for any plumbing installed or altered and names water heater replacement cards specifically, the plan has to be approved before work starts, and a final inspection is part of every plumbing permit. If the job also reworks the gas piping or venting, that side needs a city PLI mechanical (fuel gas) permit, which a licensed HVAC/Mechanical trade licence holder must pull.",
        "sourceUrl": "https://www.alleghenycounty.us/files/assets/county/v/1/government/health/documents/plumbing_fee_schedule.pdf",
        "fee": "$27 Fixture Replacement Cards (hot water heaters & fixtures)",
        "feeAsOf": "Effective Jan. 1, 2023"
      },
      "plumber-service-call": {
        "requirement": "Plumbing permits in Pittsburgh are issued by the Allegheny County Health Department, which charges by plan level and then per fixture; a plan showing every fixture to be installed or altered must be approved before the work starts, and a final inspection is required on every permit. A landlord may make plumbing repairs only in the home they live in — work in a rental unit must be done by a Master Plumber.",
        "sourceUrl": "https://www.alleghenycounty.us/files/assets/county/v/1/government/health/documents/plumbing_fee_schedule.pdf",
        "fee": "$80 Level 1 Plans (0-5 fixtures); $22 Fixture Fees, including fixtures, water heaters, building sewer and water service itemized in plans; $75 Re-inspection Fee",
        "feeAsOf": "Effective Jan. 1, 2023"
      },
      "electrician-service-call": {
        "requirement": "An electrical permit is required in Pittsburgh to install a new electrical system or to renovate, repair, extend or modify an existing one, and only a holder of a City of Pittsburgh electrical trade licence may do permit work — there is no homeowner option here. The permit is priced off the declared construction value with a floor, and the city adds three small per-permit charges on top.",
        "sourceUrl": "https://www.pittsburghpa.gov/files/assets/city/v/1/pli/documents/fees/2026-fee-schedule-final-2.pdf",
        "fee": "$6.00 per $1,000 of Construction Value (Minimum: $130 – Maximum: $8,000) Base Permit Fee (Residential), plus $4.50 State Education & Training Fund fee and $5.00 Digital Record Retention Fee per permit and a technology fee of $2.00 to $25.00 depending on the base fee range",
        "feeAsOf": "Effective 1/1/2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "Pittsburgh does not permit disposals itself; the Allegheny County Health Department requires a plumbing permit for any plumbing that is installed or altered, with the plan approved before work starts and a final inspection at the end. The county names water heater replacement cards and dishwasher transmittal sheets specifically but publishes no separate disposal line, and on the electrical side the city's short exemption list does not cover hard-wiring a new appliance.",
        "sourceUrl": "https://www.alleghenycounty.us/Services/Health-Department/Plumbing-Program/Project-Plans-and-Permitting"
      },
      "smoke-detector-replacement": {
        "requirement": "Pittsburgh publishes no smoke-alarm permit of its own, but its list of electrical work needing no permit is limited to lamp replacement, portable equipment plugged into existing receptacles, reinstalled plug receptacles, and like-for-like branch-circuit overcurrent devices — swapping a hardwired alarm is not on it. The city also offers a minor-alteration electrical permit scope for in-kind replacement of devices and fixtures at the same location and ampere rating, and any work that needs an electrical permit must be done by a city-licensed electrical contractor.",
        "sourceUrl": "https://www.pittsburghpa.gov/Business-Development/Permits-Licenses-and-Inspections/OneStopPGH-Permit-Center/Work-Not-Requiring-a-Permit"
      }
    }
  },
  "plano-tx": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Plano Building Inspections Department (1520 K Ave, Suite 140)",
      "url": "https://www.plano.gov/building-inspections"
    },
    "codeEdition": {
      "text": "Plano moved to the 2024 I-Codes effective August 1, and the city publishes each adopted code as its own amending ordinance: the 2024 International Plumbing Code by Ordinance 2025-6-7, the 2024 International Residential Code by Ordinance 2025-6-15, and the 2023 National Electrical Code by Ordinance 2025-6-13, each repealing the city's 2021-cycle ordinance. The 2024 set also covers the International Building, Mechanical, Fuel Gas, Energy Conservation, Existing Building, Fire, Property Maintenance and Swimming Pool and Spa Codes. Each code is codified as its own division or article of Chapter 6 of the Plano Code of Ordinances, with Plano's additions, deletions and amendments written in.",
      "sourceUrl": "https://www.plano.gov/building-codes-ordinances"
    },
    "permitPolicy": {
      "text": "Plano's amended IRC Section R105.3 says that to obtain a permit the applicant has to be registered as a contractor with the building official, and electrical, irrigation, mechanical and plumbing contractors have to file proof of the required State of Texas licences and insurance. The exception is written straight into the ordinance: homeowners may obtain permits to do work at their own residence without being registered. A permit goes invalid if work does not start within 180 days of issuance, or if work stops for 180 days after it started, and every permit requires a final inspection.",
      "sourceUrl": "https://www.plano.gov/asset/6a2b7a22-3b2f-41c5-844b-6f5d6bb15067"
    },
    "registration": {
      "text": "Plano charges an annual contractor registration fee of $100.00 for a general contractor, an irrigation contractor, a mechanical contractor and a sign contractor; a solid waste disposal contractor pays $20.00 plus $10.00 for each additional identification tag and a $10.00 annual renewal per vehicle tag. Registration fees are non-refundable. A registration can be suspended if the contractor fails to close out permits by getting the required approved inspections, lets a structure be occupied before the required authorisation, or lets a required licence, bond or insurance lapse.",
      "sourceUrl": "https://www.plano.gov/asset/bfaa296b-5965-4be9-8823-8ab0592567d6"
    },
    "codeItems": [
      {
        "text": "Plano wrote a replacement exemption into its water heater pan rule that national guides do not carry. Its amended IRC Section P2801.6.1 keeps the usual 1-1/2-inch-deep pan drained by a 3/4-inch indirect waste pipe, but adds that where a pan drain was not previously installed, no pan drain is required for a replacement water heater. The city also allows multiple pan drains to terminate into a single discharge system where the administrative authority approves it and the manufacturer's instructions permit it.",
        "sourceUrl": "https://www.plano.gov/asset/6a2b7a22-3b2f-41c5-844b-6f5d6bb15067"
      },
      {
        "text": "Plano rewrote the T&P relief discharge rules into a 14-point list. Among the points an inspector will look for: the line must discharge through an air gap and never be connected to the drainage system, must serve a single relief device, must terminate somewhere the occupants can readily see, must not be trapped and must flow by gravity, must end not more than 6 inches and not less than twice the pipe diameter above the floor or flood-level rim, must carry no threaded connection at the end and no valves or tee fittings, and must be one nominal size larger than the relief-valve outlet where insert fittings are used, with the outlet end fastened in place.",
        "sourceUrl": "https://www.plano.gov/asset/6a2b7a22-3b2f-41c5-844b-6f5d6bb15067"
      },
      {
        "text": "Plano is stricter than the model code about where a fuel-fired water heater may go. Its amended Section M2005.2 bans a fuel-fired water heater from a room used as a storage closet, and requires a water heater in a bedroom or bathroom to sit in a sealed enclosure so combustion air is not drawn from the living space. Access from the bedroom or bathroom is allowed only through a solid door weather-stripped to the energy code's exterior-door standard and fitted with an approved self-closing device. A direct-vent heater does not need the enclosure.",
        "sourceUrl": "https://www.plano.gov/asset/6a2b7a22-3b2f-41c5-844b-6f5d6bb15067"
      },
      {
        "text": "On a panel or service job Plano can ask for arithmetic. Its added NEC Article 220.6 requires a load calculation to be provided on request whenever modifications are made to the electrical installation. Its amendment to Article 230.85(C) applies the full emergency-disconnect requirements whenever service equipment is replaced, with an exception only where the existing installation already complies with 230.70 and nothing but meter sockets, service-entrance conductors or their raceways and fittings are being swapped.",
        "sourceUrl": "https://www.plano.gov/asset/acb02c4a-8762-489f-b216-0c21fccc3743"
      },
      {
        "text": "Plano wrote its own grounding electrode requirement into NEC 250.50. Any building or structure supplied by a service or feeder that has a foundation, footing or piers must have one of three things: a concrete-encased electrode, a ground ring using a 2/0 AWG grounding electrode conductor to connect two eight-foot driven rods spaced at least 20 feet apart joined by a 2/0 AWG bonding conductor buried in a trench at least 30 inches deep, or a chemical electrode. Existing buildings are excused from the concrete-encased electrode where the reinforcing steel cannot be reached without breaking concrete.",
        "sourceUrl": "https://www.plano.gov/asset/acb02c4a-8762-489f-b216-0c21fccc3743"
      },
      {
        "text": "Plano's amended NEC 210.8(A) stretches dwelling GFCI protection past the national list to cover laundry areas, boathouses, indoor damp and wet locations, any receptacle within 6 feet of the top inside edge of a sink bowl, and any receptacle within 6 feet of the outside edge of a bathtub or shower stall — and it applies to all 125-volt through 250-volt receptacles on single-phase circuits rated 150 volts or less to ground. The city then carved out four exceptions, including a receptacle serving only a permanently installed premises security system and factory-installed receptacles mounted inside exhaust fan assemblies.",
        "sourceUrl": "https://www.plano.gov/asset/acb02c4a-8762-489f-b216-0c21fccc3743"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Plano handles a water heater changeout on the plumbing side of its residential simple trade permit, applied for on the city's Miscellaneous Simple Permit Application, and the inspector works to Plano's own amendments — no pan drain where one never existed, but a T&P discharge line meeting the city's 14-point rule and no fuel-fired heater in a storage closet.",
        "sourceUrl": "https://www.plano.gov/asset/bfaa296b-5965-4be9-8823-8ab0592567d6",
        "fee": "$65.00 per residential simple trade permit (mechanical, electrical or plumbing); a first reinspection adds $50.00 and a same-day inspection $75.00 per trade",
        "feeAsOf": "Building Inspections Department Fee Schedule, Exhibit A to Ordinance No. 2020-3-6"
      },
      "plumber-service-call": {
        "requirement": "A standalone residential plumbing job in Plano is pulled as a simple trade permit by a contractor registered with the city, or by the homeowner for work at their own residence; a plumbing service inspection is billed separately as a plumbing certificate.",
        "sourceUrl": "https://www.plano.gov/asset/bfaa296b-5965-4be9-8823-8ab0592567d6",
        "fee": "$65.00 residential simple trade permit; plumbing certificate (service inspection) $75.00; reinspections $50.00, then $75.00, $100.00 and $125.00; after-hours or Saturday inspection $120.00",
        "feeAsOf": "Building Inspections Department Fee Schedule, Exhibit A to Ordinance No. 2020-3-6"
      },
      "electrician-service-call": {
        "requirement": "Residential electrical work in Plano goes on the same flat-rate simple trade permit, and because Plano runs the 2023 NEC with its own amendments the electrician may be asked for a load calculation, has to meet the city's grounding electrode rule, and faces a wider GFCI list than the national code sets.",
        "sourceUrl": "https://www.plano.gov/asset/bfaa296b-5965-4be9-8823-8ab0592567d6",
        "fee": "$65.00 per residential simple trade permit; same-day inspection $75.00 per trade; after-hours or Saturday inspection $120.00",
        "feeAsOf": "Building Inspections Department Fee Schedule, Exhibit A to Ordinance No. 2020-3-6"
      }
    }
  },
  "portland-or": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Portland Permitting & Development (formerly Bureau of Development Services)",
      "url": "https://www.portland.gov/bds"
    },
    "codeEdition": {
      "text": "Portland does not write its own technical code. City Code 24.10.040 adopts the Oregon specialty codes by rule reference: the Oregon Structural, Residential, Energy Efficiency, Plumbing, Electrical and Mechanical Specialty Codes as adopted and amended in Oregon Administrative Rules chapter 918. As of October 1, 2026 those rules put the 2026 Oregon Residential Specialty Code (2024 IRC) in force, with the 2023 edition still usable through March 31, 2027, alongside the 2026 Oregon Plumbing Specialty Code (2024 Uniform Plumbing Code) and the 2026 Oregon Electrical Specialty Code (2026 NFPA 70).",
      "sourceUrl": "https://www.portland.gov/code/24/10"
    },
    "permitPolicy": {
      "text": "Portland lets a homeowner pull their own trade permits, with conditions. For plumbing, the city may issue an owner permit only to a bona fide owner of a single-family house who will do the work personally, who lives in it, and where the house is not being built or remodeled for resale or rent; the city weighs whether the owner has shown real knowledge of the work and may require a bond. For electrical, the homeowner must own and live in the home and be the recorded owner on county records rather than an LLC, and may not use the homeowner route on a rental, an ADU, or a house being prepared to sell or lease.",
      "sourceUrl": "https://www.portland.gov/code/25/04"
    },
    "registration": {
      "text": "Portland adds city paperwork on top of the state license. A plumbing permit application has to carry the contractor's State of Oregon plumbing contractor registration, the state contractors board registration, and the City's own Contractors Business License number, and the city will not issue a plumbing permit to a plumbing or sewer contractor until the state registration number is on file with the Plumbing Division. Electrical contractors must hold both an Oregon CCB license and a Building Codes Division electrical license, with both numbers on the application.",
      "sourceUrl": "https://www.portland.gov/code/25/06"
    },
    "codeItems": [
      {
        "text": "Portland's published list of plumbing work needing a permit includes replacing a water heater, capping pipes where a fixture was removed, and installing or replacing fixtures. Simply fixing or maintaining an existing fixture or part, or replacing something that does not use water, needs no permit.",
        "sourceUrl": "https://www.portland.gov/ppd/residential-permitting/residential-plumbing-permits"
      },
      {
        "text": "Portland flags a crossover a national guide misses: swapping a metal water line, copper or galvanized steel, for a plastic one may also require an electrical permit and a new grounding electrode, because the old metal pipe was carrying the ground.",
        "sourceUrl": "https://www.portland.gov/ppd/residential-permitting/residential-plumbing-permits"
      },
      {
        "text": "Portland prices a thermal expansion tank as its own plumbing fixture on the permit fee schedule, so adding one during a water heater swap adds a second fixture charge rather than riding along free.",
        "sourceUrl": "https://www.portland.gov/ppd/documents/plumbing-permit-fee-schedule-city-portland-effective-july-10-2026/download"
      },
      {
        "text": "Small electrical jobs in Portland can run on a state minor electrical label instead of a regular electrical permit. The labels are sold by the Tri-County Service Center rather than by the city, and the city's Building Official still inspects the work and issues any correction notices.",
        "sourceUrl": "https://www.portland.gov/code/26/09"
      },
      {
        "text": "Oregon adds a 12 percent state surcharge to every Portland building, plumbing, electrical and mechanical permit, so the figure on the fee schedule is not the final number. A project can also pull fees from several tables at once, and the city is explicit that a residential addition may be billed from the building, site development, plumbing and electrical schedules together.",
        "sourceUrl": "https://www.portland.gov/bds/fee-schedules"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Portland charges a flat per-fixture plumbing permit fee for a water heater, and if you add a thermal expansion tank at the same time that counts as a second fixture at the same rate.",
        "sourceUrl": "https://www.portland.gov/ppd/documents/plumbing-permit-fee-schedule-city-portland-effective-july-10-2026/download",
        "fee": "$63.00 per water heater (expansion tank, if installed, is a separate $63.00 fixture); 12% Oregon state surcharge is added",
        "feeAsOf": "July 10, 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal is a named line on Portland's plumbing permit fee schedule and is charged at the same flat per-fixture rate as any other fixture.",
        "sourceUrl": "https://www.portland.gov/ppd/documents/plumbing-permit-fee-schedule-city-portland-effective-july-10-2026/download",
        "fee": "$63.00 per garbage disposal; 12% Oregon state surcharge is added",
        "feeAsOf": "July 10, 2026"
      },
      "plumber-service-call": {
        "requirement": "Portland bills a residential plumbing permit by the fixture or item, so a service call that touches one sink, tub, water closet, hose bibb or backflow preventer carries the single flat fixture charge, while repiping the water supply inside the house is priced by floor instead.",
        "sourceUrl": "https://www.portland.gov/ppd/documents/plumbing-permit-fee-schedule-city-portland-effective-july-10-2026/download",
        "fee": "$63.00 per fixture or item; replacing in-building water supply lines, residential: $128.00 first floor + $52.00 each additional floor; 12% Oregon state surcharge is added",
        "feeAsOf": "July 10, 2026"
      },
      "electrician-service-call": {
        "requirement": "Portland prices a small electrical job by the branch circuit, and the first circuit costs far more when you are not also buying a service or feeder fee on the same permit; a panel or service swap is priced by amperage.",
        "sourceUrl": "https://www.portland.gov/ppd/documents/electrical-permit-fee-schedule-city-portland-effective-july-10-2026/download",
        "fee": "Branch circuits without a service or feeder fee: $174.00 first branch circuit + $21.00 each additional; with a service or feeder fee: $21.00 per branch circuit; service or feeder up to 200 amps $212.00; reconnect only $190.00; 12% Oregon state surcharge is added",
        "feeAsOf": "July 10, 2026"
      },
      "smoke-detector-replacement": {
        "requirement": "Portland requires an electrical permit to install, change or repair a hard-wired electrical system, but not to replace a fuse, fix an appliance cord, or swap out an existing appliance, and the city notes an electrical permit can be needed even where no building permit is.",
        "sourceUrl": "https://www.portland.gov/ppd/residential-permitting/residential-electrical-permits"
      }
    }
  },
  "providence-ri": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Providence Department of Inspection and Standards",
      "url": "https://www.providenceri.gov/inspection-standards/"
    },
    "codeEdition": {
      "text": "Providence works from the Rhode Island State Building Codes, which are the 2021 International Code Council model codes plus Rhode Island's own amendments, together with the 2023 National Electrical Code; that set took effect December 1, 2025. The energy code is separate and newer: Rhode Island adopted the 2024 International Energy Conservation Code in full on November 14, 2024.",
      "sourceUrl": "https://www.providenceri.gov/inspection/rhode-island-building-energy-codes-current-standards/"
    },
    "permitPolicy": {
      "text": "Who may apply depends on the trade and on whether you live there. A building permit goes to a licensed contractor or to the owner of a single-family owner-occupied home; mechanical needs a licensed master mechanical contractor or that same owner; electrical needs an \"A\" license electrician or that owner; plumbing needs a licensed master plumber or that owner. If the property is not owner-occupied, or has two or more units, you have to hire a licensed contractor.",
      "sourceUrl": "https://www.providenceri.gov/wp-content/uploads/2021/03/permit-faq-20200302.pdf"
    },
    "registration": {
      "text": "Providence does not run its own trade exam; it checks the state credential. The application has to carry the contractor's name and license number, and an owner who pulls a permit and later decides to hire help signs an affidavit promising to use a licensed and/or registered contractor and to give that license or registration number to the Building Official's office.",
      "sourceUrl": "https://www.providenceri.gov/wp-content/uploads/2017/04/owner-affidavit.pdf"
    },
    "codeItems": [
      {
        "text": "Rhode Island strips the electrical chapters out of its residential code: Chapters 34 through 43 of the 2021 IRC are deleted, and an inspector in Providence works instead from the Rhode Island State Electrical Code, which is the 2023 National Electrical Code with Rhode Island amendments.",
        "sourceUrl": "https://rules.sos.ri.gov/Regulations/part/510-00-00-2"
      },
      {
        "text": "Smoke alarms and carbon monoxide alarms are not a building-code item in Rhode Island. Sections R314 and R315 of the 2021 IRC are deleted without substitution, and both are governed by the Rhode Island Fire Safety Code instead.",
        "sourceUrl": "https://rules.sos.ri.gov/Regulations/part/510-00-00-2"
      },
      {
        "text": "Rhode Island ties the water supply to the certificate of occupancy: a building on a public metered supply must have the water meter installed before a CO is issued, and a private well serving an occupied building must be tested and certified potable before even a temporary CO.",
        "sourceUrl": "https://rules.sos.ri.gov/Regulations/part/510-00-00-3"
      },
      {
        "text": "A building sewer connecting to a public sewer in Rhode Island has to be a minimum of 36 inches below grade, which is a state amendment to the 2021 IRC rather than a model-code figure.",
        "sourceUrl": "https://rules.sos.ri.gov/Regulations/part/510-00-00-2"
      },
      {
        "text": "Rhode Island publishes per-municipality design values in the building code itself. For Providence the table gives a 30 psf ground snow load, a 30 psf flat-roof snow load and a frost depth of 4 feet 0 inches.",
        "sourceUrl": "https://rules.sos.ri.gov/Regulations/part/510-00-00-1"
      },
      {
        "text": "Paying the building permit fee does not cover the trades in Rhode Island: state law says that fee does not relieve the permit holder of other prescribed fees for water taps, sewer connections, electrical and plumbing permits, or inspections.",
        "sourceUrl": "https://webserver.rilegislature.gov/Statutes/TITLE23/23-27.3/23-27.3-118.1.htm"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Providence prices permits off the declared cost of labor and materials rather than charging a flat amount per appliance, so a water heater job is quoted from the city's published fee table with a minimum fee; the permit goes to a licensed master plumber, or to you if you own and occupy the single-family home.",
        "sourceUrl": "https://www.providenceri.gov/wp-content/uploads/2021/03/permit-faq-20200302.pdf",
        "fee": "$0 to $10,000 of cost: $23.00 per thousand of cost (minimum $50.00); $10,000.01 to $50,000: $230.00 + $21.00 per thousand exceeding $10,000.00; more than $50,000.01: $1,070.00 + $19.00 per thousand exceeding $50,000.00",
        "feeAsOf": "Rates set by the State of Rhode Island in July 2018"
      },
      "plumber-service-call": {
        "requirement": "Not every plumbing call in Providence needs a permit: stopping a leak in a drain, water, soil, waste or vent pipe is exempt, as is clearing a stoppage or repairing a leak in pipes, valves or fixtures and taking out and reinstalling a water closet, so long as the repair does not replace or rearrange valves, pipes or fixtures; replacing a defective concealed trap or pipe with new material does need a permit and inspection.",
        "sourceUrl": "https://www.providenceri.gov/wp-content/uploads/2021/03/permit-faq-20200302.pdf",
        "fee": "$0 to $10,000 of cost: $23.00 per thousand of cost (minimum $50.00); $10,000.01 to $50,000: $230.00 + $21.00 per thousand exceeding $10,000.00; more than $50,000.01: $1,070.00 + $19.00 per thousand exceeding $50,000.00",
        "feeAsOf": "Rates set by the State of Rhode Island in July 2018"
      },
      "electrician-service-call": {
        "requirement": "An electrical permit in Providence has to be taken out by an \"A\" license electrician, or by you if you own and occupy a single-family home, and the fee comes off the declared labor-and-materials cost; minor repair work such as replacing lamps, or plugging approved portable equipment into existing receptacles, needs no permit. Electrical work is inspected three times: underground, rough and final.",
        "sourceUrl": "https://www.providenceri.gov/wp-content/uploads/2021/03/permit-faq-20200302.pdf",
        "fee": "$0 to $10,000 of cost: $23.00 per thousand of cost (minimum $50.00); $10,000.01 to $50,000: $230.00 + $21.00 per thousand exceeding $10,000.00; more than $50,000.01: $1,070.00 + $19.00 per thousand exceeding $50,000.00",
        "feeAsOf": "Rates set by the State of Rhode Island in July 2018"
      },
      "smoke-detector-replacement": {
        "requirement": "Smoke and carbon monoxide alarms are not handled through the building permit in Providence: Rhode Island deleted both sections from its residential code and put alarms under the Rhode Island Fire Safety Code instead, so the requirements come from the fire side rather than the building inspector.",
        "sourceUrl": "https://rules.sos.ri.gov/Regulations/part/510-00-00-2"
      }
    }
  },
  "raleigh-nc": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Raleigh Planning and Development Department (Permits and Inspections)",
      "url": "https://raleighnc.gov/permits"
    },
    "codeEdition": {
      "text": "North Carolina enforces one statewide code set and Raleigh's inspectors apply it. The 2018 North Carolina Codes, including the 2018 NC Residential Code, took effect January 1, 2019 and remain in force; they are built on the 2015 International Codes with the 2018 NC Ad-Hoc Committee amendments. Electrical work is judged against the 2020 North Carolina Electrical Code, which is the 2020 NEC plus North Carolina amendments and has been effective since November 1, 2021. The 2024 North Carolina State Building Code has been approved but its effective date was pushed back by the State Fire Marshal.",
      "sourceUrl": "https://www.ncosfm.gov/codes/codes-current-and-past"
    },
    "permitPolicy": {
      "text": "A Raleigh homeowner may act as their own contractor, but must file the city's notarized Owner Exemption Affidavit under N.C.G.S. 87-1(b)(2) and 87-14(a)(1), checking each trade claimed (building, electrical, mechanical, plumbing) and stating the project cost. By signing, the owner agrees to personally superintend the work, to be present for every inspection required by the NC State Building Code, and to occupy the home for twelve months after completion without offering it for rent, lease or sale. Raleigh sends a copy to the NC Licensing Board for General Contractors, and the permit is revoked under N.C.G.S. 160D-1115 if the board finds the exemption does not apply. Otherwise a licensed contractor pulls the permit.",
      "sourceUrl": "https://raleighnc.gov/permits/services/how-get-residential-permit"
    },
    "registration": {
      "text": "Raleigh does not issue its own trade license on top of the North Carolina state license, but every general contractor and sub-contractor must be registered in the city's Permit and Development Portal, with the NC license number entered on the application, before anyone can manage the project, pay fees or schedule an inspection. Plans that are ready to issue but have incomplete contractor information are held at the Customer Service Center for six months and then voided, which can carry an administrative fee. No city registration fee or bond amount is published.",
      "sourceUrl": "https://raleighnc.gov/permits/services/how-get-residential-permit"
    },
    "codeItems": [
      {
        "text": "Raleigh's Residential Permit Application has a Plumbing and Mechanical Changeout block specifically for water heater and A/C replacements. You must answer whether the new unit is the same type as the old one, the same size or smaller, and in the same location. If any answer is no, the city requires a Tier One site plan with the application, which turns a same-day changeout permit into a reviewed project.",
        "sourceUrl": "https://raleighnc.gov/permits/services/how-get-residential-permit"
      },
      {
        "text": "On a Raleigh plumbing final the water system has to be pressurized at the moment the inspector arrives, not simply installed and leak-free. The plumbing rough-in separately requires the drainage test, the water test, vent piping and a shower pan test, and the exterior underground inspection is only called in after the rough-in passes and before the plumbing final.",
        "sourceUrl": "https://raleighnc.gov/permits/services/residential-inspections"
      },
      {
        "text": "Raleigh's mechanical final requires the manufacturer's installation instructions to be left on site for the inspector to read, all gas piping to have been tested, and all carbon monoxide detectors to be in place before the inspection is approved.",
        "sourceUrl": "https://raleighnc.gov/permits/services/residential-inspections"
      },
      {
        "text": "Raleigh charges a reinspection fee for any inspection rescheduled or cancelled on the day it was booked, and field staff cannot cancel same-day, so a water heater or panel job that is not ready costs money rather than just time. The published reinspection fee is $122.00, or $127.00 with the city's 4% technology surcharge.",
        "sourceUrl": "https://raleighnc.gov/permits/services/residential-inspections"
      },
      {
        "text": "North Carolina requires a lien agent to be appointed for contractors and subcontractors on a project, but Raleigh's application notes the appointment is not required for improvements under $40,000 to the owner's existing residence. Most single-trade repairs therefore fall below the threshold, while a larger remodel does not.",
        "sourceUrl": "https://raleighnc.gov/permits/services/how-get-residential-permit"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Raleigh requires a permit to replace a water heater but no plans, as long as the new heater is the same type, the same size or smaller, and in the same location as the old one; the fee falls to the city's minimum trade permit fee, charged per trade.",
        "sourceUrl": "https://raleighnc.gov/permits/services/development-fee-guide-and-calculator",
        "fee": "$124.00 Minimum Trade Permit Fee, per trade; $129.00 including the 4% technology surcharge",
        "feeAsOf": "July 1, 2026 - June 30, 2027 (FY27 Development Fee Guide)"
      },
      "electrician-service-call": {
        "requirement": "An electrical service upgrade, added circuits or outlets, and new switches or light fixtures all need a Raleigh permit but no plans, and because none of that work is itemised in the fee guide it is billed at the minimum trade permit fee.",
        "sourceUrl": "https://raleighnc.gov/permits/services/development-fee-guide-and-calculator",
        "fee": "$124.00 Minimum Trade Permit Fee, per trade; $129.00 including the 4% technology surcharge",
        "feeAsOf": "July 1, 2026 - June 30, 2027 (FY27 Development Fee Guide)"
      },
      "plumber-service-call": {
        "requirement": "Replacing existing water and sewer lines, and plumbing work inside a bathroom or kitchen renovation, need a Raleigh permit but no plans, and unlisted work is charged at the minimum trade permit fee per trade.",
        "sourceUrl": "https://raleighnc.gov/permits/services/development-fee-guide-and-calculator",
        "fee": "$124.00 Minimum Trade Permit Fee, per trade; $129.00 including the 4% technology surcharge",
        "feeAsOf": "July 1, 2026 - June 30, 2027 (FY27 Development Fee Guide)"
      }
    }
  },
  "reno-nv": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Reno Development Services Department, Permit Services",
      "url": "https://reno.gov/business-development/development-services/building-permits.php"
    },
    "codeEdition": {
      "text": "Reno adopted the 2024 building codes and the 2023 National Electrical Code on July 1, 2025, together with the 2024 Northern Nevada Amendments. Applications accepted before January 1, 2026 could still use the 2018 editions if every code matched; from January 1, 2026 the city accepts plans only under the 2024 editions. The set in force is the 2024 IBC, IRC, IEBC, IECC, IFGC and IMC, the 2024 Uniform Plumbing and Uniform Mechanical Codes, and the 2023 NEC.",
      "sourceUrl": "https://reno.gov/business-development/development-services/building-permits.php"
    },
    "permitPolicy": {
      "text": "A homeowner can pull their own permit in Reno by filing the Nevada State Contractors Board Owner Builder Affidavit of Exemption with the permit application. Signing it commits the owner to supervising the work personally, to not hiring an unlicensed person as contractor or construction manager, to using only state-licensed subcontractors, and to not selling or leasing the home for a year after completion. Reno also issues EZ Permits, including the water heater permit, with no plans required.",
      "sourceUrl": "https://reno.gov/Documents/Business%20and%20Development/Development%20Services/Building%20Permits/Building%20Permit%20Applications/Owner%20Builder%20Affidavit.pdf"
    },
    "registration": {
      "text": "Reno publishes no separate city trade registration for plumbers or electricians, but gas water heater and furnace change-outs carry a local credential requirement: the manometer test has to be done by someone holding a valid Washoe County manometer tester card, and the card number must be given when the inspection is requested.",
      "sourceUrl": "https://reno.gov/Documents/Business%20and%20Development/Development%20Services/Building%20Permits/Resources%20to%20Assist%20with%20The%20Application%20Process%20and%20Plan%20Submission/EZ%20Permits%20General%20Requirements%2007012025.pdf"
    },
    "codeItems": [
      {
        "text": "Reno requires a manometer test on every gas water heater and furnace change-out, and the test has to be performed by a person holding a valid Washoe County manometer tester card whose number is supplied when the inspection is scheduled. The requirement comes from the 2024 Northern Nevada Amendments, section G2417.6.2.",
        "sourceUrl": "https://reno.gov/Documents/Business%20and%20Development/Development%20Services/Building%20Permits/Resources%20to%20Assist%20with%20The%20Application%20Process%20and%20Plan%20Submission/EZ%20Permits%20General%20Requirements%2007012025.pdf"
      },
      {
        "text": "Reno inspectors check earthquake strapping on water heaters: the tank must be anchored or strapped against seismic movement, with straps in the upper third and the lower third of the tank and the lower strap at least 4 inches above the controls (2024 IRC R301.2.2.10 and P2801.7).",
        "sourceUrl": "https://reno.gov/Documents/Business%20and%20Development/Development%20Services/Building%20Permits/Resources%20to%20Assist%20with%20The%20Application%20Process%20and%20Plan%20Submission/EZ%20Permits%20General%20Requirements%2007012025.pdf"
      },
      {
        "text": "Where a leak from a storage-type water heater would cause damage, Reno requires the tank to sit in a pan at least 1-1/2 inches deep sized to catch drips and condensate (2024 IRC P2801.5). The temperature and pressure relief valve may discharge to the floor, into that pan, to a waste receptor or outdoors (2024 IRC P2804).",
        "sourceUrl": "https://reno.gov/Documents/Business%20and%20Development/Development%20Services/Building%20Permits/Resources%20to%20Assist%20with%20The%20Application%20Process%20and%20Plan%20Submission/EZ%20Permits%20General%20Requirements%2007012025.pdf"
      },
      {
        "text": "On a gas appliance change-out Reno checks for a sediment trap installed downstream of the appliance shutoff valve and as close to the appliance inlet as possible where the appliance does not already include one (2024 IRC G2419.4), for combustion air to every gas-fired appliance (G2407), and for ignition sources raised at least 18 inches above a garage floor (M1307.3, P2801.6). An electric water heater needs a disconnect within sight or a lockable one (E4101).",
        "sourceUrl": "https://reno.gov/Documents/Business%20and%20Development/Development%20Services/Building%20Permits/Resources%20to%20Assist%20with%20The%20Application%20Process%20and%20Plan%20Submission/EZ%20Permits%20General%20Requirements%2007012025.pdf"
      },
      {
        "text": "On an electrical service change, Reno requires a surge protective device on every service supplying a one- or two-family dwelling (2024 IRC E3606.5.1 through E3606.5.3), grounding through a concrete-encased electrode, two ground rods or another means approved under 2023 NEC 250.52, 30 inches of working width and 36 inches of working depth at the new equipment (NEC 110.26), and durable circuit marking on the overcurrent devices (NEC 408.4).",
        "sourceUrl": "https://reno.gov/Documents/Business%20and%20Development/Development%20Services/Building%20Permits/Resources%20to%20Assist%20with%20The%20Application%20Process%20and%20Plan%20Submission/EZ%20Permits%20General%20Requirements%2007012025.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a residential water heater in Reno takes a permit, but it is an EZ Permit issued without plans at a flat price, and the change-out is inspected.",
        "sourceUrl": "https://reno.gov/Documents/Business%20and%20Development/Development%20Services/Building%20Permits/Fees/FY27%20Permit%20Fees.pdf",
        "fee": "Residential EZ Permits — Water Heater $45.00 (Commercial EZ Permits — Water Heater $133.00)",
        "feeAsOf": "July 1, 2026"
      },
      "electrician-service-call": {
        "requirement": "Adding or replacing receptacles, switches, outlets or fixtures in Reno takes a flat-rate electrical permit covering up to 20 devices, and a meter or service change is a separate EZ Permit.",
        "sourceUrl": "https://reno.gov/Documents/Business%20and%20Development/Development%20Services/Building%20Permits/Fees/FY27%20Permit%20Fees.pdf",
        "fee": "Residential Flat Rate — Receptacles/Switch/Outlet/Fixtures, first 20: $135.00 (includes the $45.00 application fee and the $45.00 permit issuance fee); over 20: $156.00. Residential EZ Permit — Service Change $88.00",
        "feeAsOf": "July 1, 2026"
      },
      "plumber-service-call": {
        "requirement": "Common household plumbing repairs in Reno are priced as flat EZ Permits rather than per fixture, and a whole-house repipe is a flat-rate permit.",
        "sourceUrl": "https://reno.gov/Documents/Business%20and%20Development/Development%20Services/Building%20Permits/Fees/FY27%20Permit%20Fees.pdf",
        "fee": "Residential EZ Permits — Water Line Replacement $90.00, Sewer Line Replacement $90.00, Gas Line $90.00. Residential Flat Rate — Whole House Repipe $360.00, Gas Piping/System Residential $200.00",
        "feeAsOf": "July 1, 2026"
      }
    }
  },
  "richmond-va": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Richmond Department of Planning & Development Review, Bureau of Permits and Inspections",
      "url": "https://rva.gov/planning-development-review/permits-and-inspections"
    },
    "codeEdition": {
      "text": "Richmond enforces the Virginia Uniform Statewide Building Code, and its own homeowner guide works from the 2021 Virginia Residential Code. Virginia adopted the 2021 I-codes and the 2020 National Electrical Code effective January 18, 2024.",
      "sourceUrl": "https://dhcd.virginia.gov/codes"
    },
    "permitPolicy": {
      "text": "A Richmond permit application may be made by the owner or lessee of the property, by an agent of either, by the registered design professional, or by the contractor doing the work or any of their agents, and the full name and address of owner, lessee and applicant all have to be on the application. Residential plans do not have to be drawn by a registered design professional — the applicant, owner or contractor may prepare them — but structural elements that do not conform to the 2021 Virginia Residential Code must be engineered.",
      "sourceUrl": "https://rva.gov/sites/default/files/2025-05/Homeowner%27s%20Permit%20Process%20Guide_2021%20VRC.pdf"
    },
    "registration": {
      "text": "Richmond checks the state credential rather than issuing its own. The city's trade permit applications ask for the license type, the class (A, B or C) and the state license number, and the city's homeowner guide tells residents to hire only contractors licensed with the Virginia Department of Professional and Occupational Regulation and to verify them with DPOR.",
      "sourceUrl": "https://rva.gov/sites/default/files/2024-05/Plumbing-PermitApplication_0.pdf"
    },
    "codeItems": [
      {
        "text": "Trade work cannot ride along on a Richmond residential building permit. Mechanical, electrical, plumbing and gas piping each need their own separate application, and residential trade permit applications do not require construction documents.",
        "sourceUrl": "https://rva.gov/sites/default/files/2025-05/Homeowner%27s%20Permit%20Process%20Guide_2021%20VRC.pdf"
      },
      {
        "text": "For any Richmond inspection involving exposed, energized electrical parts — including any inspection of service equipment after the utility connection is made — the installing electrician or a qualified representative has to be on site to de-energize, open and close the equipment for the inspector.",
        "sourceUrl": "https://rva.gov/planning-development-review/permits-and-inspections"
      },
      {
        "text": "Richmond no longer performs the shower liner test inspection. The installer does the installation and test, and the contractor or owner must hand the completed shower liner test certification to the building inspector at the final building inspection.",
        "sourceUrl": "https://rva.gov/planning-development-review/permits-and-inspections"
      },
      {
        "text": "Richmond does not take your word for the job value: the value of work used to calculate the permit fee is the higher of the contractor's estimate or the RS Means price, and a 2.0% state surcharge is added to the final calculated fee on every permit.",
        "sourceUrl": "https://www.rva.gov/sites/default/files/2024-08/PermitsFeeSchedule.pdf"
      },
      {
        "text": "Starting work without a Richmond permit is priced in the fee schedule: investigation of a \"Stop Work\" order costs $400.00 per permit, and a residential re-inspection or a failure to appear for an inspection costs $32.00.",
        "sourceUrl": "https://www.rva.gov/sites/default/files/2024-08/PermitsFeeSchedule.pdf"
      },
      {
        "text": "A Richmond permit is valid 180 days from issuance, and each building inspection on the property extends it another 180 days from the date of that last inspection.",
        "sourceUrl": "https://rva.gov/sites/default/files/2025-05/Homeowner%27s%20Permit%20Process%20Guide_2021%20VRC.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "A water heater swap in Richmond goes on its own plumbing permit — it cannot be added to a building permit — and if the heater is gas the gas piping takes a separate gas-piping permit; the fee is set by the value of the work, with a flat minimum for small jobs, and a 2% state surcharge on top.",
        "sourceUrl": "https://www.rva.gov/sites/default/files/2024-08/PermitsFeeSchedule.pdf",
        "fee": "Residential 1 & 2 family: $63.00 for value of work $0–$2,000; over $2,000, $63.00 plus $6.07 per thousand or fraction thereof; a 2.0% state surcharge is added to the final calculated fee",
        "feeAsOf": "Effective 07/01/2024 (Revision 07-01-2024)"
      },
      "plumber-service-call": {
        "requirement": "Richmond uses one valuation-based fee table for building, mechanical, electrical, plumbing and gas-piping permits alike, so a plumbing permit for a small residential repair lands on the minimum fee; a residential re-inspection, or not being there when the inspector arrives, costs extra.",
        "sourceUrl": "https://www.rva.gov/sites/default/files/2024-08/PermitsFeeSchedule.pdf",
        "fee": "Residential 1 & 2 family: $63.00 for value of work $0–$2,000; over $2,000, $63.00 plus $6.07 per thousand or fraction thereof; residential re-inspection or failure to appear $32.00; after-hours inspection $110.00 per hour; 2.0% state surcharge added to the final calculated fee",
        "feeAsOf": "Effective 07/01/2024 (Revision 07-01-2024)"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Richmond needs its own electrical permit, priced from the value of the work on the same residential table as the other trades; expect the electrician to have to be on site for any inspection where energized parts must be opened up.",
        "sourceUrl": "https://www.rva.gov/sites/default/files/2024-08/PermitsFeeSchedule.pdf",
        "fee": "Residential 1 & 2 family: $63.00 for value of work $0–$2,000; over $2,000, $63.00 plus $6.07 per thousand or fraction thereof; residential re-inspection or failure to appear $32.00; 2.0% state surcharge added to the final calculated fee",
        "feeAsOf": "Effective 07/01/2024 (Revision 07-01-2024)"
      }
    }
  },
  "riverside-ca": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Riverside Community & Economic Development Department, Building & Safety Division",
      "url": "https://riversideca.gov/cedd/building-safety"
    },
    "codeEdition": {
      "text": "Riverside adopted the latest California Code of Regulations Title 24, and it took effect in the city on January 1, 2026. The division lists the adopted parts as the 2025 California Building, Residential, Fire, Existing Building, Wildland-Urban Interface, Historical Building, Electrical, Plumbing, Mechanical, Green Building Standards, Energy, Administrative and Referenced Standards Codes. Riverside also publishes its own local design criteria an inspector works from: seismic design category D, wind exposure category C for most of the city, energy climate zone 10, very heavy termite exposure, and a roof drainage design rainfall of 2 inches per hour.",
      "sourceUrl": "https://riversideca.gov/cedd/building-safety/building-codes-design-criteria/california-building-standards"
    },
    "permitPolicy": {
      "text": "A Riverside homeowner can pull their own permit, but the paperwork is strict: the Property Owner's Package has twelve statements that must each be initialed, and the owner must sign it in front of a notary unless they come to City Hall in person, where staff witness the signature and check a driver's licence or other photo ID. An agent cannot execute the form for the owner, and if the owner sends someone else to pull the permit the city wants a notarized letter authorising that person. The package has to be completed separately for every permit the owner pulls. Where an emergency forced the replacement or repair to be done first, the permit application is due to the Building Official by the next working business day.",
      "sourceUrl": "https://riversideca.gov/cedd/sites/riversideca.gov.cedd/files/pdf/building/forms/103_PROPERTY-OWNERS-PACKAGE_V1.0.pdf"
    },
    "registration": {
      "text": "Riverside does not add a trade licence on top of the state contractor licence, but it does tax contractors directly and publishes the rates. A contractor working in the city owes city business tax and holds a Business Tax Certificate, which is not transferable and must be paid before starting business. The published rate is a $397.00 annual base tax for an engineering or general contractor, or $273.00 for a specialty contractor, each covering one owner only, with $6.00 added for every additional employee, owner, partner or associate, plus a $4 state disability-access fee on any local business licence application or renewal. The rates adjust automatically each November 1 with the Consumer Price Index under Riverside Municipal Code 5.04.300.",
      "sourceUrl": "https://riversideca.gov/finance/PDF/2026/Business-Tax-Rates.pdf"
    },
    "codeItems": [
      {
        "text": "Riverside makes a gas or propane water heater installation leave room for its electric replacement. The city's residential correction notes require a designated space at least 2 feet 6 inches by 2 feet 6 inches and 7 feet tall for a future heat pump water heater. Where that space is within 3 feet of the heater it must also get a 125 volt 20 amp receptacle fed by a 120/240 volt three-conductor 10 AWG copper branch circuit, the unused third conductor labelled \"spare\" at both ends and electrically isolated, a single-pole breaker space reserved immediately next to that circuit's breaker and labelled \"Future 240V Use\", and a condensate drain no more than 2 inches above the base of the installed heater that drains by gravity. Where the designated space is more than 3 feet away, the requirement shifts to a dedicated 240 volt 30 amp minimum circuit terminated within 3 feet of that space under a blank cover marked \"240V ready\", reserved double-pole breaker space, and cold and hot water piping routed through the future location and left exposed and accessible.",
        "sourceUrl": "https://riversideca.gov/cedd/sites/riversideca.gov.cedd/files/pdf/building/forms/RESIDENTIAL%20GENERAL%20NOTES%209-15-26.pdf"
      },
      {
        "text": "Combustion air is an explicit Riverside correction item on a non-direct-vent water heater: two permanent openings are required in the enclosure, one starting within 12 inches of the top and one within 12 inches of the bottom, communicating either directly or by duct with the outdoors or a space that freely communicates with the outdoors, under California Plumbing Code 506.4.1.",
        "sourceUrl": "https://riversideca.gov/cedd/sites/riversideca.gov.cedd/files/pdf/building/forms/RESIDENTIAL%20GENERAL%20NOTES%209-15-26.pdf"
      },
      {
        "text": "Riverside applies the state water-conserving fixture retrofit by build date. Its residential notes require all noncompliant plumbing fixtures in a single-family property built before January 1, 1994 to be replaced with water-conserving fixtures when the property gets an addition, alteration or improvement, citing California Green Building Standards Code 4.303.1 and Civil Code 1101.1, and separately require maximum flow rates for showerheads, lavatory faucets, kitchen faucets and water closets to be shown on the plumbing fixture schedule.",
        "sourceUrl": "https://riversideca.gov/cedd/sites/riversideca.gov.cedd/files/pdf/building/forms/RESIDENTIAL%20GENERAL%20NOTES%209-15-26.pdf"
      },
      {
        "text": "Riverside lets the property owner self-certify smoke and carbon monoxide alarms instead of having an inspector climb a ladder. Its Bulletin 302 form has the owner certify the alarm count and locations under the California Residential Code once the valuation of additions, alterations or repairs to an existing dwelling passes $1,000; the city notes this is voluntary, and an owner who prefers a City Building Inspector to verify instead has to have an adult present and supply a ladder and access to every alarm location. The bulletin also states that an electrical permit is required for alarms that have to be connected to the building wiring, and that physical interconnection is not required where listed wireless alarms all sound together.",
        "sourceUrl": "https://riversideca.gov/cedd/sites/riversideca.gov.cedd/files/pdf/building/forms/302_SMOKE-AND-CARBON-RESIDENTIAL_V1.0.pdf"
      },
      {
        "text": "Panel work in Riverside pulls in EV-capable provisions. The city's residential notes require a listed raceway of at least trade size 1 running from the main service or subpanel to an enclosure near the proposed EV charger location, continuous through concealed or inaccessible spaces, with the service panel or subpanel carrying capacity for a 40 amp 208/240 volt minimum dedicated branch circuit and reserved breaker space. The circuit directory has to mark the reserved space \"EV CAPABLE\" and the raceway termination must be permanently and visibly marked the same way. The notes also require listed tamper-resistant receptacles for all 15 and 20 amp, 125 and 250 volt nonlocking receptacles in the areas California Electrical Code 406.12 lists.",
        "sourceUrl": "https://riversideca.gov/cedd/sites/riversideca.gov.cedd/files/pdf/building/forms/RESIDENTIAL%20GENERAL%20NOTES%209-15-26.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Riverside requires a plumbing permit to replace a water heater, priced per appliance by BTU input on top of a flat permit issuance fee, with a separate line for the gas vent; the inspector checks combustion air openings and, on a gas heater, the designated space and circuit left for a future heat pump water heater.",
        "sourceUrl": "https://www.riversideca.gov/finance/PDF/Fees-and-Charges-as-of-July-1,-2026.pdf",
        "fee": "$37.00 for a water heater up to 100,000 BTU ($57.00 for 100,001 to 1,000,000 BTU), plus the $41.00 plumbing Permit Issuance Fee and $18.00 per water heater gas vent; a 14% surcharge for the General Plan Maintenance Fee and Technology Fee is added to each of these",
        "feeAsOf": "FY 2026/27 Schedule of Fees and Charges, as of July 1, 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "Riverside publishes a per-unit plumbing permit fee for a garbage disposal, charged the same as a dishwasher and added to the flat plumbing permit issuance fee; the city's work-exempt bulletin exempts only clearing stoppages and repairing leaks that do not require replacing or rearranging valves, pipes or fixtures, so a disposal swap is not on the exempt list.",
        "sourceUrl": "https://www.riversideca.gov/finance/PDF/Fees-and-Charges-as-of-July-1,-2026.pdf",
        "fee": "$33.00 per garbage disposal or dishwasher, plus the $41.00 plumbing Permit Issuance Fee, plus the 14% General Plan Maintenance and Technology Fee surcharge",
        "feeAsOf": "FY 2026/27 Schedule of Fees and Charges, as of July 1, 2026"
      },
      "plumber-service-call": {
        "requirement": "Riverside charges plumbing permits per fixture or per item on top of one flat permit issuance fee, so the bill tracks exactly what was touched; stopping a leak or clearing a stoppage needs no permit, but once a concealed pipe or trap has to be removed and replaced with new material the city treats it as new work requiring a permit and inspection.",
        "sourceUrl": "https://www.riversideca.gov/finance/PDF/Fees-and-Charges-as-of-July-1,-2026.pdf",
        "fee": "$41.00 plumbing Permit Issuance Fee, plus per item: $66.00 residential building sewer, $6.00 each drain or sink, $37.00 each repair or alteration of drains or vents, $18.00 each trap, $118.00 full dwelling re-pipe or $66.00 partial, $22.00 each add or alter gas piping, $70.00 for other fixtures not otherwise specified; a 14% surcharge is added",
        "feeAsOf": "FY 2026/27 Schedule of Fees and Charges, as of July 1, 2026"
      },
      "electrician-service-call": {
        "requirement": "Riverside prices electrical permits per item on top of one flat issuance fee, with a service change-out priced by amperage; only minor repair and maintenance such as changing lamps or plugging approved portable equipment into existing receptacles is exempt from permit.",
        "sourceUrl": "https://www.riversideca.gov/finance/PDF/Fees-and-Charges-as-of-July-1,-2026.pdf",
        "fee": "$41.00 electrical Permit Issuance Fee, plus per item: $90.00 for a service 0 to 200A, $160.00 for 201A to 1,000A, $103.00 partial dwelling re-wire or $188.00 full re-wire, $41.00 per switchboard sub-panel up to 600V, $10.00 per dedicated circuit, $1.65 per outlet or receptacle, $11.00 per light fixture, $57.00 meter reset, $66.00 residential EV charger; a 14% surcharge is added",
        "feeAsOf": "FY 2026/27 Schedule of Fees and Charges, as of July 1, 2026"
      },
      "smoke-detector-replacement": {
        "requirement": "Riverside needs an electrical permit for a smoke or carbon monoxide alarm that has to be connected to the building wiring, and once the valuation of additions, alterations or repairs to an existing dwelling exceeds $1,000 the city requires the full set of alarms to be brought up to the California Residential Code locations; the owner can sign the city's Bulletin 302 self-certification form instead of having an inspector verify them, and battery-only alarms are allowed where the work does not strip wall and ceiling finishes and there is no attic, basement or crawl space to run wiring through.",
        "sourceUrl": "https://riversideca.gov/cedd/sites/riversideca.gov.cedd/files/pdf/building/forms/302_SMOKE-AND-CARBON-RESIDENTIAL_V1.0.pdf"
      }
    }
  },
  "rochester-ny": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Rochester Department of Neighborhood and Business Development",
      "url": "https://cityofrochester.gov/nbdpermits"
    },
    "codeEdition": {
      "text": "Rochester enforces the New York State Uniform Fire Prevention and Building Code. The State repealed the 2020 edition and adopted the 2025 code books, including the 2025 Residential Code and 2025 Plumbing Code of New York State, effective December 31, 2025; permit applications filed on or after that date must comply with the 2025 code.",
      "sourceUrl": "https://dos.ny.gov/notice-adoption"
    },
    "permitPolicy": {
      "text": "Rochester lets a homeowner pull trade permits, but only a narrow kind of homeowner. An electrical permit must be applied for by a licensed electrician or by a single-family owner occupant doing their own work, and a plumbing permit works the same way. Both are filed through the city's online portal. An electrical reconnection permit, the one that gets power restored to a property, is the exception: anyone may apply for it.",
      "sourceUrl": "https://cityofrochester.gov/nbdpermits"
    },
    "registration": {
      "text": "Rochester licenses its own tradespeople on top of anything the state requires. A plumber holding a certificate of competency from the city's Examining Board of Plumbers must register with the Board before doing business in the city, paying a $10 license certificate charge plus a $75 license fee. Licenses run up to 24 months and the license fee is $200; a master plumber who misses the renewal date pays $230 to renew and may not perform any new or unfinished plumbing work until the license is current. Electrical inspection licensing carries a $150 annual license fee.",
      "sourceUrl": "https://ecode360.com/RO0104/laws/LF2730908.pdf"
    },
    "codeItems": [
      {
        "text": "Rochester runs electrical work through a certificate system on top of the permit: filing a certificate of electrical work under city code section 39-305 costs $80, and the city separately licenses the electrical inspection agencies that issue those certificates at a $150 annual license fee.",
        "sourceUrl": "https://ecode360.com/RO0104/laws/LF2730908.pdf"
      },
      {
        "text": "Doing permitted work in Rochester without the permit is priced, not just warned about: the penalty is the applicable permit fee but no less than $235 for residential work and $475 for commercial work, and the permit fee itself is still owed on top.",
        "sourceUrl": "https://ecode360.com/RO0104/laws/LF2730908.pdf"
      },
      {
        "text": "Rochester's fee code defines a plumbing fixture more broadly than most: for fee purposes a fixture is anything carrying or discharging waste or water connected directly or indirectly to the plumbing system, which it says expressly includes roof drains and conductors conveying storm water and any device accepting condensate drainage. A condensate drain from a high-efficiency appliance therefore counts as a fixture on the permit.",
        "sourceUrl": "https://ecode360.com/RO0104/laws/LF2730908.pdf"
      },
      {
        "text": "Calling for an inspection before the work is actually ready costs money in Rochester: a reinspection or callback when work is not ready is $100 each on both the plumbing and electrical schedules, and an inspection requested on a Saturday, Sunday, holiday or outside regular hours is billed at $100 an hour with a four-hour minimum if the inspector was called in.",
        "sourceUrl": "https://ecode360.com/RO0104/laws/LF2730908.pdf"
      },
      {
        "text": "A replacement air conditioning condenser in Rochester is a zoning question as well as a mechanical one: the city requires residential A/C units to be placed in the rear yard, placed to the manufacturer's specifications, and the application must include an instrument survey map showing the proposed location.",
        "sourceUrl": "https://cityofrochester.gov/sites/default/files/2024-10/HVAC%20OCTOBER%202024_0.pdf"
      },
      {
        "text": "Rochester is one of twenty-five New York cities the Department of Health designates a lead community of concern, so from October 7, 2026 the city's code enforcement program must document compliance with lead safety certifications on covered pre-1980 rental dwellings of two or more units.",
        "sourceUrl": "https://dos.ny.gov/notice-adoption"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Rochester is plumbing-permit work, charged as a base fee plus a per-fixture charge; the July 2026 fee ordinance deleted the separate hot water heater line and now simply counts the heater as one of the fixtures. The permit goes to a licensed plumber or to a single-family owner occupant doing their own work.",
        "sourceUrl": "https://ecode360.com/RO0104/laws/LF2730908.pdf",
        "fee": "$100 base fee for all plumbing permits, plus $20 per fixture for residential (3 units or less)",
        "feeAsOf": "2026-07-01"
      },
      "plumber-service-call": {
        "requirement": "Rochester prices a plumbing permit as a flat base fee plus a charge for each fixture installed, removed or capped, with the residential rate applying to buildings of three units or less; a reinspection because the work was not ready is billed separately.",
        "sourceUrl": "https://ecode360.com/RO0104/laws/LF2730908.pdf",
        "fee": "$100 base fee for all plumbing permits, plus $20 per fixture residential (3 units or less) or $25 per fixture commercial (4+ units or non-residential); $135 to renew a water service under 2 inches with no street work; $100 reinspection or callback when work is not ready",
        "feeAsOf": "2026-07-01"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal is counted as a plumbing fixture on a Rochester plumbing permit; the city's July 2026 fee ordinance removed the old separate garbage disposal line item and charges the standard per-fixture rate on top of the plumbing base fee.",
        "sourceUrl": "https://ecode360.com/RO0104/laws/LF2730908.pdf",
        "fee": "$100 base fee for all plumbing permits, plus $20 per fixture for residential (3 units or less)",
        "feeAsOf": "2026-07-01"
      },
      "electrician-service-call": {
        "requirement": "Rochester charges flat electrical inspection fees by the kind of job rather than by project cost, with separate published amounts for a small renovation, a service upgrade, a heat pump or A/C hookup and a safety inspection; filing the certificate of electrical work afterwards costs extra.",
        "sourceUrl": "https://ecode360.com/RO0104/laws/LF2730908.pdf",
        "fee": "Residential renovation/addition $160 (200 sq ft or less), $200 (over 200 up to 1,000 sq ft), $235 (over 1,000 sq ft); new service installation or upgrade $160 for 200 amps or less and $220 over 200 amps, each plus $55 per additional meter; A/C or heat pump $100; alarm system $100; safety inspection $100 (2 meters or fewer); reinspection $100; certificate of electrical work filing fee $80",
        "feeAsOf": "2026-07-01"
      }
    }
  },
  "sacramento-ca": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Sacramento Community Development Department, Building Division",
      "url": "https://www.cityofsacramento.gov/community-development/building"
    },
    "codeEdition": {
      "text": "Since January 1, 2026 Sacramento has required all new plan review and permit applications to comply with the 2025 California Building Standards Codes plus the city's own amendments. City Code Title 15 defines the governing editions as the 2025 California Building Code (Volumes 1 and 2), 2025 California Existing Building Code, 2025 California Electrical Code, 2025 California Energy Code, 2025 California Green Building Standards Code and 2025 California Historical Building Code. The local amendments were adopted by Ordinance 2025-0031 on December 2, 2025, effective January 1, 2026.",
      "sourceUrl": "https://www.cityofsacramento.gov/community-development/building/building-codes"
    },
    "permitPolicy": {
      "text": "Anyone may apply, but Sacramento can only issue the permit to a property owner, a licensed contractor, or an authorized agent. A property owner must sign the city's Owner Builder Verification form (CDD-0220) stating they are actually doing the work themselves and are exempt from carrying workers' compensation insurance, or else supply a certificate of insurance; a licensed contractor must supply a workers' compensation certificate. Homeowners can self-serve online for only three minor permits on a single-family home or duplex, a re-roof, an HVAC change-out and a water heater change-out, while other minor permits have to be emailed in with the application forms.",
      "sourceUrl": "https://www.cityofsacramento.gov/community-development/building/permit-services/who-may-apply-for-a-permit"
    },
    "registration": {
      "text": "Sacramento does not issue its own trade licence on top of the California state contractor licence, but a contractor has to register with the city's Public Permit Portal before pulling minor permits online, following the city's Online Permitting Registration Guide. Sacramento also adds a city operations tax to the permit, and that tax is charged only when a California licensed contractor, rather than the homeowner, is the permit holder. No registration fee or bond figure is published.",
      "sourceUrl": "https://www.cityofsacramento.gov/community-development/building/permit-services/minor-permits"
    },
    "codeItems": [
      {
        "text": "Sacramento rewrites California Plumbing Code 312.4 because the city's farming history left many areas with caustic soils that eat buried metal pipe. Buried ferrous potable water and gas supply piping needs a machine-applied protective coating and cathodic protection. Galvanic anodes have to sit at least three feet below grade and below the pipe, at least four feet horizontally from any other buried metallic pipe, and be flooded with at least five gallons of water before backfill. Water supply piping must be isolated at the utility tap and again at the foundation next to the full-way shut-off valve; gas supply piping must be isolated at the foundation line or at the appliance; and isolation fittings must be at least six inches above grade except at the water tap.",
        "sourceUrl": "https://www.cityofsacramento.gov/content/dam/portal/cdd/Building/building-codes/OR2025-0031-Ordinance-Deleting-Chapter-15.38-Amending-Various-Provisions-of-Title-15-Adopting-Local-Amendments-CA-BSC_2025-1202.pdf"
      },
      {
        "text": "A water heater, panel swap, rewire, sewer repair or re-plumb is a Sacramento minor permit, which means no construction plans are submitted and all review for code compliance happens in the field. The inspector is the only review the job gets, so anything that would normally be caught on paper gets caught at the house.",
        "sourceUrl": "https://www.cityofsacramento.gov/community-development/building/permit-services/minor-permits"
      },
      {
        "text": "Sacramento carves EV charging out of its minor electrical permits. A new service panel, a rewire, whole house fans, ceiling fans and ordinary new circuits are all minor permits, but a new EV charger circuit requires a plan review submittal instead of a field-only permit.",
        "sourceUrl": "https://www.cityofsacramento.gov/community-development/building/permit-services/minor-permits"
      },
      {
        "text": "Sacramento adds a cost trigger to California Existing Building Code 304.3: a seismic evaluation of the building is required once the total construction cost, excluding furnishings, fixtures, equipment and normal maintenance, exceeds 25 percent of the cost of replacing the building. The running total counts earlier modifications made after the 1995 California Building Code was adopted that did not themselves require a seismic retrofit, so a series of remodels can push a later project over the line.",
        "sourceUrl": "https://www.cityofsacramento.gov/content/dam/portal/cdd/Building/building-codes/OR2025-0031-Ordinance-Deleting-Chapter-15.38-Amending-Various-Provisions-of-Title-15-Adopting-Local-Amendments-CA-BSC_2025-1202.pdf"
      },
      {
        "text": "Sacramento adds California Residential Code section R308.1.2 requiring the address on all new buildings to be illuminated at night, internally or externally. An externally lit address sign must read at an intensity of at least 5.0 foot-candles; an internally lit sign must give equivalent luminance.",
        "sourceUrl": "https://www.cityofsacramento.gov/content/dam/portal/cdd/Building/building-codes/OR2025-0031-Ordinance-Deleting-Chapter-15.38-Amending-Various-Provisions-of-Title-15-Adopting-Local-Amendments-CA-BSC_2025-1202.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Sacramento requires a permit to install, replace or move a water heater, and it is handled as a minor permit with no plans and all code checking done in the field; a homeowner can pull a water heater change-out online, and the city publishes an average total permit cost.",
        "sourceUrl": "https://www.cityofsacramento.gov/community-development/building/building-fees/average-total-cost-for-common-residential-minor-permits",
        "fee": "$95.00 average total permit cost for a water heater (non-solar) new installation, replacement, or move"
      },
      "plumber-service-call": {
        "requirement": "Sewer repair and replacement, water service repair and replacement, re-plumbing supply and drainage piping, and fixture replacement all need a Sacramento minor permit, and the city publishes the same average total cost for each.",
        "sourceUrl": "https://www.cityofsacramento.gov/community-development/building/building-fees/average-total-cost-for-common-residential-minor-permits",
        "fee": "$95.00 average total permit cost each for re-pipe (whole or partial dwelling), sewer service repair or replace, water service repair or replace, and gas line repair or replacement"
      },
      "electrician-service-call": {
        "requirement": "A main or sub service panel change-out, a new or repaired circuit, a whole or partial rewire, and ceiling fans all need a Sacramento minor permit, with the published average total cost the same for each; a new EV charger circuit is the exception and needs plan review.",
        "sourceUrl": "https://www.cityofsacramento.gov/community-development/building/building-fees/average-total-cost-for-common-residential-minor-permits",
        "fee": "$95.00 average total permit cost each for an electrical panel change-out or replacement, adding or repairing an electrical circuit, and a whole or partial re-wire"
      }
    }
  },
  "salt-lake-city-ut": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Salt Lake City Building Services (Department of Community and Neighborhoods)",
      "url": "https://www.slc.gov/buildingservices/building-permits"
    },
    "codeEdition": {
      "text": "Salt Lake City enforces the building and fire codes adopted and amended by the State of Utah, with a limited layer of city rules in Salt Lake City Code Title 18. The State Construction Code in force incorporates the 2024 International Building Code (with Appendices C and J), the 2021 International Residential Code, the 2024 International Plumbing Code, the 2024 International Mechanical Code, the 2024 International Fuel Gas Code, the 2023 National Electrical Code, the 2024 International Energy Conservation Code and the 2024 International Existing Building Code, each as modified by the statewide and local amendments in Utah Code Title 15A, Chapters 3 and 4. The city applies the codes in effect on the date a plan submission is accepted for review.",
      "sourceUrl": "https://le.utah.gov/xcode/Title15A/Chapter2/C15A-2-S103_2026050620260701.html"
    },
    "permitPolicy": {
      "text": "Salt Lake City requires a permit before any installation, alteration or improvement to a building's electrical, plumbing or mechanical system. Electrical, plumbing and mechanical work is permitted separately from the building permit, and the city publishes a reduced homeowner electrical remodel permit, so a homeowner is not locked out of trade permits. A homeowner pulling a permit for their primary residence has to file the Owner Builder Certification required by the Utah Construction Trades Licensing Act, in which they certify the work is for personal, non-commercial use and will be done by themselves, a licensed contractor, or their own insured employees; paying an unlicensed person more than token compensation is a Class A misdemeanor exposing the owner to a fine of up to $2,000 per day.",
      "sourceUrl": "https://www.slc.gov/buildingservices/building-permits"
    },
    "registration": {
      "text": "Utah licenses the trades at the state level through the Division of Professional Licensing, but a contractor working in Salt Lake City also needs a city business license. The Consolidated Fee Schedule charges every business a base license fee — $198 commercial effective September 2026 — plus a $34 annual Construction Business fee and a $29 annual fee per full or part-time employee where the business has more than one. The city publishes a Contractor Transfer Request form for moving a contractor between permits; no separate city trade examination or bond is published for plumbers or electricians.",
      "sourceUrl": "https://tools.slc.gov/feeschedule/"
    },
    "codeItems": [
      {
        "text": "Utah replaces the IRC water heater bracing section outright with its own seismic rule, and Salt Lake City enforces it: a water heater has to be anchored or strapped against horizontal earthquake displacement, with the straps landing within the upper one-third and the lower one-third of the tank's height. A single mid-tank strap does not satisfy the inspector.",
        "sourceUrl": "https://le.utah.gov/xcode/Title15A/Chapter3/C15A-3-S205_2026050620260701.html"
      },
      {
        "text": "Utah tightens the water heater drain pan rules. A pan drain may be tied directly into a soil, waste or branch drain only if the code official permits it, and then it must be individually trapped and vented, never connected to a vent, and the trap has to be protected by an ASSE 1018 or ASSE 1044 trap primer, an ASSE 1072 trap seal protection device, or a deep seal P-trap. A new section also designates the pan as an emergency receptor for the water heater alone, so the pan cannot be used to catch discharge from a washer, softener or condensate line.",
        "sourceUrl": "https://le.utah.gov/xcode/Title15A/Chapter3/C15A-3-S205_2026050620260701.html"
      },
      {
        "text": "Utah adds a requirement to the relief valve discharge section: the TPR discharge pipe must follow the manufacturer's installation instructions and may not exceed 180 degrees of total directional change. A discharge line routed with more than two elbows' worth of turns is a correction item.",
        "sourceUrl": "https://le.utah.gov/xcode/Title15A/Chapter3/C15A-3-S205_2026050620260701.html"
      },
      {
        "text": "Utah writes detailed mounting rules for backflow prevention assemblies into the residential code. An assembly may not sit more than five feet above the floor without a permanent platform, must be at least 12 inches above the floor and 12 inches clear of any wall, ceiling or obstruction, and a reduced pressure principle assembly must be horizontal, out of any pit, and never piped into a sewer, storm drain or vent. The assembly must be tested at installation, after any repair or relocation, and at least annually.",
        "sourceUrl": "https://le.utah.gov/xcode/Title15A/Chapter3/C15A-3-S205_2026050620260701.html"
      },
      {
        "text": "Utah broadens the smoke and carbon monoxide alarm retrofit trigger by adding accessory dwelling units to the IRC sections that require new-construction alarm coverage whenever alterations, repairs or additions are done. A permitted remodel in an ADU therefore pulls in full alarm requirements, not just the alarms that were already there.",
        "sourceUrl": "https://le.utah.gov/xcode/Title15A/Chapter3/C15A-3-S202_2026050620260701.html"
      },
      {
        "text": "Utah requires a shutoff valve on each fixture supply pipe to every plumbing appliance and fixture other than bathtubs and showers, unless the appliance or fixture has a wall-mount valve. It also caps a replacement lavatory faucet at 1.5 gpm at 60 psi and a shower head at 2 gpm at 80 psi, which are tighter than the base IRC table.",
        "sourceUrl": "https://le.utah.gov/xcode/Title15A/Chapter3/C15A-3-S205_2026050620260701.html"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Salt Lake City takes a plumbing permit, charged as a flat base fee plus a per-heater fee, and the inspector will check the Utah seismic strapping, the pan drain and the length of the TPR discharge run.",
        "sourceUrl": "https://tools.slc.gov/feeschedule/",
        "fee": "Plumbing Permits: $59 base fee plus $16 each for a water heater; a failed inspection costs a $132 re-inspection fee",
        "feeAsOf": "Salt Lake City Consolidated Fee Schedule, amended 06/16/2026 by Ord. 2026-29"
      },
      "plumber-service-call": {
        "requirement": "Salt Lake City requires a plumbing permit for any installation, alteration or improvement to a plumbing system, and prices it as a base fee plus a small charge for each pipe change, fixture or device involved, so a one-fixture repair is close to the base fee.",
        "sourceUrl": "https://tools.slc.gov/feeschedule/",
        "fee": "Plumbing Permits: $59 base fee, plus $8 to change, alter or replace soil, waste or vent pipe; $12 each to change or repair a drain, waste and vent system; $8 each for a plumbing fixture or trap roughed in for installation or relocation; $10 each for a vacuum breaker or backflow device; $58 each for a settling tank or grease trap; re-inspection $132",
        "feeAsOf": "Salt Lake City Consolidated Fee Schedule, amended 06/16/2026 by Ord. 2026-29"
      },
      "electrician-service-call": {
        "requirement": "Salt Lake City issues residential electrical permits separately from the building permit, with a base fee plus a flat charge for a small remodel, added circuits or a service change, and it publishes a cheaper homeowner permit for an owner doing their own remodel.",
        "sourceUrl": "https://tools.slc.gov/feeschedule/",
        "fee": "Electrical Permits (Residential): $59 base fee; $40 for a minor remodel and additional circuits; $40 for a service change with 1 or 2 new circuits; $40 for a service change or alteration; $48 for a homeowner electrical remodel permit; $40 for total renovation of the electrical system in an existing single family dwelling; re-inspection $132",
        "feeAsOf": "Salt Lake City Consolidated Fee Schedule, amended 06/16/2026 by Ord. 2026-29"
      },
      "garbage-disposal-replacement": {
        "requirement": "A disposer is a home appliance connected to the building drainage system, which Salt Lake City charges for by the unit on a plumbing permit on top of the plumbing base fee.",
        "sourceUrl": "https://tools.slc.gov/feeschedule/",
        "fee": "Plumbing Permits: $59 base fee, plus $8 each for a store, restaurant or home appliance or device connected to the culinary water supply and/or building drainage system",
        "feeAsOf": "Salt Lake City Consolidated Fee Schedule, amended 06/16/2026 by Ord. 2026-29"
      }
    }
  },
  "san-antonio-tx": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of San Antonio Development Services Department",
      "url": "https://www.sa.gov/Directory/Departments/DSD"
    },
    "codeEdition": {
      "text": "San Antonio's Chapter 10 Building-Related Codes, effective May 1, 2025, adopt the 2024 editions of the International Building, Residential, Mechanical, Plumbing, Existing Building, Fuel Gas, Fire and Swimming Pool and Spa Codes, the 2021 International Energy Conservation Code and the 2023 National Electrical Code, each with San Antonio amendments. The adopting ordinance is No. 2025-01-30-0075.",
      "sourceUrl": "https://docsonline.sanantonio.gov/DSDUploads/2024Ch10Building-RelatedCodesFinal.pdf"
    },
    "permitPolicy": {
      "text": "A San Antonio homeowner may pull their own plumbing permit, but only on the homestead where they live and only if they do the installation themselves with no help from anyone else. The city makes them sign a plumbing affidavit stating the property is their residence and not a business or rental, and a city plumbing inspector checks the work. Otherwise plumbing permits go to a licensed Responsible Master Plumber registered with a company, and electrical work requires a state-licensed electrical contractor registered with the city.",
      "sourceUrl": "https://docsonline.sanantonio.gov/FileUploads/dsd/PLUMBINGHOMEOWNERAFFIDAVIT.pdf"
    },
    "registration": {
      "text": "San Antonio layers city registration on top of the state credential. A state-licensed electrical contractor must register with the city before doing any electrical work, and a state Responsible Master Plumber license must also be registered with the city. Registering a state electrical or plumbing license costs nothing; an optional City Electrical Master license runs $345.00 for two years, a city electrical maintenance technician registration $40.25 a year, and registering a state irrigator license $97.75. A plumber must carry at least $300,000 of general liability and completed-operations coverage to work in the city.",
      "sourceUrl": "https://docsonline.sanantonio.gov/FileUploads/dsd/CurrentFeeSchedule.pdf"
    },
    "codeItems": [
      {
        "text": "San Antonio rewrites the water heater relief-valve rule. The temperature-and-pressure discharge pipe may not connect to the drainage system, must discharge through an air gap in the same room as the heater, may not be trapped or fitted with valves or tees, must flow by gravity, and may not end in a threaded connection. Where it runs outside it has to terminate between six and twelve inches above finish grade.",
        "sourceUrl": "https://docsonline.sanantonio.gov/DSDUploads/2024Ch10Building-RelatedCodesFinal.pdf"
      },
      {
        "text": "A San Antonio inspector looks for a union or flexible connector on the temperature-and-pressure relief valve placed within six inches of the valve, so the valve can be pulled and replaced. This is a city addition to the discharge-piping list.",
        "sourceUrl": "https://docsonline.sanantonio.gov/DSDUploads/2024Ch10Building-RelatedCodesFinal.pdf"
      },
      {
        "text": "San Antonio restricts where a water heater may go. A storage-type heater is barred from an attic unless the attic is reached through a door on the same floor level, and the attic needs an unobstructed passageway at least 30 inches high and 22 inches wide, no more than 20 feet long, with continuous solid flooring 24 inches wide and a level 30-by-30-inch service space at the front of the heater.",
        "sourceUrl": "https://docsonline.sanantonio.gov/DSDUploads/2024Ch10Building-RelatedCodesFinal.pdf"
      },
      {
        "text": "The city adds two placement rules of its own: an electric water heater is the only type allowed under a stairway or landing, and an electric water heater in a garage must sit at least 18 inches above the garage floor.",
        "sourceUrl": "https://docsonline.sanantonio.gov/DSDUploads/2024Ch10Building-RelatedCodesFinal.pdf"
      },
      {
        "text": "San Antonio bars a fuel-fired water heater from a room used as a storage closet, and requires a heater in a bedroom or bathroom to sit in a sealed enclosure so it does not draw combustion air from the living space. A direct-vent heater does not need the enclosure.",
        "sourceUrl": "https://docsonline.sanantonio.gov/DSDUploads/2024Ch10Building-RelatedCodesFinal.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "A plumbing permit is required to replace a water heater in San Antonio, and the inspector checks the relief-valve discharge piping, the heater's location and the access to it. If the heater has to be swapped as an emergency, the city allows the permit application to be filed the next business day.",
        "sourceUrl": "https://docsonline.sanantonio.gov/FileUploads/dsd/CurrentFeeSchedule.pdf",
        "fee": "Plumbing - Permit Base Fee $57.50 plus Water Heater, Vent (gas/electric) $9.20",
        "feeAsOf": "October 2026"
      },
      "plumber-service-call": {
        "requirement": "San Antonio does not require a permit just to stop a leak, clear a stoppage or pull and reset a toilet, so long as no pipes, valves or fixtures are replaced or rearranged; once a concealed pipe or a fixture actually has to be replaced the city treats it as new work needing a permit and inspection.",
        "sourceUrl": "https://docsonline.sanantonio.gov/FileUploads/dsd/CurrentFeeSchedule.pdf",
        "fee": "Plumbing - Permit Base Fee $57.50 plus $8.05 per plumbing fixture; Re-inspection Fee $57.50",
        "feeAsOf": "October 2026"
      },
      "electrician-service-call": {
        "requirement": "Minor electrical repairs and maintenance in San Antonio need no permit when a licensed electrical contractor does the work, and swapping a lamp or plugging equipment into an existing receptacle is never permitted work; installing receptacles, fixtures, sub-panels or other service equipment does need an electrical permit.",
        "sourceUrl": "https://docsonline.sanantonio.gov/FileUploads/dsd/CurrentFeeSchedule.pdf",
        "fee": "Electrical - Permit Base Fee $57.50 plus per-item charges (for example $3.74 for a 0-200 amp service, $5.58 per panelboard/loadcenter, $1.84 per ceiling fan); Re-inspection Fee $57.50",
        "feeAsOf": "October 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "Replacing a garbage disposal in San Antonio falls under the city's general rule that replacing any regulated plumbing system component needs a permit, charged as the plumbing base fee plus a per-fixture amount.",
        "sourceUrl": "https://docsonline.sanantonio.gov/FileUploads/dsd/CurrentFeeSchedule.pdf",
        "fee": "Plumbing - Permit Base Fee $57.50 plus $8.05 per plumbing fixture",
        "feeAsOf": "October 2026"
      }
    }
  },
  "san-diego-ca": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of San Diego Development Services Department",
      "url": "https://www.sandiego.gov/development-services"
    },
    "codeEdition": {
      "text": "San Diego is on the 2025 California Building Standards Code, effective for projects submitted on or after January 1, 2026, covering the California Building, Residential, Electrical, Mechanical, Plumbing, Fire, Green Building Standards and Existing Building Codes. The city's own amendments live in Chapters 12 and 14 of the Land Development Code; the plumbing and electrical articles were last amended by Ordinance O-22080 N.S., effective April 22, 2026, and the city adopts the 2025 California Electrical Code without modification.",
      "sourceUrl": "https://www.sandiego.gov/development-services/codes-regulations"
    },
    "permitPolicy": {
      "text": "A San Diego homeowner can pull their own permit. The city lets homeowners, property owners and licensed contractors obtain a Simple \"No-Plan\" Plumbing/Gas Permit for minor work such as replacing a water heater (tankless types excluded), repairing water or sewer piping, repairing gas lines, and repairing or replacing drains. If the owner is doing the work themselves or hiring separate contractors, they must sign an Owner-Builder Verification Form (DS-3042) before the permit is issued. Properties that are designated historical resources or sit in a historic district cannot use the simple permit path and must file plans instead.",
      "sourceUrl": "https://www.sandiego.gov/development-services/permits/plumbing-permit"
    },
    "codeItems": [
      {
        "text": "San Diego bans metallic potable water distribution piping under a concrete floor slab inside a dwelling unit. The only way around it is piping serving an island fixture or a trap seal primer, which must be run jointless inside a capped, watertight sleeve sealed at the ends so soil and water cannot reach the pipe.",
        "sourceUrl": "https://docs.sandiego.gov/municode/MuniCodeChapter14/Ch14Art07Division02.pdf"
      },
      {
        "text": "The city caps how many current-consuming outlets may sit on one residential circuit: four on an appliance circuit and fifteen on a lighting circuit. A lighting circuit feeding only permanent luminaires may carry more if the applicant provides a calculation based on actual wattages.",
        "sourceUrl": "https://docs.sandiego.gov/municode/MuniCodeChapter14/Ch14Art06Division02.pdf"
      },
      {
        "text": "San Diego has its own aluminum wiring rules: an approved inhibitor must be used on every nonplated stranded aluminum conductor termination, underground aluminum conductors must be in an approved raceway, and aluminum conduit, boxes or fittings may not be embedded in earth, concrete or plaster or sit within 18 inches of earth unless their finish is approved for it.",
        "sourceUrl": "https://docs.sandiego.gov/municode/MuniCodeChapter14/Ch14Art06Division02.pdf"
      },
      {
        "text": "A San Diego electrical inspector expects a circuit card at the rough wiring inspection: a complete schedule of circuits showing the number and arrangement of outlets on each one, on the Development Services circuit card (form DS-1779) or an approved wiring plan. The city requires it for electrical work added to a single dwelling unit or duplex unless electrical plans or single-line drawings are part of the approved plan set.",
        "sourceUrl": "https://www.sandiego.gov/development-services/forms-publications/information-bulletins/103"
      },
      {
        "text": "Where a homeowner upgrades the electrical system, including interior branch circuit wiring, on their own initiative, San Diego makes the current receptacle spacing requirements of California Electrical Code Article 210.52 apply to the work.",
        "sourceUrl": "https://docs.sandiego.gov/municode/MuniCodeChapter14/Ch14Art06Division02.pdf"
      },
      {
        "text": "San Diego requires plumbing and mechanical equipment, water heaters included, to stay out of a required side or rear yard in a residential zone unless the installation satisfies Municipal Code section 131.0461(a)(5). It also calls for structural calculations when equipment weighs more than 400 pounds or its center of mass is more than four feet above the supporting base.",
        "sourceUrl": "https://www.sandiego.gov/development-services/forms-publications/information-bulletins/103"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in San Diego needs a plumbing/gas permit, and a straight tank-for-tank swap qualifies for the Simple \"No-Plan\" permit a homeowner can pull online; a tankless conversion does not qualify and a tankless replacement in a multi-dwelling or non-residential building needs plans and plan review.",
        "sourceUrl": "https://www.sandiego.gov/development-services/forms-publications/information-bulletins/103",
        "fee": "Table 3B Plumbing Fee Schedule (per Item): Water Heater, Each, First Unit $122.97",
        "feeAsOf": "May 2026"
      },
      "plumber-service-call": {
        "requirement": "San Diego does not require a plumbing permit to stop a leak in a drain, soil, waste or vent pipe, to clear a stoppage, to repair leaks in pipes, valves or fixtures, to replace an exposed trap, or to replace a plumbing fixture in kind - but the exemption ends the moment any drain, waste, vent or water supply piping has to be altered or replaced with new material, which then needs a permit.",
        "sourceUrl": "https://www.sandiego.gov/development-services/forms-publications/information-bulletins/103",
        "fee": "Table 3B Plumbing Fee Schedule (per Item): Water/Waste Pipe Repair/Replacement - Residential, Per Dwelling Unit, First Unit $264.25 and $87.68 each additional; Building Drain, Per Floor $52.39",
        "feeAsOf": "May 2026"
      },
      "electrician-service-call": {
        "requirement": "San Diego skips the electrical permit for minor work such as replacing a fuse, or repairing or replacing a switch, circuit breaker, lampholder, luminaire, ballast or receptacle with the same size and general type as the original, for changing lamps, and for wiring under 25 volts that cannot supply more than 50 watts; other electrical work needs a permit, and adding circuits or swapping a panel is charged per circuit or per panel.",
        "sourceUrl": "https://www.sandiego.gov/development-services/forms-publications/information-bulletins/103",
        "fee": "Table 2 Electrical Fee Schedule (per Building): Circuits 15-45 Amps, First 5 Circuits $176.57, then $52.39 for circuits 6-10; Panel Replace/Upgrade up to 200 amp, Each $176.57",
        "feeAsOf": "May 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "San Diego names garbage disposals directly: repairing or replacing a hardwired appliance such as a dishwasher or garbage disposal inside a dwelling unit needs no electrical permit as long as the work adds no electrical load to the existing circuit, and replacing a plumbing fixture in kind needs no plumbing permit unless drainage, waste, vent or water supply piping has to be altered or replaced.",
        "sourceUrl": "https://docs.sandiego.gov/municode/MuniCodeChapter12/Ch12Art09Division03.pdf"
      }
    }
  },
  "san-francisco-ca": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "San Francisco Department of Building Inspection",
      "url": "https://www.sf.gov/departments--department-building-inspection"
    },
    "codeEdition": {
      "text": "Anything filed in San Francisco on or after January 1, 2026 is reviewed under the 2025 California codes together with the 2025 San Francisco amendments, and the department states there is no grace period. That set includes the 2025 San Francisco Building, Electrical, Mechanical, Plumbing, Green Building, Housing and Existing Building Codes layered over the 2025 California Building, Electrical, Mechanical, Plumbing, Energy and Green Building codes.",
      "sourceUrl": "https://www.sf.gov/resource--2025--current-san-francisco-building-codes"
    },
    "permitPolicy": {
      "text": "San Francisco ties permit eligibility to the state licence classification. A plumbing or mechanical permit generally goes to a contractor holding a C4, C16, C20, C36, C54, B or A licence, and an electrical permit to one holding a B, C7, C10, C45, C46, C61 or D34, with the permitted scope narrowed further by the class held. The one homeowner route the department publishes is the Homeowner's Electrical Permit: the Building Official may issue it for a single-family dwelling provided the owner does the work personally, and the owner signs a declaration under San Francisco Electrical Code Section 89.120E that no contractor will be hired. If that work fails inspection, the corrections must be made by a state-licensed electrical contractor under a separate permit.",
      "sourceUrl": "https://www.sf.gov/apply-plumbing-and-mechanical-permit"
    },
    "registration": {
      "text": "On top of the state CSLB licence, San Francisco expects a contractor to hold a San Francisco Business Account Number, and the two are what the city asks for when a licence holder files a contractor authorization form to get an AUTH record in PermitSF. The AUTH record is what lets a contractor or their named agents skip staff review and pull eligible electrical, plumbing and mechanical, reroofing and kitchen or bath permits immediately; the city verifies the licence and the CSLB personnel listing within two business days, and the record does not have to be renewed. No fee is published for the AUTH record itself.",
      "sourceUrl": "https://www.sf.gov/licensed-contractors-register-yourself-or-authorized-agents-on-permitsf"
    },
    "codeItems": [
      {
        "text": "San Francisco buys inspections with the permit rather than open-endedly. The single-residential-unit plumbing and mechanical categories each include a maximum of two inspections, and once those are used a re-inspection or extra inspection under Section 108A.8 is billed at $259 per half hour. Off-hours inspections run at an hourly rate with a two-hour minimum on weekday shoulders and a four-hour minimum nights and weekends.",
        "sourceUrl": "https://media.api.sf.gov/documents/Table_1A-C_-_Plumbing_Mechanical_2026.pdf"
      },
      {
        "text": "A water heater in a San Francisco building of six units or more can fall under the city's boiler Permit to Operate programme. A PTO is required where boilers or tankless water heaters total more than 200,000 Btu, or where storage capacity exceeds 120 gallons, counted singly or combined, and units in series each need their own PTO. Replacing a heat source with a heat pump does not need a PTO.",
        "sourceUrl": "https://www.sf.gov/apply-pto-permit-operate-boiler"
      },
      {
        "text": "San Francisco's plumbing fee schedule lists water heaters as a renewal trigger for the Permit to Operate: the certificate has to be renewed when a water-heater alteration or replacement permit is issued, alongside the annual renewal for low-pressure boilers.",
        "sourceUrl": "https://media.api.sf.gov/documents/Table_1A-C_-_Plumbing_Mechanical_2026.pdf"
      },
      {
        "text": "Where a San Francisco boiler or water heater system has a backflow prevention assembly, that assembly has to be tested and certified under the city's annual cross-connection control programme before the Permit to Operate will be issued.",
        "sourceUrl": "https://www.sf.gov/apply-pto-permit-operate-boiler"
      },
      {
        "text": "For fee purposes San Francisco counts appliances and utilization equipment each as one outlet or device on top of receptacles, switches and light outlets, so adding an appliance circuit can push a job into the next electrical fee tier. Under a Homeowner's Electrical Permit all wiring must stay exposed until the electrical inspector approves it for cover.",
        "sourceUrl": "https://media.api.sf.gov/documents/Table_1A-E_-_Electrical_Permit_Issuance_and_Inspection_2026.pdf"
      },
      {
        "text": "San Francisco's mechanical information sheet M-06, dated October 27, 2025, excuses Title-24 Certificate of Installation checklists for alterations to existing homes that need no HERS field verification, and names water heater and window replacements as the examples.",
        "sourceUrl": "https://sf.gov/file/m-06"
      }
    ],
    "byGuide": {
      "plumber-service-call": {
        "requirement": "San Francisco wants a plumbing permit before any pipe is cut into or replaced, and particularly before pipe that will be buried or closed into a wall, with the exemptions set out in San Francisco Plumbing Code Section 104.2; a single-unit job such as a water service, a sewer replacement or installing one fixture has its own flat issuance fee covering up to two inspections.",
        "sourceUrl": "https://media.api.sf.gov/documents/Table_1A-C_-_Plumbing_Mechanical_2026.pdf",
        "fee": "$290 CATEGORY 1P Single Residential Unit - water service, sewer replacement, single plumbing fixture installation, shower pan installation, or a single kitchen or bathroom remodel (maximum two inspections)",
        "feeAsOf": "July 2026 (applies to permits issued on and after July 12, 2026)"
      },
      "electrician-service-call": {
        "requirement": "An electrical permit is needed in San Francisco before new wiring goes in or an existing installation is altered, extended or added to, with the exemptions listed in San Francisco Electrical Code Section 89.121, and a small residential job is priced by how many outlets and devices it touches rather than by labour.",
        "sourceUrl": "https://media.api.sf.gov/documents/Table_1A-E_-_Electrical_Permit_Issuance_and_Inspection_2026.pdf",
        "fee": "$305 Up to 10 outlets and/or devices (1 inspection), Category 1 General Wiring: Residential Buildings up to 10,000 sq. ft.",
        "feeAsOf": "July 2026 (applies to permits issued on and after July 12, 2026)"
      },
      "water-heater-replacement": {
        "requirement": "San Francisco issues water-heater alteration and replacement permits through the Plumbing Inspections Division, and in a building of six units or more a tankless or storage water heater above the city's size thresholds also needs an annual Permit to Operate that has to be renewed whenever a replacement permit is issued.",
        "sourceUrl": "https://media.api.sf.gov/documents/Table_1A-C_-_Plumbing_Mechanical_2026.pdf",
        "fee": "$145 Permit to operate or renew (certificate issued) - Online; $221 In-House; the Boiler Maintenance Program table requires renewal for water heaters when alteration or replacement permits are issued",
        "feeAsOf": "July 2026 (applies to permits issued on and after July 12, 2026)"
      }
    }
  },
  "san-jose-ca": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of San Jose Development Services Permit Center (Building Division)",
      "url": "https://sanjoseca.gov/businesses/development-services-permit-center/start-your-project/water-heaters"
    },
    "codeEdition": {
      "text": "San Jose enforces the California Building Standards Code, Title 24. The state's 2025 edition took effect January 1, 2026 as the result of the 2024 triennial adoption cycle, so current plumbing and electrical work is judged against the 2025 California codes rather than the 2022 set.",
      "sourceUrl": "https://www.hcd.ca.gov/sites/default/files/docs/building-standards/ib-2025-03.pdf"
    },
    "permitPolicy": {
      "text": "A property owner of record may sign their own permit application in San Jose, though the city strongly recommends a licensed contractor do it and points owners to its Owner-Builders Beware material. For permits bought through the city's online permit service, only a licensed contractor or the property owner may be the applicant; the plan-review route also allows an authorized agent or tenant. Whoever signs is responsible for all work done under the permit.",
      "sourceUrl": "https://sanjoseca.gov/businesses/development-services-permit-center/start-your-project/who-can-apply-for-a-permit"
    },
    "codeItems": [
      {
        "text": "San Jose will not accept a T&P relief drain that ends in the crawl space. The discharge has to run to the outside and stop pointing down between 6 inches and 2 feet above grade; in a garage it may instead end 6 to 12 inches above the floor, but a heater installed outside the garage cannot discharge into one.",
        "sourceUrl": "https://sanjoseca.gov/home/showpublisheddocument/26033/637195315154070000"
      },
      {
        "text": "The relief drain must be its own independent line, not tied into a condensate line or the pan drain, not connected to the sanitary sewer, with no trap, no shutoff valve anywhere in it, and the end left unthreaded. The city also wants a union in the drain line near the heater so the heater can be swapped out later.",
        "sourceUrl": "https://sanjoseca.gov/home/showpublisheddocument/26033/637195315154070000"
      },
      {
        "text": "Seismic strapping is counted by tank size in San Jose: two straps up to 52 gallons, three at 75 gallons, four at 100 gallons, and one more for every additional 25 gallons. The upper strap goes within the top third of the tank (about 9 inches down) and the lower strap at least 4 inches above the controls and within the bottom third. Bracing an existing heater on its own needs no permit.",
        "sourceUrl": "https://sanjoseca.gov/home/showpublisheddocument/26033/637195315154070000"
      },
      {
        "text": "A closed system, such as a house with a pressure reducing valve on the service, requires a thermal expansion tank. A heater in an attic or anywhere a leak would do damage needs an approved safe pan with a 3/4-inch minimum drain run to a visible point, and the city's basement detail also calls for a sediment trap downstream of the gas shutoff.",
        "sourceUrl": "https://sanjoseca.gov/home/showpublisheddocument/26033/637195315154070000"
      },
      {
        "text": "In a San Jose garage the pilot, burners, heating elements and switches must sit at least 18 inches above the floor and any stand or platform has to be anchored down. Gas-fired heaters are barred from bathrooms, clothes closets and sleeping rooms; direct-vent units are the exception.",
        "sourceUrl": "https://sanjoseca.gov/home/showpublisheddocument/26033/637195315154070000"
      },
      {
        "text": "Installing or replacing a water heater in San Jose takes a plumbing permit, and depending on the type of heater an electrical permit may be required as well. Heat pump water heaters need both, and the city points to a separate bulletin when the existing electrical panel is not adequate.",
        "sourceUrl": "https://sanjoseca.gov/businesses/development-services-permit-center/start-your-project/water-heaters"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in San Jose requires a plumbing permit, which single-family and duplex owners can buy online; the city waives the online issuance fee for water heater replacements, but inspection time is still billed at the residential hourly rate.",
        "sourceUrl": "https://sanjoseca.gov/home/showpublisheddocument/26047/638598545783230000",
        "fee": "$0 online permit issuance fee for water heater replacements (the stated exception to the online minimum issuance fee); residential plumbing permit inspection time charged at $315 per hour",
        "feeAsOf": "FY 2024-25 Building Division Fee Schedule, effective August 12, 2024"
      },
      "plumber-service-call": {
        "requirement": "San Jose does not charge a flat plumbing permit fee; residential plumbing permits are billed by the inspection time the job needs, at a published hourly rate, plus an hourly permit-processing charge.",
        "sourceUrl": "https://sanjoseca.gov/home/showpublisheddocument/26047/638598545783230000",
        "fee": "$315 per hour of required inspection time for residential plumbing permits; permit issuance charged at $227 per hour of processing and coordination time, whichever is greater than the listed amount",
        "feeAsOf": "FY 2024-25 Building Division Fee Schedule, effective August 12, 2024"
      },
      "electrician-service-call": {
        "requirement": "Residential electrical permits in San Jose are priced the same way as plumbing: by the inspection time the work requires at a published hourly rate, with an hourly processing charge for issuing the permit.",
        "sourceUrl": "https://sanjoseca.gov/home/showpublisheddocument/26047/638598545783230000",
        "fee": "$315 per hour of required inspection time for residential electrical permits; permit issuance charged at $227 per hour of processing and coordination time, whichever is greater than the listed amount",
        "feeAsOf": "FY 2024-25 Building Division Fee Schedule, effective August 12, 2024"
      }
    }
  },
  "scottsdale-az": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Scottsdale Planning and Development Services",
      "url": "https://www.scottsdaleaz.gov/planning-development/permit-services"
    },
    "codeEdition": {
      "text": "Scottsdale enforces the 2021 I-Codes with its own City Council amendments, together with the 2020 National Electrical Code as amended. The city publishes separate amendment documents for the 2021 IRC (effective Jan. 7, 2023), 2021 IBC, 2021 IPC, 2021 IMC, 2021 IFGC, 2021 IECC (effective Jan. 7, 2023), 2021 IEBC, 2021 ISPSC and the 2021 IgCC (mandatory from July 1, 2023). The IRC amendments sit in Scottsdale Revised Code Chapter 31, Article II.",
      "sourceUrl": "https://www.scottsdaleaz.gov/codes-and-ordinances/building-codes"
    },
    "permitPolicy": {
      "text": "Most single-family electrical, mechanical and plumbing work in Scottsdale needs no plan review and is handled as a 'minimum' permit obtained online through the Scottsdale SPUR portal, with the inspection doing the verifying. Work done without a permit is fined an amount equal to double the permit fee. Arizona law exempts property owners who do the work themselves on a structure they will occupy, and that is not for sale or rent, from contractor licensing, which is the state-level basis for a homeowner doing their own work.",
      "sourceUrl": "https://www.scottsdaleaz.gov/planning-development/permit-services"
    },
    "registration": {
      "text": "All businesses located in the city of Scottsdale must hold a city Business Registration License, and some trades need an additional Regulatory License. A service-type Business Registration License costs a $12.00 application fee plus a $50.00 license fee, with a $25 late penalty per license year if applied for after the business start date. Scottsdale publishes no separate plumber or electrician trade registration beyond this and the state contractor license.",
      "sourceUrl": "https://www.scottsdaleaz.gov/licenses"
    },
    "codeItems": [
      {
        "text": "Scottsdale narrowed the exception that lets an appliance sit at floor level in a garage: only appliances listed as flammable-vapor-ignition-resistant and clothes dryers in private garages escape the ignition-source elevation rule, so a conventional gas water heater in a Scottsdale garage has to be raised.",
        "sourceUrl": "https://www.scottsdaleaz.gov/docs/default-source/scottsdaleaz/codes---ordinances/building-codes/2021-international-mechanical-code-(imc)-amendments.pdf?sfvrsn=125f33ae_2"
      },
      {
        "text": "Scottsdale added a sixth prohibited location for fuel-burning appliances: any room operating under negative pressure.",
        "sourceUrl": "https://www.scottsdaleaz.gov/docs/default-source/scottsdaleaz/codes---ordinances/building-codes/2021-international-mechanical-code-(imc)-amendments.pdf?sfvrsn=125f33ae_2"
      },
      {
        "text": "Scottsdale added a gas-vent termination exception for one- and two-family dwellings: on roof slopes from flat to 6:12, a Type B or BW vent 8 inches or smaller that sits at least 4 feet from a vertical wall or similar obstruction may terminate just 12 inches above the roof.",
        "sourceUrl": "https://www.scottsdaleaz.gov/docs/default-source/scottsdaleaz/codes---ordinances/building-codes/2021-international-fuel-gas-code-(ifgc)-amendments.pdf?sfvrsn=2692bc2b_2"
      },
      {
        "text": "Scottsdale's amended residential energy provisions force a demand-recirculation hot water system once the run from the water heater to the farthest fixture exceeds the city's table: more than 50 feet on 3/8-inch pipe, 43 feet on 1/2-inch, 32 feet on 5/8-inch or 21 feet on 3/4-inch. The pump must start from a user action or a flow sensor.",
        "sourceUrl": "https://www.scottsdaleaz.gov/docs/default-source/scottsdaleaz/codes---ordinances/building-codes/2021-international-residential-code-(irc)-amendments.pdf?sfvrsn=87f78e0b_2"
      },
      {
        "text": "Scottsdale rewrote the residential fixture flow table below national limits: 1.5 gpm at 60 psi for a lavatory faucet, 2.0 gpm at 80 psi for all shower outlets on one valve combined, 1.8 gpm at 60 psi for a kitchen faucet and 1.28 gallons per flush for a water closet, so replacement fittings have to meet the tighter numbers.",
        "sourceUrl": "https://www.scottsdaleaz.gov/docs/default-source/scottsdaleaz/codes---ordinances/building-codes/2021-international-residential-code-(irc)-amendments.pdf?sfvrsn=87f78e0b_2"
      },
      {
        "text": "Under Scottsdale's amended plumbing code a water service pipe must be at least 1 inch inside diameter, and a replaced water service pipe has to be at least the same size as the pipe it replaces. A single-family dwelling over 12,000 square feet under roof needs at least a 1 1/2-inch meter and a 2-inch supply from the meter.",
        "sourceUrl": "https://www.scottsdaleaz.gov/docs/default-source/scottsdaleaz/codes---ordinances/building-codes/2021-international-plumbing-code-(ipc)-amendments.pdf?sfvrsn=ae75c74a_2"
      },
      {
        "text": "Scottsdale added an EV-capable rule for new homes: the main electrical service panel must keep a reserved space for a full-size 2-pole breaker labeled 'Future EV Charging', and if the panel sits outside the garage wall a raceway has to run from the panel to a junction box or outlet inside the garage, also labeled.",
        "sourceUrl": "https://www.scottsdaleaz.gov/docs/default-source/scottsdaleaz/codes---ordinances/building-codes/2021-international-residential-code-(irc)-amendments.pdf?sfvrsn=87f78e0b_2"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Scottsdale requires a plumbing permit to replace a water heater, gas or electric, and it is a 'minimum' permit with no plan review, just an inspection.",
        "sourceUrl": "https://www.scottsdaleaz.gov/docs/default-source/scottsdaleaz/planning---develpment/fees-fy26-27/permit-fee-schedule---miscellaneous.pdf?sfvrsn=bcebac04_1",
        "fee": "$63 (Water Heaters, except solar); Solar Water Heaters $90",
        "feeAsOf": "Effective July 1, 2026"
      },
      "plumber-service-call": {
        "requirement": "A plumbing permit is required in Scottsdale to install, alter, reconstruct or repair any plumbing system or gas system, including repairing or replacing an existing fixture in the same location, and single-trade residential work is charged as a minimum permit.",
        "sourceUrl": "https://www.scottsdaleaz.gov/docs/default-source/scottsdaleaz/planning---develpment/fees-fy26-27/permit-fee-schedule---miscellaneous.pdf?sfvrsn=bcebac04_1",
        "fee": "$121 Minimum Permit (one discipline); $379 Minimum Combination (all disciplines); $121 Reinspection",
        "feeAsOf": "Effective July 1, 2026"
      },
      "electrician-service-call": {
        "requirement": "Scottsdale requires an electrical permit to install, alter, reconstruct or repair electrical wiring on any building, structure, pool or mechanical equipment; adding or altering a circuit, relocating a panel, raising a mast, a service change-out up to 400 amps and replacing a main breaker are all listed as minimum-permit jobs.",
        "sourceUrl": "https://www.scottsdaleaz.gov/docs/default-source/scottsdaleaz/planning---develpment/fees-fy26-27/permit-fee-schedule---miscellaneous.pdf?sfvrsn=bcebac04_1",
        "fee": "$121 Minimum Permit (one discipline); $121 Temporary Power Pole; $121 Reinspection",
        "feeAsOf": "Effective July 1, 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "Scottsdale requires a plumbing permit to install, alter, reconstruct or repair any plumbing system, and lists repair or replacement of an existing plumbing fixture in the same location as a minimum plumbing permit job; the city does not name garbage disposals as a separate line item.",
        "sourceUrl": "https://www.scottsdaleaz.gov/docs/default-source/scottsdaleaz/planning---develpment/fees-fy26-27/permit-fee-schedule---miscellaneous.pdf?sfvrsn=bcebac04_1",
        "fee": "$121 Minimum Permit (one discipline)",
        "feeAsOf": "Effective July 1, 2026"
      }
    }
  },
  "seattle-wa": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Seattle Department of Construction and Inspections (SDCI); plumbing and gas piping by Public Health - Seattle & King County",
      "url": "https://www.seattle.gov/construction-and-inspections/permits/permits-we-issue-(a-z)/electrical-permit"
    },
    "codeEdition": {
      "text": "Houses, duplexes and townhouses up to three stories in Seattle are judged against the 2021 Seattle Residential Code, which is the 2021 International Residential Code with Seattle's own amendments.",
      "sourceUrl": "https://www.seattle.gov/construction-and-inspections/codes/codes-we-enforce-(a-z)/residential-code"
    },
    "permitPolicy": {
      "text": "Plumbing and gas piping in Seattle are permitted by Public Health - Seattle & King County, not by SDCI, and a homeowner can get a homeowner's plumbing permit, which authorizes the homeowner personally to do the plumbing; anyone signing on the owner's behalf is representing that the owner authorized it, and a plumber hired for the job has to be a registered contractor. On the electrical side, a property owner may do their own work when they own and occupy the property.",
      "sourceUrl": "https://kingcounty.gov/en/dept/dph/health-safety/environmental-health/plumbing-gas-piping/applications-and-permits"
    },
    "registration": {
      "text": "A professional pulling an electrical permit in Seattle needs two things: a Washington State electrical contractor's license and a City of Seattle business license. SDCI also issues its own trade licenses for boiler operator/supervisor, refrigeration and gas piping work.",
      "sourceUrl": "https://www.seattle.gov/construction-and-inspections/permits/permits-we-issue-(a-z)/electrical-permit"
    },
    "codeItems": [
      {
        "text": "Seattle's plumbing rules are a separate code enforced by a separate agency: the 2021 Seattle Plumbing Code is the 2021 Washington State Plumbing Code with Seattle amendments, and Public Health - Seattle & King County enforces it rather than SDCI.",
        "sourceUrl": "https://www.seattle.gov/construction-and-inspections/codes/codes-we-enforce-(a-z)/plumbing-code"
      },
      {
        "text": "Seismic bracing is spelled out by the inspecting agency, not left to the installer: a water heater needs two 20-gauge sheet metal straps, one in the upper third of the tank and one in the lower third.",
        "sourceUrl": "https://kingcounty.gov/en/dept/dph/health-safety/environmental-health/plumbing-gas-piping/installations/installing-new-water-heater"
      },
      {
        "text": "Seattle requires at least 24 inches of continuous width for access to the water heater, and a heater in a garage has to be shielded by a fixed barrier such as a metal post set in the concrete between the tank and where a car would park. Gas piping must not block removal of the tank.",
        "sourceUrl": "https://kingcounty.gov/en/dept/dph/health-safety/environmental-health/plumbing-gas-piping/installations/installing-new-water-heater"
      },
      {
        "text": "A closed water system, meaning water can flow into the building but not back out, requires an expansion tank or another approved thermal expansion device. The temperature and pressure relief line has to drain by gravity to the outside or to an approved drain, and a gas water heater other than a direct-vent type cannot go in a bedroom or bathroom unless it meets special criteria.",
        "sourceUrl": "https://kingcounty.gov/en/dept/dph/health-safety/environmental-health/plumbing-gas-piping/installations/installing-new-water-heater"
      },
      {
        "text": "Carbon monoxide alarms work on a trigger in Seattle. An owner-occupied single-family home legally occupied before July 26, 2009 is exempt, but any building permit application for work on the home triggers the requirement, a permit application for alterations has to show the alarms are already in place or include them, and every home must have a CO alarm when it is sold.",
        "sourceUrl": "https://www.seattle.gov/DPD/Publications/CAM/cam317.pdf"
      },
      {
        "text": "Smoke alarms have to be added throughout an existing Seattle house when a bedroom is added, when an accessory dwelling unit is created, or when other interior work requiring a permit happens. If you do not strip the interior finishes and there is no attic or basement access, the added alarms may be battery powered and need not be interconnected.",
        "sourceUrl": "https://www.seattle.gov/DPD/Publications/CAM/cam317.pdf"
      },
      {
        "text": "Gas piping is not covered by the plumbing permit or by a mechanical permit; installing or changing gas piping takes its own gas piping permit, and Seattle's mechanical permit explicitly excludes plumbing, sprinklers, gas lines, refrigeration and boilers.",
        "sourceUrl": "https://www.seattle.gov/construction-and-inspections/permits/permits-we-issue-(a-z)/mechanical-permit"
      },
      {
        "text": "Getting the address wrong on a Seattle plumbing permit has a published price: if inspectors are sent to the wrong site because of an applicant error, a $40 change-of-address fee may be charged.",
        "sourceUrl": "https://kingcounty.gov/en/dept/dph/health-safety/environmental-health/plumbing-gas-piping/applications-and-permits"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Seattle needs a plumbing permit from Public Health - Seattle & King County, which charges a base permit fee plus a per-fixture amount; a homeowner can pull it themselves, and if the heater is gas and the gas piping changes, that takes a separate gas piping permit.",
        "sourceUrl": "https://cdn.kingcounty.gov/-/media/king-county/depts/dph/documents/health-safety/environmental-health/fees/plumbing-gas-piping-service-fees-through-2026.pdf",
        "fee": "$137 plus $27 per fixture (Plumbing/Backflow Permit); gas piping permits are $137 plus $27 per outlet",
        "feeAsOf": "Effective January 1, 2026"
      },
      "plumber-service-call": {
        "requirement": "Any time you install, relocate or change a plumbing or gas piping system in Seattle, a permit from Public Health - Seattle & King County is required, priced as a base fee plus an amount per fixture; work already done without a permit is billed instead under the much higher Already Built Construction permit.",
        "sourceUrl": "https://cdn.kingcounty.gov/-/media/king-county/depts/dph/documents/health-safety/environmental-health/fees/plumbing-gas-piping-service-fees-through-2026.pdf",
        "fee": "$137 plus $27 per fixture; $273 plus $55 per fixture/outlet for an Already Built Construction (ABC) permit; $137 re-inspection; $68 permit renewal",
        "feeAsOf": "Effective January 1, 2026"
      },
      "electrician-service-call": {
        "requirement": "Seattle requires an electrical permit any time wiring is installed, altered, extended or connected to equipment, and most of these are self-issued online the same day with no plan review; the city publishes a minimum permit fee plus an administrative fee, and then charges by what you are actually installing.",
        "sourceUrl": "https://www.seattle.gov/documents/Departments/SDCI/Codes/FeeSubtitleFinal.pdf",
        "fee": "$105.12 minimum fee for a standard Online Trade-Construction (OTC) self-issued electrical permit, plus a $55.48 administrative fee; $146.00 for a service repair (mast and meter base only); new or altered service $146.00 up to 125 amperes, $292.00 for 150-200 amperes; branch circuit or feeder $26.28 up to 25 amperes, $43.80 for 30-50 amperes, $146.00 for 60-200 amperes",
        "feeAsOf": "2026 Fee Subtitle, effective January 1, 2026"
      },
      "smoke-detector-replacement": {
        "requirement": "Replacing one alarm is not what triggers Seattle's rules, but adding a bedroom, creating an accessory dwelling unit or doing other permitted interior work means smoke alarms must be brought up to current standards throughout the house, and the city allows battery-only, non-interconnected alarms where finishes stay in place and there is no attic or basement access.",
        "sourceUrl": "https://www.seattle.gov/DPD/Publications/CAM/cam317.pdf"
      }
    }
  },
  "shreveport-la": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Shreveport Division of Permits and Inspections (Department of Public Works)",
      "url": "https://shreveportla.gov/469/Permits"
    },
    "codeEdition": {
      "text": "Shreveport states that construction must conform to the 2021 International Building Code, 2021 International Existing Building Code, 2021 International Residential Code, 2021 International Mechanical Code, 2021 International Plumbing Code, 2021 International Fuel Gas Code and the 2020 National Electrical Code, with the state amendments adopted through the Louisiana State Uniform Construction Code. The city publishes that state code document (LAC Title 17, Part I), whose current amendments took effect January 1, 2023.",
      "sourceUrl": "https://shreveportla.gov/475/Building-Codes"
    },
    "permitPolicy": {
      "text": "A homeowner in Shreveport may apply for their own building permit, but the electrical, plumbing and HVAC work itself must be done by registered and licensed contractors, who register their trade permits against the homeowner's building permit. If the homeowner pulls the permit, residential work valued over $7,500 needs a Homeowner's Exemption from Licensure under Louisiana law, and commercial projects over $50,000 require a licensed contractor. Sub-contractors call in their own trade inspections; the owner or general contractor schedules only the building inspections. Starting work without a permit doubles the permit fee and adds a $100 penalty.",
      "sourceUrl": "https://shreveportla.gov/DocumentCenter/View/30216/Your-Guide-to-Permits-And-Inspections-MPC-2026"
    },
    "registration": {
      "text": "Under Sec. 22-2 of the Shreveport Municipal Code, anyone who wants to do electrical, mechanical or plumbing work in the division's jurisdiction must register with the Permits and Inspections Division first. Registration is per person (master, journeyman or apprentice), renews annually for all trades, and requires a current liability insurance certificate. On top of that, electrical and HVAC contractors doing work over $10,000 need a State of Louisiana master license from the Licensing Board for Contractors, and plumbers need a journeyman or master license from the State Plumbing Board of Louisiana. The city does not publish the registration fee amount.",
      "sourceUrl": "https://shreveportla.gov/477/Contractors-Registration"
    },
    "codeItems": [
      {
        "text": "Louisiana rewrites the water-heater pan rule that Shreveport enforces: the drain pan must be at least 2 inches deep, big enough and shaped to catch all dripping or condensate from the tank, and drained by an indirect waste pipe of not less than 1 inch diameter in a material listed in Table 605.4.",
        "sourceUrl": "https://shreveportla.gov/DocumentCenter/View/23348"
      },
      {
        "text": "The state amendment to plumbing code Section 504.6 spells out where the temperature-and-pressure relief discharge may terminate: to the floor, to a waste receptor, to a mop sink or to the outdoors.",
        "sourceUrl": "https://shreveportla.gov/DocumentCenter/View/23348"
      },
      {
        "text": "Carbon monoxide alarms are triggered by fuel-fired appliance work here. Louisiana adds an item to residential code Sections R315.2.1 and R315.2.2 requiring CO alarms inside each separate sleeping room and one in the living area when a dwelling uses a permanent fuel-fired appliance, including a standby generator installed outside, and the same addition applies to alterations, not just new work.",
        "sourceUrl": "https://shreveportla.gov/DocumentCenter/View/23348"
      },
      {
        "text": "Louisiana edits the 2020 NEC's outdoor-outlet GFCI rule in Article 210.8(F) to add an exception saying GFCI protection is not required on HVAC equipment, and separately adopts a new Article 210.8(G) requiring GFCI protection on 125-volt, 15- and 20-amp receptacles where welders are operated.",
        "sourceUrl": "https://shreveportla.gov/DocumentCenter/View/23348"
      },
      {
        "text": "On a service upgrade in an existing house, Louisiana's exception to NEC Article 230.71 lets pre-existing services, renovations, alterations, repairs and substantial improvements keep up to six switches or circuit breakers as the service disconnecting means rather than forcing the single-disconnect rule.",
        "sourceUrl": "https://shreveportla.gov/DocumentCenter/View/23348"
      },
      {
        "text": "Shreveport requires backflow preventers on fire lines, yard sprinklers, and at funeral homes, high-rise buildings, hospitals, hotels, motels, restaurants and rest homes, and every backflow preventer must be tested when installed and every year afterwards.",
        "sourceUrl": "https://shreveportla.gov/474/Back-Flow-Preventers"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Shreveport takes a plumbing permit, priced off the contract value against a flat minimum, and a registered plumber must do the work and call in the plumbing inspection.",
        "sourceUrl": "https://shreveportla.gov/DocumentCenter/View/30216/Your-Guide-to-Permits-And-Inspections-MPC-2026",
        "fee": "Residential repairs, alterations and renovations: $4.20 per $1,000.00 of contract value, rounded to the next $1,000.00; minimum permit fee $31.50"
      },
      "plumber-service-call": {
        "requirement": "Shreveport lets a plumber clear a stoppage, fix a leak, or pull and reset a toilet without a permit, but the moment a concealed trap, drain, water, soil, waste or vent pipe has to be removed and replaced with new material the city treats it as new work that needs a permit and an inspection.",
        "sourceUrl": "https://shreveportla.gov/DocumentCenter/View/30216/Your-Guide-to-Permits-And-Inspections-MPC-2026",
        "fee": "Residential repairs, alterations and renovations: $4.20 per $1,000.00 of contract value, rounded to the next $1,000.00; minimum permit fee $31.50"
      },
      "electrician-service-call": {
        "requirement": "Most electrical work in Shreveport needs a permit. The city's short exempt list covers only plug-in decorative lighting, resetting a receptacle plug (not the outlet box), swapping a branch-circuit breaker of the same rating in the same spot, under-25-volt low-energy wiring, and minor repairs such as changing lamps.",
        "sourceUrl": "https://shreveportla.gov/DocumentCenter/View/30216/Your-Guide-to-Permits-And-Inspections-MPC-2026",
        "fee": "Residential repairs, alterations and renovations: $4.20 per $1,000.00 of contract value, rounded to the next $1,000.00; minimum permit fee $31.50. Inspections inside the city limits are $68.25 each, and a reinspection is $68.25"
      },
      "garbage-disposal-replacement": {
        "requirement": "Shreveport requires a permit for most remodeling work including most plumbing and electrical work, and its exempt list stops short of replacing a fixture, so a disposal swap is permit work priced off the contract value.",
        "sourceUrl": "https://shreveportla.gov/DocumentCenter/View/30216/Your-Guide-to-Permits-And-Inspections-MPC-2026",
        "fee": "Residential repairs, alterations and renovations: $4.20 per $1,000.00 of contract value, rounded to the next $1,000.00; minimum permit fee $31.50"
      }
    }
  },
  "spokane-wa": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Spokane Developer Services Center (Building Services)",
      "url": "https://my.spokanecity.org/business/permits/"
    },
    "codeEdition": {
      "text": "Spokane enforces the Washington State Building Code, which is the 2021 family of model codes adopted and amended by the State Building Code Council and effective statewide from March 15, 2024: the 2021 International Residential Code (WAC 51-51), the 2021 International Mechanical Code (WAC 51-52), the 2021 Uniform Plumbing Code (WAC 51-56) and the 2021 International Fire Code (WAC 51-54A). Spokane layers its own modifications on top; the city's mechanical code is the IMC and International Fuel Gas Code as modified by Chapter 17F.090 of the Spokane Municipal Code. On the electrical side Washington's rules adopt the 2023 National Electrical Code by reference, and the same rule already provides that the 2026 NEC replaces it effective December 31, 2026.",
      "sourceUrl": "https://app.leg.wa.gov/wac/default.aspx?cite=51-56"
    },
    "permitPolicy": {
      "text": "Washington requires a permit and inspection for electrical work, and the permit has to be bought either by the electrical contractor or by the property owner who will actually do the work; if you hire a contractor, the contractor buys the permit for their own work. Spokane is one of the Washington cities that issues its own electrical permits and does its own electrical inspections, so an electrical permit for a Spokane address comes from the city rather than from L&I. Spokane's electrical permit application is signed on a line marked for a homeowner or a contractor.",
      "sourceUrl": "https://lni.wa.gov/licensing-permits/electrical/electrical-permits-fees-and-inspections/"
    },
    "registration": {
      "text": "Spokane runs its own local trade licences on top of the state credential. Gas work on the city's mechanical permit requires a City of Spokane Gas Heating Mechanic licence number, written on the permit application in the form 01234-GHM. The city issues that licence in two classes, Gas Heating Mechanic I and Gas Heating Mechanic II, by application and proctored examination, with the exam administered through the Northwest HVAC/R Association Training Center; the examination fee is paid with the application and is non-refundable, and the exam has to be taken within 180 days or the application lapses. A mechanical contractor who also holds the appropriate electrical contractor licence may use the mechanical permit for low-voltage HVAC control circuits, but any other HVAC circuit needs a separate electrical permit.",
      "sourceUrl": "https://static.spokanecity.org/documents/business/commercial/license-applications/gas-license-application-2026-07-15.pdf"
    },
    "codeItems": [
      {
        "text": "Washington keeps the seismic strapping rule that Idaho and several other states delete. Under the state's plumbing amendment a water heater must be anchored or strapped to resist horizontal displacement from earthquake motion, with straps placed within the upper third and the lower third of the tank's height, and the lower strap kept at least 4 inches away from the controls. The 4 inch clearance is the detail most installers get wrong.",
        "sourceUrl": "https://app.leg.wa.gov/wac/default.aspx?cite=51-56-0500"
      },
      {
        "text": "Washington requires a demand-response port on consumer electric storage water heaters: the unit must have a modular communications port compliant with the March 2018 version of the ANSI/CTA-2045-A interface standard and application layer requirements. Water heaters built before January 1, 2021 are exempt, and non-heat-pump electric storage heaters built before January 1, 2022 are exempt. This rules out some cheap electric tanks that are perfectly legal elsewhere.",
        "sourceUrl": "https://app.leg.wa.gov/wac/default.aspx?cite=51-56-0500"
      },
      {
        "text": "Washington sets a minimum first-hour rating for a water heater by the number of bedrooms and bathrooms in the house, taken from the unit's Energy Guide label, so a Spokane inspector can reject a replacement that is undersized for the dwelling even if it fits the space. The state code also points to Section 102.4 specifically for replacement water heaters.",
        "sourceUrl": "https://app.leg.wa.gov/wac/default.aspx?cite=51-56-0500"
      },
      {
        "text": "A fuel-burning water heater serving a Washington bedroom or bathroom has only two legal arrangements: either it sits in a closet used for nothing but the water heater, fitted with a listed gasketed door assembly, a listed self-closing device, a threshold and a bottom door seal, and taking all its combustion air from outdoors; or it is a direct-vent unit. Appliances in a garage, or in a space opening onto the garage, must have burners and ignition sources at least 18 inches above the floor unless listed as flammable vapor ignition resistant.",
        "sourceUrl": "https://app.leg.wa.gov/wac/default.aspx?cite=51-56-0500"
      },
      {
        "text": "Spokane permits water heaters as MECHANICAL work, not plumbing: its fee schedule states outright that water heaters are covered within the mechanical permit fees, and the mechanical permit application carries lines for gas and electric water heaters under 200,000 Btu input and a separate line for a hot water tank heat pump. The mechanical application also warns that gas piping and the appliance the gas outlet serves each need permitting, and that a Washington State Energy Code duct leakage affidavit may have to reach the mechanical inspector before a residential HVAC replacement passes final inspection.",
        "sourceUrl": "https://static.spokanecity.org/documents/business/resources/applications/building/mechanical-permit-application-2025-05-13.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Spokane takes a mechanical permit, not a plumbing permit, and the same line covers gas and electric units under 200,000 Btu; a heat pump water heater has its own line at the same price. On top of the item fee the city adds a flat processing fee and a percentage technology fee to the permit.",
        "sourceUrl": "https://static.spokanecity.org/documents/smc/attachments/development-fee-schedule-2026.pdf",
        "fee": "$15.50 Water Heater and $15.50 Hot Water Tank Heat Pump under Mechanical Permit Fees, plus a $65.00 Processing/Application Fee and a 2.5% Technology Fee",
        "feeAsOf": "Effective January 1, 2026 (Development Fee Schedule 2026)"
      },
      "plumber-service-call": {
        "requirement": "Spokane charges plumbing permits by the fixture rather than by job value: each plumbing fixture on a trap carries the same flat fee, and the city's note makes clear that installs, relocations, replacements and rough-ins all count. A flat processing fee and a technology fee are added to the permit, and a failed inspection that has to be repeated is charged separately.",
        "sourceUrl": "https://static.spokanecity.org/documents/smc/attachments/development-fee-schedule-2026.pdf",
        "fee": "$13.50 per plumbing fixture on a trap; $13.50 each for a medical gas outlet, sewage ejector, vacuum breaker/backflow device or miscellaneous plumbing not covered elsewhere; plus a $65.00 Processing/Application Fee and a 2.5% Technology Fee; Re-Inspection Fee $156.00",
        "feeAsOf": "Effective January 1, 2026 (Development Fee Schedule 2026)"
      },
      "electrician-service-call": {
        "requirement": "Spokane issues its own electrical permits and does its own electrical inspections instead of sending you to the state. Work in an existing house is priced per circuit, while a service change is priced by amperage, and a feeder or subpanel is its own line. The permit also carries the city's flat processing fee and technology fee.",
        "sourceUrl": "https://static.spokanecity.org/documents/smc/attachments/development-fee-schedule-2026.pdf",
        "fee": "$7.20 per circuit for alterations or wiring of existing space; service 1-200 amps $52.00, 201-400 amps $64.20, 401-600 amps $78.00; feeder or subpanel $20.70; ground work (Ufer) $31.10; temporary service $46.60; plus a $65.00 Processing/Application Fee and a 2.5% Technology Fee",
        "feeAsOf": "Effective January 1, 2026 (Development Fee Schedule 2026)"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal counts as a plumbing fixture in Spokane: the city's note under its per-fixture plumbing fee lists garbage disposals and dishwashers among the items covered, and says the fee applies to replacements as well as new installs and rough-ins.",
        "sourceUrl": "https://static.spokanecity.org/documents/smc/attachments/development-fee-schedule-2026.pdf",
        "fee": "$13.50 per plumbing fixture on a trap (the per-fixture note covers garbage disposals), plus a $65.00 Processing/Application Fee and a 2.5% Technology Fee",
        "feeAsOf": "Effective January 1, 2026 (Development Fee Schedule 2026)"
      },
      "smoke-detector-replacement": {
        "requirement": "Spokane publishes no permit or fee for a smoke alarm in a single-family house, but Washington law makes smoke detection devices mandatory in every dwelling unit occupied by someone other than the owner since the end of 1981, built in the state after 1980, or sold on or after July 1, 2019, and installation is the owner's responsibility while battery replacement is the tenant's. For a home sold on or after July 1, 2019 with no alarm at all, the seller must provide at least one before anyone moves in, and the fine for non-compliance runs to $200, or $5,000 for an owner if a fire follows the failure.",
        "sourceUrl": "https://app.leg.wa.gov/RCW/default.aspx?cite=43.44.110"
      }
    }
  },
  "st-louis-mo": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of St. Louis Building Division, Department of Public Safety",
      "url": "https://www.stlouis-mo.gov/government/departments/public-safety/building/"
    },
    "codeEdition": {
      "text": "St. Louis publishes the ordinance behind each code it enforces: the 2018 International Building, Existing Building, Residential, Energy Conservation, Property Maintenance and Fire Codes, all adopted 08-01-18 (Ordinances 70794 through 70799); the 2018 International Mechanical Code (Ordinance 70800) and 2018 International Fuel Gas Code (Ordinance 70801), also 08-01-18; the 2017 National Electrical Code (Ordinance 70802); and, separately and more recently, the 2021 Uniform Plumbing Code adopted by Ordinance 71644 effective 02/20/2023. The plumbing ordinance adopts the 2021 UPC in full except where the city's own amendments change it, and those amendments run to several hundred pages.",
      "sourceUrl": "https://www.stlouis-mo.gov/government/departments/public-safety/building/building-codes.cfm"
    },
    "permitPolicy": {
      "text": "For plumbing work the city's code says the owner must engage a licensed plumbing and/or drainlaying contractor, who applies for the permit, and all the work has to be done by whoever the permit is issued to. A homeowner can be certified instead, but on tight terms: they must live in the one-family dwelling and prove ownership, the work has to be for their own and their family's use (repairs on a house held for rent or sale are a violation), the exam may be taken only once with a one-year wait after a failure, the certification lasts two years and only at the address on the application, and the homeowner may hold only one open permit at a time covering up to four plumbing fixtures, not extendable past six months, and may do no work outside the building. Mechanical permits go only to city-licensed mechanical contractors.",
      "sourceUrl": "https://www.stlouis-mo.gov/government/city-laws/upload/legislative/Ordinances/BOAPdf/71644%20Combined.pdf"
    },
    "registration": {
      "text": "St. Louis licenses the trades itself through its Building Division Boards of Examiners, and the plumbing code publishes the schedule: a $50 application fee for all classes, then $300 for three years for a Master Plumber or a Master Drainlayer ($600 for a combined Master Plumber/Drainlayer), $50 for three years for a Journeyman, $25 for five years to register an apprentice, and $25 to replace a lost licence. The homeowner's plumbing exam costs $25 and the certification it buys lasts two years; any other test the city administers is $50. A licensed plumbing or drainlaying contractor must also file an approved surety bond of $25,000 and carry insurance. Electrical and mechanical contractors are licensed separately by the same Building Division.",
      "sourceUrl": "https://www.stlouis-mo.gov/government/city-laws/upload/legislative/Ordinances/BOAPdf/71644%20Combined.pdf"
    },
    "codeItems": [
      {
        "text": "St. Louis makes a thermal expansion tank part of a water heater replacement, not an option. Any system with a new or replacement water heater that has a pressure reducing valve or is a closed system needs an approved, listed, properly sized expansion tank within ten feet of the heater, on the cold water supply, between the heater's shut-off valve and the heater, and at least 18 inches from the cold-water inlet fitting. The tank may not be supported by the water heater, no shutoff may be put on the branch to the tank, and it must be installed so the heater can still be removed or replaced.",
        "sourceUrl": "https://www.stlouis-mo.gov/government/city-laws/upload/legislative/Ordinances/BOAPdf/71644%20Combined.pdf"
      },
      {
        "text": "The city also wants the pressures recorded on the tank: the measured static building pressure and the pressure the expansion tank was set to must be written in ink on a permanent durable label attached to the tank where it can be seen. An inspector looks for that label. A heater of 30 gallons or less set under a counter or in a confined space in a multi-family unit may use properly sized mechanical water hammer arrestors instead, with the inspector's approval.",
        "sourceUrl": "https://www.stlouis-mo.gov/government/city-laws/upload/legislative/Ordinances/BOAPdf/71644%20Combined.pdf"
      },
      {
        "text": "The St. Louis drain pan rule is written out in detail. A watertight corrosion-resistant safe pan is required where a heater sits in an attic or a ceiling, floor or furred assembly, or anywhere above ground or basement level with no floor drain available. The pan must be at least 2 inches deep and 3 inches larger than the heater in both width and length, metal pans at least 0.0276 inch galvanized sheet, non-metallic pans at least 0.0625 inch and only with electric heaters, with a 1 inch tapping increasing to a 1-1/4 inch drain that discharges through an air gap to a trapped and vented receptor — and the drain has to end at a non-concealed point so a leak is noticed. An attic heater also needs 24 inches of continuous solid flooring from the opening and, where the opening is more than 11 feet above the floor, a permanently fastened stairway or ladder. Unlike many jurisdictions, St. Louis expressly permits a relief valve to discharge into the water heater pan.",
        "sourceUrl": "https://www.stlouis-mo.gov/government/city-laws/upload/legislative/Ordinances/BOAPdf/71644%20Combined.pdf"
      },
      {
        "text": "Plastic pipe is kept away from the heater: PEX, PEX-AL-PEX, PE-AL-PE, PE-RT and CPVC tubing may not be installed within the first 18 inches of piping connected to a water heater, and copper, copper alloy or stainless steel flexible connectors may not exceed 24 inches. A fullway valve is required on the cold water supply to each heater at or near it, and water heater shut-off valves must be in view of and within ten feet of the heater, within easy reach from the ground, and readily accessible.",
        "sourceUrl": "https://www.stlouis-mo.gov/government/city-laws/upload/legislative/Ordinances/BOAPdf/71644%20Combined.pdf"
      },
      {
        "text": "On the electrical side the city re-inspects dormant services: where electrical service to a building has not been in use for six months or more, a re-inspection is required and it is unlawful to supply current until it has been made. If the owner does not apply for it, the Electrical Inspection Supervisor orders the power company to disconnect the service, and it stays off until the Supervisor says otherwise. A re-inspection for faulty or incomplete work costs $50 and that fee doubles for each occurrence.",
        "sourceUrl": "https://www.stlouis-mo.gov/government/departments/public-safety/building/permits/electrical-permit-fees.cfm"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in St. Louis needs a plumbing permit: the city's per-fixture charge names the water heater explicitly, and its \"minor repair\" exemption expressly does not cover setting or replacing fixtures. Expect a rough and a finish inspection, each separately priced, and expect the inspector to check the thermal expansion tank, its pressure label, the drain pan and the first 18 inches of pipe at the heater.",
        "sourceUrl": "https://www.stlouis-mo.gov/government/departments/public-safety/building/permits/plumbing-permit-fees.cfm",
        "fee": "$30 application fee for all plumbing permits, plus $10 for fixtures, each (floor drain, sump, water heater, reduced pressure backflow device or double gate/double check valve, roof drain or trapped outlet), plus $25 rough inspection and $25 finish inspection, each; re-inspection $30",
        "feeAsOf": "City Ordinance 71644, effective 02/20/2023"
      },
      "plumber-service-call": {
        "requirement": "St. Louis plumbing permits are issued to plumbing contractors licensed by the City of St. Louis, and the fee is built up from a flat application charge plus a charge for each fixture and each inspection. Clearing a stoppage or fixing a leak in a pipe, valve or fixture needs no permit, as long as valves, pipes or fixtures are not replaced or rearranged — but the city is explicit that minor repairs stop short of setting or replacing a fixture or disturbing a soil, supply, waste or vent connection. Starting the work before the permit is issued adds a surcharge that rises with the permit fee.",
        "sourceUrl": "https://www.stlouis-mo.gov/government/departments/public-safety/building/permits/plumbing-permit-fees.cfm",
        "fee": "$30 application fee; $10 per fixture; $25 tap, water connection or extension, each; $25 sewer extension, connection or repair, each; $25 rough inspection and $25 finish inspection, each; $30 re-inspection; $45 special inspection; surcharge for commencing work before receiving a permit from $35 up to $1005 depending on the permit fee",
        "feeAsOf": "City Ordinance 71644, effective 02/20/2023"
      },
      "electrician-service-call": {
        "requirement": "Electrical permits in St. Louis go to electrical contractors licensed by the city, and the residential fees are flat amounts by type of work rather than a valuation calculation. A homeowner can pull one instead if they pass a short test given by the Building Division's Electrical Section, live in the single-family home, and are doing a room addition, repair or modification to an existing system; service changes, rehab and new construction must go to a licensed contractor.",
        "sourceUrl": "https://www.stlouis-mo.gov/government/departments/public-safety/building/permits/electrical-permit-fees.cfm",
        "fee": "$25 application fee for all electrical permits, plus residential inspection fees of $60 to Repair or Modify, $60 Service Only, $100 Repair or Modify with Service, and $120 for Residential New Construction including rehab of 50% or more; re-inspection for faulty or incomplete work $50, doubled for each occurrence; re-inspection of a service disconnected six months or more $30",
        "feeAsOf": "City Ordinance 70802, adopted 08-01-18"
      },
      "garbage-disposal-replacement": {
        "requirement": "A disposal swap is permit work in St. Louis: a plumbing permit is required for plumbing work other than minor repairs, and the city's definition of a minor repair excludes both the setting or replacing of fixtures and any work that disturbs a soil, supply, waste or vent connection. The city's plumbing code also sets out exactly how the sink side has to be piped — on a residential double-bowl sink with a disposal the fixture trap must be on the same side of the sink as the disposal, and a dishwasher drain must be looped up and secured to the highest point under the counter and tied in with a wye between the disposal discharge and the trap inlet, or at the head of the disposal.",
        "sourceUrl": "https://www.stlouis-mo.gov/government/departments/public-safety/building/permits/plumbing-permit-fees.cfm",
        "fee": "$30 application fee for all plumbing permits",
        "feeAsOf": "City Ordinance 71644, effective 02/20/2023"
      }
    }
  },
  "st-paul-mn": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Saint Paul Department of Safety and Inspections (DSI)",
      "url": "https://stpaul.gov/departments/safety-inspections"
    },
    "codeEdition": {
      "text": "St. Paul enforces the Minnesota State Building Code. The residential code is the 2018 International Residential Code incorporated by reference and amended by Minnesota Rules chapter 1309; the IRC's own plumbing chapters are deleted and replaced by the Minnesota Plumbing Code (Minnesota Rules chapter 4714, an amended Uniform Plumbing Code), and its electrical chapters by the Minnesota Electrical Code (chapter 1315), with the IRC's smoke-alarm and carbon-monoxide sections R314 and R315 kept in force.",
      "sourceUrl": "https://www.revisor.mn.gov/rules/1309.0010/"
    },
    "permitPolicy": {
      "text": "Only licensed plumbing/gasfitter contractors and homesteading homeowners may pull plumbing, gas-fitting and inside-water-piping permits in St. Paul, and a homeowner's affidavit is required. A homeowner in a duplex may only do the general plumbing work in the half they live in, and homeowners may not do their own plumbing on new single-family or new duplex units, vacant buildings or commercial property. On the electrical side a permit may be bought only by a licensed Minnesota electrical contractor or by the homesteading homeowner who will personally do the work - a homeowner cannot buy the permit and have someone else do the job.",
      "sourceUrl": "https://stpaul.gov/departments/safety-inspections/building-and-construction/construction-permits-and-inspections/plumbing-gas/gas-fitting"
    },
    "registration": {
      "text": "A contractor working in St. Paul needs a city Business Trade License on top of the state license. The Plumbing/Gasfitter Business Trade License costs $188.00 a year, expires December 1, and requires a current City of Saint Paul Master Plumbing/Gasfitter Certificate of Competency, a $500,000 combined-single-limit liability certificate naming DSI as certificate holder, workers' compensation proof, and both a $25,000 Plumbing Contractor bond and a $25,000 Mechanical bond filed with the Minnesota Department of Labor and Industry.",
      "sourceUrl": "https://stpaul.gov/departments/safety-inspections/building-and-construction/competency-cards-and-trade-worker-registration/gas-fitter-trade-license"
    },
    "codeItems": [
      {
        "text": "Before a single-family house in St. Paul is sold, a 120-volt hard-wired smoke alarm with battery backup must be installed - one in the hallway outside the bedrooms satisfies the ordinance. An electrical permit and an inspection are required even if the only work is replacing or reinstalling that alarm, and the power wiring for a newly wired alarm must be AFCI protected. A wall-mounted alarm has to sit between 6 and 12 inches below the ceiling under Saint Paul Legislative Code 58.03.",
        "sourceUrl": "https://www.stpaul.gov/sites/default/files/2023-06/DSI.Bldg_Electrical_hard-wired%20smoke%20alarm%20installation%20guidelines.pdf"
      },
      {
        "text": "St. Paul will enforce the 2026 National Electrical Code on every electrical permit obtained on or after August 17, 2026.",
        "sourceUrl": "https://stpaul.gov/departments/safety-inspections/building-and-construction/construction-permits-and-inspections/electrical-permits-inspections"
      },
      {
        "text": "Minnesota rewrites the UPC rule on water-heater relief discharge: the TPR discharge pipe must run full size, point down, discharge by gravity through an air gap to a safe place or within 18 inches of the floor, must not terminate in a crawl space, must not have a threaded end, and must not discharge into the water heater's drain pan.",
        "sourceUrl": "https://www.revisor.mn.gov/rules/4714.0608/"
      },
      {
        "text": "St. Paul tells inspectors to apply NEC 406.4(D)(4) on receptacle replacement, so a replaced receptacle in a dwelling has to be AFCI protected in the rooms NEC 210.12 covers - by an AFCI receptacle, an upstream AFCI receptacle or a combination AFCI breaker. An ungrounded two-prong receptacle can be replaced with a combination AFCI/GFCI device.",
        "sourceUrl": "https://www.stpaul.gov/sites/default/files/2023-06/DSI.Bldg_Electrical_AFCI%20Protection.pdf"
      },
      {
        "text": "A routine same-amperage panel swap in St. Paul now triggers the exterior emergency disconnect required by 2023 NEC 230.85(C), and the $85 service permit covers the service plus the existing circuits reconnected as part of the job. If the work is only storm repair to the service conductors, conduit or meter enclosure, the city will not require the exterior disconnect.",
        "sourceUrl": "https://www.stpaul.gov/sites/default/files/2023-06/DSI.Bldg_Electrical_Residential%20Service%20Ugrades%20Replacements%20Etc.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "St. Paul issues a gas-fitting permit for a gas water heater, and an inspection follows; replacing, reinstalling or altering gas or water piping for a plumbing system requires the permit.",
        "sourceUrl": "https://stpaul.gov/departments/safety-inspections/building-and-construction/construction-permits-and-inspections/plumbing-gas/gas-fitting",
        "fee": "Minimum permit fee $85; Per unit - Gas $34; If unit BTU's greater than 100,000, additional fee for each 100,000 BTU's or fraction thereof $15; State Surcharge $1",
        "feeAsOf": "Page last edited October 7, 2026"
      },
      "plumber-service-call": {
        "requirement": "A plumbing permit is required in St. Paul to install new, alter, replace, repair, relocate or reinstall the waste, vent, water or gas piping of a plumbing system, and the fee is a flat initial charge plus a charge for each fixture or connection.",
        "sourceUrl": "https://stpaul.gov/departments/safety-inspections/building-and-construction/construction-permits-and-inspections/plumbing-gas/plumbing-application-inspection-fees",
        "fee": "Initial permit fee $92; Per unit - Plumbing $36; Per unit - Water $6; Per unit - Gas $34; State Surcharge $1",
        "feeAsOf": "Page last edited October 7, 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "Replacing a garbage disposal is plumbing work on the waste side of the system, so St. Paul requires a plumbing permit, charged as the flat initial fee plus a per-unit charge.",
        "sourceUrl": "https://stpaul.gov/departments/safety-inspections/building-and-construction/construction-permits-and-inspections/plumbing-gas/plumbing-application-inspection-fees",
        "fee": "Initial permit fee $92; Per unit - Plumbing $36; State Surcharge $1",
        "feeAsOf": "Page last edited October 7, 2026"
      },
      "electrician-service-call": {
        "requirement": "St. Paul charges an electrical permit per service and per circuit, with a minimum that covers a single small job, and an inspection is scheduled with the inspector named on the permit.",
        "sourceUrl": "https://stpaul.gov/departments/safety-inspections/building-and-construction/construction-permits-and-inspections/electrical-permits-inspections/circuits-service-electrical",
        "fee": "Per Service; New, Altered, or Repaired $85.00; Per Circuit; New, Altered, or Repaired $15.00; Minimum Fee $85.00; State Surcharge (Minimum) $1.00",
        "feeAsOf": "Page last edited July 11, 2023"
      },
      "smoke-detector-replacement": {
        "requirement": "An electrical permit and a final inspection are required in St. Paul even to replace or reinstall a hard-wired smoke alarm, and there is no per-unit charge if the alarm goes in alongside other electrical work without a new circuit.",
        "sourceUrl": "https://stpaul.gov/departments/safety-inspections/building-and-construction/construction-permits-and-inspections/electrical-permits-inspections/smoke-detector-installation",
        "fee": "Per Unit Installed, Per Circuit $15.00; Per Unit Installed, With Other Electrical Work, No New Circuit $0.00; Minimum Fee $85.00; State Surcharge (Minimum) $1.00",
        "feeAsOf": "Page last edited October 7, 2026"
      }
    }
  },
  "st-petersburg-fl": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of St. Petersburg Building Department, Construction Services and Permitting Division",
      "url": "https://www.stpete.org/business/building_permitting/index.php"
    },
    "codeEdition": {
      "text": "St. Petersburg publishes its own list of adopted codes, effective December 31, 2023: the 8th Edition (2023) Florida Building Code volumes for Residential, Building, Energy, Test Protocol, Plumbing, Mechanical, Existing Building, Fuel Gas and Accessibility, plus the 2023 Florida Fire Prevention Code. For electrical work the city names NEC 2020, NFPA 70, so the electrical edition in force lags the building code edition. The city points to the Pinellas County Construction Licensing Board for technical code amendments and to its own Municode Chapter 8-36 for administrative amendments.",
      "sourceUrl": "https://www.stpete.org/Business/Building%20Forms%20&%20Applications/Current_Codes_Adopted.pdf"
    },
    "permitPolicy": {
      "text": "A St. Petersburg homeowner can pull their own permit as an owner-builder, and the city's Owner/Contractor Disclosure Statement is the form that makes it official — the owner has to initial each of its numbered statements. It covers building or improving a one- or two-family residence for the owner's own use and occupancy, not for sale or lease, and the law presumes a violation if the home is sold or leased within one year of completion. The owner-builder must give direct on-site supervision, may not hire an unlicensed person as contractor or supervisor, and may not pass supervision to a contractor not licensed for the work. The city spells out the downside: violating the exemption is a first-degree misdemeanor carrying up to a year and a $1,000 fine, and the Building Official can withhold final approval or revoke the permit. Note the city also charges a property owner surcharge on owner-pulled permits.",
      "sourceUrl": "https://www.stpete.org/csp_owner_contr_disclsoure.pdf"
    },
    "registration": {
      "text": "Licensing in St. Petersburg runs through the Pinellas County Construction Licensing Board rather than the city alone. The city's own permit guidance states that the PCCLB requires anyone who advertises or markets themselves as a contractor to be registered and able to produce a PCCLB card, and that work meeting the PCCLB thresholds has to be done by a registered contractor even where the city has exempted the job from needing a permit. The city also points homeowners to the PCCLB to check whether a contractor is licensed in Pinellas County.",
      "sourceUrl": "https://www.stpete.org/list_of_exempted_permits.pdf"
    },
    "codeItems": [
      {
        "text": "St. Petersburg's published exemption list lets a plumber repair or replace an existing fixture in its present location without a permit, as long as the job does not involve replacing or rearranging valves, pipes or fixtures — and then carves water heaters straight back out, stating in so many words that the exemption does not apply to installing or replacing a water heater. So a heater swap is permitted work in St. Pete even though a like-for-like faucet or toilet swap in the same spot may not be.",
        "sourceUrl": "https://www.stpete.org/list_of_exempted_permits.pdf"
      },
      {
        "text": "The city draws a line inside drain repair that catches a lot of service calls. Stopping a leak in a drain, soil, waste or vent pipe is exempt, and so is clearing a stoppage or repairing a leak, valve or fixture. But if a concealed trap, drainpipe, soil, waste or vent pipe turns out to be defective and has to come out and be replaced with new material, the city treats that as new work needing a permit and an inspection under the Florida Building Code, Plumbing.",
        "sourceUrl": "https://www.stpete.org/list_of_exempted_permits.pdf"
      },
      {
        "text": "On the electrical side St. Petersburg exempts replacing a fixed motor or a fixed approved appliance of the same type and rating in the same location, reinstalling an attachment plug receptacle but not the outlet box for it, repairing an overcurrent device of the required capacity in the same location, and wiring under 25 volts that cannot supply more than 50 watts in a single-family or duplex structure. It also exempts low-voltage data, alarm and communication cable in a single-family or duplex home when it is not part of a larger project. Hurricane shutters wired directly to a power source are singled out as needing an electrical permit.",
        "sourceUrl": "https://www.stpete.org/list_of_exempted_permits.pdf"
      },
      {
        "text": "Gas appliance swaps get their own treatment: replacing an existing gas range, cook-top, oven or clothes dryer serving a one- or two-family dwelling needs no gas permit, but the city requires a Fuel Gas Testing Certification form. Relocating any of those appliances in a way that alters or changes the gas system does need a permit.",
        "sourceUrl": "https://www.stpete.org/list_of_exempted_permits.pdf"
      },
      {
        "text": "The exemptions do not survive a flood zone. St. Petersburg lists as an exception any project in a flood zone where a permit application and construction documents have been submitted showing work that would otherwise be exempt, and the city's own HB 803 notice limits the new small-project exemption to properties outside a flood hazard area. Separately, work in a locally or nationally designated historic district may not be exempt either, and the demolition of any structure supporting a roof load always needs a permit.",
        "sourceUrl": "https://www.stpete.org/list_of_exempted_permits.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "A water heater changeout in a St. Petersburg house or duplex always needs a permit — the city's fixture-replacement exemption specifically excludes water heaters — and it is priced as a flat service permit, with a separate line for a solar unit.",
        "sourceUrl": "https://www.stpete.org/Business/Building%20Forms%20&%20Applications/Fee_Schedule_Doc_Nov_2017.pdf",
        "fee": "Service Permits, specified single-family and duplex residential permit fees: $65.00 (covers hot water heater unit changeout with no electric, no gas, with electric, with gas, with electric and gas, and the tankless equivalents with plumbing, gas and/or electric); Solar water heater (includes electric permit if required): $200.00; property owner surcharge $20.00 on each permit issued to a property owner for work costing more than $2,000.00",
        "feeAsOf": "Revised 10/1/2017"
      },
      "garbage-disposal-replacement": {
        "requirement": "St. Petersburg publishes no garbage disposal line of its own; a like-for-like swap in the same spot can fall inside the city's exemptions for replacing an existing fixture in its present location and for replacing a fixed appliance of the same type and rating in the same location, with the Building Official holding the authority to decide what counts as minor work, and where a permit is needed it is the flat plumbing permit.",
        "sourceUrl": "https://www.stpete.org/Business/Building%20Forms%20&%20Applications/Fee_Schedule_Doc_Nov_2017.pdf",
        "fee": "Other - Plumbing with no required plan review and one inspection: $65.00; permit fee where the valuation does not exceed $1,000.00: $50.00",
        "feeAsOf": "Revised 10/1/2017"
      },
      "plumber-service-call": {
        "requirement": "A St. Petersburg plumbing permit that needs no plan review and one inspection is a flat fee, and the city sets a floor under its valuation-based fees for very small jobs; clearing a stoppage or repairing a leak, valve or fixture is on the exempt list and needs no permit at all.",
        "sourceUrl": "https://www.stpete.org/Business/Building%20Forms%20&%20Applications/Fee_Schedule_Doc_Nov_2017.pdf",
        "fee": "Other - Plumbing with no required plan review and one inspection: $65.00; permit fee where the valuation does not exceed $1,000.00: $50.00; for a valuation over $1,000.00 up to $1,000,000.00, single family residential and duplexes $7.00 for each $1,000.00 or fraction thereof; property owner surcharge $20.00 on each permit issued to a property owner for work costing more than $2,000.00",
        "feeAsOf": "Revised 10/1/2017"
      },
      "electrician-service-call": {
        "requirement": "St. Petersburg prices a residential electrical service change as its own flat permit, charges a smaller flat fee for electrical work that needs no plan review and one inspection, and sets a $50 floor for permits on work valued at $1,000 or less.",
        "sourceUrl": "https://www.stpete.org/Business/Building%20Forms%20&%20Applications/Fee_Schedule_Doc_Nov_2017.pdf",
        "fee": "Electric Service Change - Residential: $100.00; Electric Service recertification (service and riser only): $175.00; Other - Electrical with no plan review and one inspection: $65.00; Electric pre-power inspection: $65.00; Saw pole: $120.00; permit fee where the valuation does not exceed $1,000.00: $50.00",
        "feeAsOf": "Revised 10/1/2017"
      },
      "smoke-detector-replacement": {
        "requirement": "St. Petersburg's exempt list covers wiring under 25 volts that cannot supply more than 50 watts in a single-family or duplex home, and low-voltage alarm cable in such a home when it is not part of a larger project, so battery and low-voltage alarm work is treated as exempt while a 120-volt hardwired alarm circuit is not named among the exemptions.",
        "sourceUrl": "https://www.stpete.org/list_of_exempted_permits.pdf"
      }
    }
  },
  "stockton-ca": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Stockton Community Development Department, Building & Life Safety Division",
      "url": "https://www.stocktonca.gov/business/building___life_safety/index.php"
    },
    "codeEdition": {
      "text": "Stockton enforces the 2025 editions of the California Building, Residential, Electrical, Mechanical, Plumbing, Energy, Historical Building, Fire, Existing Building and Green Building Standards Codes as adopted by the state with local amendments, plus the Stockton Municipal Code. The city's design-criteria sheet also fixes the local values an inspector works from: energy climate zone 12, residential seismic design category D1 or D2, 95 mph wind speed, very heavy termite exposure, and a city roof-drainage design rainfall of 2 inches per hour under Stockton Municipal Code 15.16.020D. Allowable soil bearing without a soils report is split at Interstate 5, 1,500 psf to the east and 1,000 psf to the west.",
      "sourceUrl": "https://www.stocktonca.gov/Documents/Business/Building%20&%20Life%20Safety/Building%20Forms/BLDG-0060_MINIMUM%20BUILDING%20DESIGN%20CRITERIA.pdf"
    },
    "permitPolicy": {
      "text": "Stockton issues a water heater permit either to the property owner who completes the city's Owner/Builder form or to a California licensed C-4 or C-36 contractor who also holds a current City of Stockton business license, and whoever picks up a contractor's permit needs an authorization letter from that contractor. A homeowner going the owner-builder route must read, initial every provision of, sign and return the city's Owner-Builder Acknowledgment and Information Verification form before any permit is issued, and an agent cannot sign it for the owner without the city's prior approval. Residential water heater permits can be applied for, paid and received entirely online through the city's Accela portal. Where an emergency replacement or repair had to be done first, the permit application is due the next working business day.",
      "sourceUrl": "https://www.stocktonca.gov/Documents/Business/Building%20&%20Life%20Safety/Building%20Permits%20&%20Inspections/BLDG-0036_RESIDENTIAL%20WATER%20HEATER%20REQUIREMENTS.pdf"
    },
    "registration": {
      "text": "On top of the state contractor licence, Stockton requires a city business licence: the city's own water heater handout conditions issuing a permit to a C-4 or C-36 contractor on that contractor holding a current City of Stockton business license. The city treats self-employed people and independent contractors as owing the business tax, and lists General Contractors and Developers and Specialty Contractors as separate licence categories, each carrying an annual registration tax plus a mill tax, a flat rate, or both. Penalties run 15 percent of the tax due per month to a maximum of 60 percent, with a further 25 percent for operating unlicensed. The city publishes no dollar figure for the contractor categories on its business licence pages.",
      "sourceUrl": "https://www.stocktonca.gov/business/business_licenses/business_license_categories.php"
    },
    "codeItems": [
      {
        "text": "Stockton specifies the water heater anchorage rather than leaving it to the installer: two seismic straps are required, one within the top third of the tank and one within the bottom third, and the bottom strap must sit at least 4 inches above the water heater controls. A heater supported on the ground has to rest on level concrete or another approved base standing at least 3 inches above the adjoining ground, and a heater in a garage needs its ignition source or pilot light at least 18 inches above the garage floor, with barriers or bollards added where the unit could be hit.",
        "sourceUrl": "https://www.stocktonca.gov/Documents/Business/Building%20&%20Life%20Safety/Building%20Permits%20&%20Inspections/BLDG-0036_RESIDENTIAL%20WATER%20HEATER%20REQUIREMENTS.pdf"
      },
      {
        "text": "A sediment trap is a Stockton inspection item on a gas water heater. The city requires it downstream of the shutoff valve and ahead of the flexible connector, built as a tee fitting with a capped leg at least 3 inches long. Gas appliance connectors cannot be reused, must be attached to a hand shutoff type gas valve, and must be sized to the heater's BTU input rating. A replacement that is not like-for-like may need new gas piping run back to the meter, or pipe sizing calculations showing the existing piping is big enough.",
        "sourceUrl": "https://www.stocktonca.gov/Documents/Business/Building%20&%20Life%20Safety/Building%20Permits%20&%20Inspections/BLDG-0036_RESIDENTIAL%20WATER%20HEATER%20REQUIREMENTS.pdf"
      },
      {
        "text": "Stockton is specific about where the temperature and pressure relief discharge ends. The city requires the TPR valve drained to the exterior, terminating toward the ground pointing downward with between 6 and 24 inches of clearance from the ground, and the full valve opening diameter, generally three quarters of an inch, carried through to the end of the drain. Terminating instead at a laundry sink, floor sink or floor drain is allowed only when the Building Department approves it.",
        "sourceUrl": "https://www.stocktonca.gov/Documents/Business/Building%20&%20Life%20Safety/Building%20Permits%20&%20Inspections/BLDG-0036_RESIDENTIAL%20WATER%20HEATER%20REQUIREMENTS.pdf"
      },
      {
        "text": "Where a leak could do damage, in an attic or above a raised wood floor, Stockton requires a watertight corrosion-resistant pan under the heater with a drain of at least three quarters of an inch diameter, and the drain has to end somewhere readily visible so a leak gets noticed. An attic installation carries its own list: an access opening and passageway at least as large as the biggest part of the appliance and never smaller than 22 by 30 inches, a solid unobstructed floor at least 24 inches wide with the run from the opening to the appliance capped at 20 feet where headroom is under 6 feet, a level working platform at least 30 by 30 inches on the service side, and a permanent 120 volt receptacle and light fixture near the appliance with the light switch at the entrance to the passageway.",
        "sourceUrl": "https://www.stocktonca.gov/Documents/Business/Building%20&%20Life%20Safety/Building%20Permits%20&%20Inspections/BLDG-0036_RESIDENTIAL%20WATER%20HEATER%20REQUIREMENTS.pdf"
      },
      {
        "text": "Swapping fuel types is restricted in Stockton. The city's handout states a gas water heater generally cannot be replaced with an electric one unless the house has a photovoltaic system or the new unit is a single heat pump water heater meeting Northwest Energy Efficiency Alliance Tier 3 or higher, with manufacturer documentation of that rating supplied. Accessible existing piping also has to be insulated, specifically the first 5 feet of cold water pipe from the storage tank, and all hot water piping under three quarters of an inch tied to a recirculation system, running from the heat source to the kitchen, or running from the heat source to the storage tank.",
        "sourceUrl": "https://www.stocktonca.gov/Documents/Business/Building%20&%20Life%20Safety/Building%20Permits%20&%20Inspections/BLDG-0036_RESIDENTIAL%20WATER%20HEATER%20REQUIREMENTS.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Stockton requires a permit to replace an existing water heater or install a new one, and charges a flat non-valuation fee for it rather than pricing it off job value; the permit can be applied for, paid and issued online, and a like-for-like swap does not need manufacturer specifications submitted.",
        "sourceUrl": "https://www.stocktonca.gov/Documents/Government/Budget%20And%20Financial%20Reports/Fee%20Schedule/2026-27/FY2627_CDD_Fees.pdf",
        "fee": "$78.50 Water Heater permit (non-valuation based fee), plus the city's add-ons of a Technology Fee at 0.075 of the permit fee, a Community Rating System admin fee at 0.06 of the permit fee, a Capital Preservation Fee at .001 of valuation, General Plan Maintenance at .0015 of valuation and a $1.00 Green Building Standards pass-through for valuation between $1 and $25,000",
        "feeAsOf": "Effective 7/1/2026 (FY 2026-27 Adopted Fee Schedule)"
      },
      "plumber-service-call": {
        "requirement": "Stockton requires a permit for most plumbing work and prices residential permits off the job valuation from a fixed table, so a small service job lands at the bottom bracket; clearing a stoppage, repairing a leak in a pipe, valve or fixture, and removing and reinstalling a toilet are exempt, but once a concealed trap, drain, water, soil, waste or vent pipe has to come out and be replaced with new material the city treats it as new work needing a permit and an inspection.",
        "sourceUrl": "https://www.stocktonca.gov/Documents/Government/Budget%20And%20Financial%20Reports/Fee%20Schedule/2026-27/FY2627_CDD_Fees.pdf",
        "fee": "$75.00 residential building permit at the lowest valuation bracket (job value up to $999), plus $32.00 plan check in the same bracket; above $99,999 the permit is $.006787 for each dollar over $100,000 plus $1,078",
        "feeAsOf": "Effective 7/1/2026 (FY 2026-27 Adopted Fee Schedule)"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Stockton needs a permit priced from the same residential valuation table, with only narrow exemptions such as reinstalling a receptacle plug, replacing a branch circuit overcurrent device of the same capacity in the same location, and minor repairs like changing lamps; an electrical-only permit for a temporary service or for any residential or commercial service over 200 amps will not be issued until the city's Electrical Service Questionnaire is filled in, which asks the existing and proposed service size, whether there are active code enforcement citations on the property, and what the service will feed.",
        "sourceUrl": "https://www.stocktonca.gov/Documents/Government/Budget%20And%20Financial%20Reports/Fee%20Schedule/2026-27/FY2627_CDD_Fees.pdf",
        "fee": "$75.00 residential building permit at the lowest valuation bracket (job value up to $999), plus $32.00 plan check in the same bracket; Residential Minor Remodel is a flat $314.00",
        "feeAsOf": "Effective 7/1/2026 (FY 2026-27 Adopted Fee Schedule)"
      },
      "smoke-detector-replacement": {
        "requirement": "Stockton publishes no permit or fee for replacing a smoke alarm on its own, but it makes applicants sign a Smoke and Carbon Monoxide Alarm Declaration on residential new construction, alterations, repairs and additions, and the declaration sets out where the alarms go, including at least 3 feet horizontally from the door of a bathroom with a tub or shower and in both the hallway and the room open to it where that room's ceiling is 24 inches or more higher than the hallway; interconnection and hard wiring are waived where the work does not strip interior wall or ceiling finishes and there is no attic, crawl space or basement to run wiring through, and for exterior-only work such as re-roofing, siding, windows, doors or a new porch or deck.",
        "sourceUrl": "https://www.stocktonca.gov/Documents/Business/Building%20&%20Life%20Safety/Building%20Permits%20&%20Inspections/BLDG-0035_SMOKE%20&%20CARBON%20MONOXIDE%20ALARM%20DECLARATION.pdf"
      }
    }
  },
  "syracuse-ny": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Syracuse Central Permit Office",
      "url": "https://www.syr.gov/Departments/Central-Permit-Office"
    },
    "codeEdition": {
      "text": "Syracuse enforces the New York State Uniform Fire Prevention and Building Code. The State repealed the 2020 edition and adopted the 2025 code books, including the 2025 Residential Code and 2025 Plumbing Code of New York State, effective December 31, 2025; permit applications filed on or after that date must comply with the 2025 code. Onondaga County's plumbing rules add local requirements on top of the state code through the Examining Board for Plumbers' implementation document.",
      "sourceUrl": "https://dos.ny.gov/notice-adoption"
    },
    "permitPolicy": {
      "text": "Syracuse splits the work between two authorities. The City's Central Permit Office issues residential construction permits for 1-2 family homes and the separate trade permits for HVAC, electrical, fire alarm and sprinkler work, but plumbing permits are not issued by the City at all - they must be obtained through Onondaga County. Every City construction permit gets an inspection after the work is finished, scheduled with the Division of Code Enforcement, and a permit is good for one year.",
      "sourceUrl": "https://www.syr.gov/Departments/Central-Permit-Office/Permits/Residential-Construction-Permits"
    },
    "registration": {
      "text": "Anyone doing plumbing work in Syracuse has to be licensed and registered with Onondaga County's Plumbing Control Division, and must carry the registration card on the job site. Registration runs on annual deadlines with late fees after them, and a lapse of more than a year triggers multiple fees. Journeyman and master applicants must first pass an exam and get a Certificate of Competency from the Onondaga County Examining Board for Plumbers.",
      "sourceUrl": "https://onondaga.gov/wep/plumber-licensing/"
    },
    "codeItems": [
      {
        "text": "Onondaga County inspects a replacement water heater against its own checklist, which the plumber must submit with the permit. It calls for a thermal expansion tank wherever a pressure-reducing valve or RPZ is present, the temperature/pressure relief discharge tube piped to within 6 inches of the floor without reducing its size and with no exposed threaded end, a full-port valve on the cold-water inlet, the thermostat set to 120 degrees Fahrenheit, and a drain pan where applicable.",
        "sourceUrl": "https://onondaga.gov/wep/wp-content/uploads/sites/219/2026/06/Water-Heater-Checklist-2026.pdf"
      },
      {
        "text": "On a gas-fired tank in Onondaga County the inspector wants metal hot and cold lines for at least 18 inches off the heater, the flue or exhaust fitted and supported with three sheet metal screws and sealed, and a power-vent exhaust terminating outside with the manufacturer's clearances from openings plus animal or rodent screens. A vacuum relief valve is required on bottom-fed tanks.",
        "sourceUrl": "https://onondaga.gov/wep/wp-content/uploads/sites/219/2026/06/Water-Heater-Checklist-2026.pdf"
      },
      {
        "text": "The checklist is photo-documented rather than always inspected in person: the plumber supplies pictures of the listed items, including the rating plate and the vent termination, and one picture has to show the placard with the installation date, the plumber's name, the homeowner and the job address.",
        "sourceUrl": "https://onondaga.gov/wep/wp-content/uploads/sites/219/2026/06/Water-Heater-Checklist-2026.pdf"
      },
      {
        "text": "Onondaga County draws the no-permit line narrowly. The only plumbing work that needs no permit is an in-kind swap of a faucet, flush valve, supply tube, individual fixture stop, toilet fill valve or flushing mechanism. Emergency work may start first, but the permit must be taken out the next business day and the work cannot be covered, backfilled or concealed before Plumbing Control inspects it.",
        "sourceUrl": "https://onondaga.gov/wep/plumbing-planreviews/"
      },
      {
        "text": "An owner-occupant of a single-family home may hold a homeowner plumbing permit, but must apply in person, show proof of ownership and occupancy, submit plans with drainage and vent lines sized to code, do the work personally, and is barred from any plumbing work outside the house such as the water service or building sewer.",
        "sourceUrl": "https://onondaga.gov/wep/wp-content/uploads/sites/219/2026/02/Homeowner-Plumbing-Permit-Conditions-Request-and-Review.pdf"
      },
      {
        "text": "Inside the City of Syracuse the sewer side carries extra steps: a private sanitary or storm sewer connection needs City Engineer or DPW approval before the County will issue the plumbing permit, and the City must flush the sewer lateral before a plumber connects to it - Plumbing Control will not inspect without proof the lateral was flushed and televised to the main. A building drain backwater valve is a mandatory standard detail.",
        "sourceUrl": "https://onondaga.gov/wep/wp-content/uploads/sites/219/2025/10/OnondagaCounty-ImplementationNYSCode2018.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Syracuse needs a plumbing permit from Onondaga County Plumbing Control before the work starts, and the permit covers one inspection trip in which the county checks its water-heater checklist items such as the expansion tank, the relief valve discharge and the 120-degree setting.",
        "sourceUrl": "https://onondaga.gov/wep/wp-content/uploads/sites/219/2026/02/Plumbing-Control-Fees.pdf",
        "fee": "$15.00 water heater installation (1 inspection trip); $100.00 for each extra trip above the number allowed"
      },
      "plumber-service-call": {
        "requirement": "Plumbing permits in Syracuse come from Onondaga County rather than the City, and the county's schedule prices small jobs by the fixture count with a set number of inspection trips included; only an in-kind swap of a faucet, valve or supply tube escapes the permit.",
        "sourceUrl": "https://onondaga.gov/wep/wp-content/uploads/sites/219/2026/02/Plumbing-Control-Fees.pdf",
        "fee": "$100.00 single fixture replacement, less than 10 fixtures (1 inspection trip); $100.00 interior water piping repair or replacement; $100.00 water service repair or replacement; $100.00 for each extra inspection trip"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal is not on Onondaga County's short list of in-kind swaps that escape a permit, so replacing one is permitted plumbing work and is billed from the county's single-fixture replacement line.",
        "sourceUrl": "https://onondaga.gov/wep/wp-content/uploads/sites/219/2026/02/Plumbing-Control-Fees.pdf",
        "fee": "$100.00 single fixture replacement, less than 10 fixtures (1 inspection trip)"
      },
      "electrician-service-call": {
        "requirement": "Electrical work in Syracuse takes its own trade permit from the Central Permit Office, separate from any building permit, and the city charges per electrical item installed on top of the base filing fee it charges for the project.",
        "sourceUrl": "https://www.syr.gov/files/sharedassets/public/v/2/departments/police/permits/documents/permit-fee-schedule-2025.pdf",
        "fee": "Electrical permit fee $2/item (per electrical item installed), plus the base filing fee ($30/unit new construction or addition, $25/unit renovation or remodeling for residential 1-2 family) and a $25 certificate fee"
      }
    }
  },
  "tampa-fl": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Tampa Development & Growth Management, Construction Services Division",
      "url": "https://www.tampa.gov/construction-services"
    },
    "codeEdition": {
      "text": "Tampa enforces the statewide Florida Building Code, and the city announced the 8th Edition as taking effect January 1, 2024, with a vesting process that let plans submitted and accepted by December 31, 2023 stay under the 7th Edition. The Florida Building Commission adopts a new edition every three years, starting from the current Florida code and then reviewing the international model codes.",
      "sourceUrl": "https://www.tampa.gov/sites/default/files/document/2023/building_code_announcement_2024.pdf"
    },
    "permitPolicy": {
      "text": "A Tampa homeowner can pull their own permit as an owner-builder under the Florida statutory exemption, and the city sets out what that takes. The property must be deeded in the owner-builder's name and be for the owner's exclusive use, and it may not be offered for sale, lease or rent for a year after the project is finished. A property in trust qualifies only if the trustee is a natural person; corporations, LLCs and partnerships do not qualify and must hire a licensed contractor. Improvements to a one- or two-family home carry no valuation limit, a signed Owner-Builder Acknowledgement Form goes in with the application, and the city notes the permit fee is the same no matter who pulls it.",
      "sourceUrl": "https://www.tampa.gov/sites/default/files/document/2026/owner-builder_acknowledgement_form_ada.pdf"
    },
    "registration": {
      "text": "Tampa requires a contractor to be registered with the city on top of the state credential. A state-certified contractor already registered with the Florida DBPR self-registers with the City of Tampa through the Accela Citizen Access portal; a specialty contractor whose license is not regulated by DBPR files the city's own Contractor License Registration Form instead. Every license type has to show proof of workers' compensation insurance or an exemption.",
      "sourceUrl": "https://www.tampa.gov/sites/default/files/document/2026/contractor-registration-form_rev10.27.26_ada.pdf"
    },
    "codeItems": [
      {
        "text": "Tampa publishes the exact photo checklist its inspector works from on a water heater replacement, and it goes well past the national basics. Besides the T&P valve and data plate, the inspector wants the relief drain line with the discharge area measured, the pan and pan drain line where required, a stand where required, insulation on the hot water outlet, impact protection such as a bollard or wheel stop where the location calls for it, and a vacuum relief valve, which Tampa says is required on bottom-feed units.",
        "sourceUrl": "https://www.tampa.gov/sites/default/files/document/2026/offline-field-report-checklist-water-heater-replacement_ada-1_0.pdf"
      },
      {
        "text": "Tampa ties the thermal expansion requirement to backflow prevention: the water heater checklist calls for a thermal expansion device, or a water heating appliance that complies on its own, where a backflow device is installed. The checklist also asks for the electrical connection and wire size, the disconnecting means, and the breaker and panel schedule, so an electric heater swap is inspected as an electrical job too.",
        "sourceUrl": "https://www.tampa.gov/sites/default/files/document/2026/offline-field-report-checklist-water-heater-replacement_ada-1_0.pdf"
      },
      {
        "text": "On an electrical device or fixture replacement, Tampa's checklist asks for photographs of GFCI and AFCI protection where it applies, at the device or at the breaker, the device's listing and labeling, arc shields where required, and the panel with the cover off showing cable type, size and markings, then with the cover on and circuits identified.",
        "sourceUrl": "https://www.tampa.gov/sites/default/files/document/2026/offline_field_report_checklist_electrical_device_and_fixture_replacement_ada.pdf"
      },
      {
        "text": "Tampa publishes a hard boundary for its no-plan-review trade permits. A water heater replacement qualifies only in the same location with no conversion, such as gas to electric, and a fixture replacement only in the same location and like for like. Work past those limits needs a full building permit that goes through both application review and plan review. Work inside the limits can be inspected virtually through the city's VuSpex system, and once the required photos are uploaded the inspection is scheduled automatically for the next business day.",
        "sourceUrl": "https://www.tampa.gov/sites/default/files/document/2026/trade-permit-limitations-by-discipline.pdf"
      },
      {
        "text": "Tampa's trade permit prices leave out the Florida Building Permit Surcharge of 2.5 percent of permit value, with a $4.00 minimum, which is added to every permit. A failed inspection costs $120.00 per discipline to redo, and getting a citation or stop work order released costs $339.00.",
        "sourceUrl": "https://www.tampa.gov/sites/default/files/document/2026/general_and_administrative_fee_schedule_ada.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in a Tampa house runs on a plumbing trade permit at one flat residential rate, with the state surcharge added on top; a solar water heater has its own line at the same price, and gas piping costs more.",
        "sourceUrl": "https://www.tampa.gov/sites/default/files/document/2026/trade_permit_fee_schedule_ada.pdf",
        "fee": "Plumbing (general), residential one and two family dwellings: $120.00; Solar Water Heater: $120.00; Natural & LP Gas Piping: $162.00; plus Florida Building Permit Surcharge of 2.5% of permit value or $4.00 minimum",
        "feeAsOf": "Updated February 16, 2023 (schedule effective October 1, 2018)"
      },
      "garbage-disposal-replacement": {
        "requirement": "Tampa has no separate garbage disposal line; a disposal swap falls under the general plumbing trade permit, which is one flat residential fee for plumbing work not listed on its own.",
        "sourceUrl": "https://www.tampa.gov/sites/default/files/document/2026/trade_permit_fee_schedule_ada.pdf",
        "fee": "Plumbing (general), residential one and two family dwellings: $120.00; plus Florida Building Permit Surcharge of 2.5% of permit value or $4.00 minimum",
        "feeAsOf": "Updated February 16, 2023 (schedule effective October 1, 2018)"
      },
      "plumber-service-call": {
        "requirement": "Tampa charges one flat residential fee for a plumbing trade permit covering plumbing work that has no line of its own, so a small service call and a bigger repair carry the same permit cost before the state surcharge.",
        "sourceUrl": "https://www.tampa.gov/sites/default/files/document/2026/trade_permit_fee_schedule_ada.pdf",
        "fee": "Plumbing (general), residential one and two family dwellings: $120.00; plus Florida Building Permit Surcharge of 2.5% of permit value or $4.00 minimum",
        "feeAsOf": "Updated February 16, 2023 (schedule effective October 1, 2018)"
      },
      "electrician-service-call": {
        "requirement": "An electrical trade permit in Tampa is a flat residential fee, and a service upgrade is priced the same as general electrical work, with the state surcharge added to whatever the permit comes to.",
        "sourceUrl": "https://www.tampa.gov/sites/default/files/document/2026/trade_permit_fee_schedule_ada.pdf",
        "fee": "Electrical (general), residential one and two family dwellings: $120.00; Service Upgrade: $120.00; plus Florida Building Permit Surcharge of 2.5% of permit value or $4.00 minimum",
        "feeAsOf": "Updated February 16, 2023 (schedule effective October 1, 2018)"
      },
      "smoke-detector-replacement": {
        "requirement": "Tampa's fee schedule has no smoke alarm line, so hardwired alarm work is billed on the general electrical trade permit, a single flat residential fee for electrical activities not listed separately, plus the state surcharge.",
        "sourceUrl": "https://www.tampa.gov/sites/default/files/document/2026/trade_permit_fee_schedule_ada.pdf",
        "fee": "Electrical (general), residential one and two family dwellings: $120.00; plus Florida Building Permit Surcharge of 2.5% of permit value or $4.00 minimum",
        "feeAsOf": "Updated February 16, 2023 (schedule effective October 1, 2018)"
      }
    }
  },
  "toledo-oh": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Toledo Division of Building Inspection",
      "url": "https://cdn.toledo.oh.gov/uploads/documents/Building-Inspection/Construction-Procedures.pdf"
    },
    "codeEdition": {
      "text": "Toledo's Division of Building Inspection is a state-certified building department enforcing the Residential Code of Ohio for one-, two- and three-family dwellings, the Ohio Building Code, and Toledo Municipal Code Part 13. The city published that the updated Ohio Building, Mechanical and Plumbing Codes, drawn from the 2021 International codes, took effect for applications filed on or after March 1, 2024.",
      "sourceUrl": "https://toledo.oh.gov/news/2024/03/01/ohio-board-of-building-standards-2024-code-update-information"
    },
    "permitPolicy": {
      "text": "Toledo lets a homeowner apply for their own plumbing or electrical permit, but the application's certification commits the owner to performing all of the work personally; hiring a contractor under a homeowner permit can bring prosecution under Toledo Municipal Code 525.02 and revocation of the permit. A contractor applicant must give a licence number on the same form.",
      "sourceUrl": "https://cdn.toledo.oh.gov/uploads/documents/Building-Inspection/Plumbing-Permit-Application.pdf"
    },
    "registration": {
      "text": "The Appendix B building permit fee schedule used by the City of Toledo Division of Building Inspection and Lucas County Building Regulations (effective February 25, 2022) sets contractor registration, original or renewal, at $100.00 per contractor. Ohio licenses plumbing and electrical contractors at state level through the Ohio Construction Industry Licensing Board.",
      "sourceUrl": "https://www.co.lucas.oh.us/DocumentCenter/View/80325/Fee-Schedule---Effective-2-25-22"
    },
    "codeItems": [
      {
        "text": "Toledo counts the water heater, the garbage disposal, a backflow device and a sanitary backwater device as separately listed fixtures on its plumbing permit application, so each one adds to the per-fixture charge on top of the base fee.",
        "sourceUrl": "https://cdn.toledo.oh.gov/uploads/documents/Building-Inspection/Plumbing-Permit-Application.pdf"
      },
      {
        "text": "Toledo charges a separate underground inspection, per run, on plumbing work and, for electrical, separate underground service and pool-bonding inspections, so buried or slab work is inspected and billed apart from the main permit.",
        "sourceUrl": "https://cdn.toledo.oh.gov/uploads/documents/Building-Inspection/Electrical-Permit-Application.pdf"
      },
      {
        "text": "Ohio's residential code bars a fuel-fired water heater from a room used as a storage closet, and a water heater placed in a bedroom or bathroom must sit in a sealed enclosure so it does not draw combustion air from the living space. Direct-vent units are exempt from the enclosure.",
        "sourceUrl": "https://codes.ohio.gov/assets/laws/administrative-code/rules/4101/8/4101$8-20-01_eff_7_1_19.pdf"
      },
      {
        "text": "Ohio rewrites the national GFCI rule for houses: it deletes NEC 210.8(D) (the dishwasher-outlet rule), exempts a single ceiling receptacle serving a garage door opener, and exempts a sump-pump receptacle when a GFCI duplex sits within six feet of the pump. Replacing equipment on an existing outdoor outlet also triggers adding GFCI protection there.",
        "sourceUrl": "https://codes.ohio.gov/assets/laws/administrative-code/rules/4101/8/4101$8-34-01_eff_4_15_24.pdf"
      },
      {
        "text": "Ohio requires both photoelectric and ionization smoke-alarm technology on every level of a dwelling unit, and exempts plumbing or mechanical repairs from triggering the retrofit that other alterations and repairs trigger.",
        "sourceUrl": "https://codes.ohio.gov/assets/laws/administrative-code/rules/4101/8/4101$8-3-01_eff_7_1_19.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Toledo treats a water heater as a plumbing fixture on its plumbing permit application, so replacing one takes a plumbing permit charged as a base fee plus a per-fixture amount, subject to the city's permit minimum.",
        "sourceUrl": "https://cdn.toledo.oh.gov/uploads/documents/Building-Inspection/Plumbing-Permit-Application.pdf",
        "fee": "Existing Residential: $65 + $6 / Fixture; Permit Minimum of $75.00; plus State of Ohio Surcharge (Residential 1%)"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal is a listed fixture on Toledo's plumbing permit application, so replacing one is permitted the same way as any other plumbing fixture.",
        "sourceUrl": "https://cdn.toledo.oh.gov/uploads/documents/Building-Inspection/Plumbing-Permit-Application.pdf",
        "fee": "Existing Residential: $65 + $6 / Fixture; Permit Minimum of $75.00"
      },
      "plumber-service-call": {
        "requirement": "Any plumbing alteration, replacement or repair in Toledo is permitted through the Division of Building Inspection, and no plumbing permit costs less than the city's stated minimum.",
        "sourceUrl": "https://cdn.toledo.oh.gov/uploads/documents/Building-Inspection/Plumbing-Permit-Application.pdf",
        "fee": "Permit Minimum of $75.00; Existing Residential: $65 + $6 / Fixture"
      },
      "electrician-service-call": {
        "requirement": "Electrical alterations and replacements in an existing Toledo house take an electrical permit charged as a per-unit base fee plus amp- or item-based charges, subject to the city's permit minimum.",
        "sourceUrl": "https://cdn.toledo.oh.gov/uploads/documents/Building-Inspection/Electrical-Permit-Application.pdf",
        "fee": "EXISTING RESIDENTIAL $60.00 per unit; Permit Minimum of $75.00; Existing Service Release $50/Unit"
      }
    }
  },
  "tucson-az": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Tucson Planning and Development Services Department",
      "url": "https://www.tucsonaz.gov/Departments/Planning-Development-Services/Codes/Building-Codes"
    },
    "codeEdition": {
      "text": "Tucson moved onto the 2024 International Codes and the 2023 National Electrical Code effective January 1, 2026, with the 2024 energy code following on July 1, 2026, under Ordinance 12171. Anything submitted on or after July 1, 2026 is reviewed against those editions as amended by the city; submittals made earlier stay under the editions in force when they were filed unless the Building Official approves otherwise. Tucson publishes its own amendment document for each code, and the department says both the model text and the amendments have to be read together.",
      "sourceUrl": "https://www.tucsonaz.gov/Departments/Planning-Development-Services/Codes/Building-Codes"
    },
    "permitPolicy": {
      "text": "Tucson's amendment to Section 105.3 of the 2024 IBC makes the applicant name the person or contractor who will actually do the work. Where Arizona law requires a licensed contractor, the application must carry the licence number, or else state which exemption under A.R.S. 32-1121 is being claimed to do the work without one, which is the route a homeowner uses on their own house. On the fee side, a trade permit covering more than one trade discipline has to identify a general contractor.",
      "sourceUrl": "https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/documents/building-code/2024-international-building-code-amendments.pdf"
    },
    "registration": {
      "text": "Tucson does not publish a separate city trade registration or bond on top of the state credential. The city's permit application amendment asks only for the Arizona licence number, or the A.R.S. 32-1121 exemption being claimed, and the adopted fee schedule carries no city contractor registration line.",
      "sourceUrl": "https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/documents/building-code/2024-international-building-code-amendments.pdf"
    },
    "codeItems": [
      {
        "text": "Tucson softens the water heater drain pan rule. Its amendment to Section 504.7.1 of the 2024 International Plumbing Code adds that a drain is not required for a replacement water heater in a location where no drain was previously installed, so an inspector will not fail a swap in a closet that never had one.",
        "sourceUrl": "https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/documents/building-code/2024-international-plumbing-code-amendments.pdf"
      },
      {
        "text": "Tucson also edits the relief-valve discharge rules themselves: its plumbing amendments delete item 2 from Section 504.6, the model code's requirements for TPR discharge piping, so the discharge termination is judged against the remaining items rather than the full model list.",
        "sourceUrl": "https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/documents/building-code/2024-international-plumbing-code-amendments.pdf"
      },
      {
        "text": "Tucson lets a dishwasher and a garbage disposer share one circuit. Its amendment to Section 210.11(C) of the 2023 NEC adds item (5), which permits both appliances on the same 20-amp branch circuit in a residential occupancy.",
        "sourceUrl": "https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/documents/building-code/2023-national-electrical-code-amendments.pdf"
      },
      {
        "text": "Because of the desert heat, Tucson's NEC amendment sets the outdoor ambient temperature used for conductor ampacity at not less than 45 degrees C, which derates outdoor runs more heavily than the model tables would. The same amendments require disconnect identification labels to be engraved or raised lettering fixed with screws or rivets, and state that plastic tape does not count as durable.",
        "sourceUrl": "https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/documents/building-code/2023-national-electrical-code-amendments.pdf"
      },
      {
        "text": "Tucson writes its own list of electrical work that needs no permit, added to IBC Section 105.2: repairing or replacing a fixed motor or transformer of the same type and rating in the same location, repairing or replacing the current-carrying parts of a switch, receptacle, contactor, control device or overcurrent device of the required capacity in the same location, temporary decorative lighting, and equipment running under 25 volts that cannot supply more than 50 volt-amps.",
        "sourceUrl": "https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/documents/building-code/2024-international-building-code-amendments.pdf"
      },
      {
        "text": "Tucson requires a backwater valve wherever a finished floor sits less than 12 inches above the next upstream sewer manhole cover, under its amendment to IPC Section 714.1, and floors draining from above that point may not discharge through the same valve.",
        "sourceUrl": "https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/documents/building-code/2024-international-plumbing-code-amendments.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Tucson takes a trade permit, which is a flat fee covering up to half an hour of staff review and two inspections, and the fee schedule prices a like-for-like swap and a swap that changes fuel type as separate listed items.",
        "sourceUrl": "https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/documents/fee-schedule/fy27_fee_schedule.pdf",
        "fee": "$150.00 Trade Permits (items J. Water Heater Installation (like for like) and K. Water Heater Installation (modify fuel type)); includes up to 1/2 hour of staff review and permit processing and 2 inspections, with extra review or inspection at the hourly rate, 1/2 hour minimum",
        "feeAsOf": "Effective July 1, 2026 (FY27 fee schedule adopted by Mayor and Council May 19, 2026)"
      },
      "plumber-service-call": {
        "requirement": "A plumbing fixture repair or replacement, a sewer line or building drain repair, and a water service line repair are each named items on Tucson's flat-fee trade permit list, and the fee buys two inspections; a job touching two or more listed items costs the base fee plus a smaller charge for each extra item.",
        "sourceUrl": "https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/documents/fee-schedule/fy27_fee_schedule.pdf",
        "fee": "$150.00 Trade Permits (items H. Plumbing Fixture Repair/Replace, I. Sewer Line/Building Drain Repair/Replace, L. Water Service Line Repair/Replace); Trade Permits - 2 or more items: $150.00 for first item + $50.00 for each additional item",
        "feeAsOf": "Effective July 1, 2026 (FY27 fee schedule adopted by Mayor and Council May 19, 2026)"
      },
      "electrician-service-call": {
        "requirement": "Tucson needs no permit to repair or replace the current-carrying parts of a switch, receptacle, contactor, control or overcurrent device of the same capacity in the same place, but a new circuit, a service panel swap or a panel upgrade is a flat-fee trade permit that includes two inspections.",
        "sourceUrl": "https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/documents/fee-schedule/fy27_fee_schedule.pdf",
        "fee": "$150.00 Trade Permits (items C. Replace Electric Service Panel (like for like; up to 400 amps), D. Upgrade/Modify Electric Service Panel (up to 400 amps), E. New Electrical Circuit (max two 20 amp branches), A. Electric Clearance Only (no new work))",
        "feeAsOf": "Effective July 1, 2026 (FY27 fee schedule adopted by Mayor and Council May 19, 2026)"
      }
    }
  },
  "tulsa-ok": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Tulsa Development Services, Permit Center and Inspection Services",
      "url": "https://www.cityoftulsa.org/government/departments/development-services/inspection-services/"
    },
    "codeEdition": {
      "text": "Oklahoma sets the codes statewide through the Uniform Building Code Commission: the 2024 International Residential Code and 2024 International Plumbing Code took effect September 14, 2026, replacing the 2018 editions, and the 2023 National Electrical Code took effect September 14, 2024. Tulsa's own Development Services handout on repair and alteration permits, revised May 2026, still quotes the 2018 IRC and 2018 International Existing Building Code definitions.",
      "sourceUrl": "https://oklahoma.gov/oubcc/codes-and-rules/international-residential-code-adoptions.html"
    },
    "permitPolicy": {
      "text": "Tulsa's Permit Center states plainly that only a licensed tradesperson may apply for a trade permit, so a homeowner cannot pull their own electrical, plumbing or mechanical permit here. The city does publish an affidavit of exemption from general liability and workers compensation cover for an individual homeowner, used on building permit work.",
      "sourceUrl": "https://www.cityoftulsa.org/government/departments/development-services/permit-center/applications-and-forms/"
    },
    "registration": {
      "text": "Tulsa requires its own certificate of registration on top of the Oklahoma state licence, and renewal applications must be accompanied by a photocopy of the current state licence. The registration fee is $178.00 each for an Electrical Contractor, a Plumbing Contractor and a Mechanical Contractor, and $64.00 for a Stationary Engineer, waived if the holder is registered with the city as a Mechanical Contractor; each certificate expires on the last day of the contractor's birth month.",
      "sourceUrl": "https://www.cityoftulsa.org/media/26193/ordinance-no-25351.pdf"
    },
    "codeItems": [
      {
        "text": "Oklahoma adds a rule to the residential code aimed squarely at makeshift water-heater stands: where a water heater has to be raised, it must sit on a stand or platform structurally sized for the weight of the heater plus its contents.",
        "sourceUrl": "https://oklahoma.gov/content/dam/ok/en/oubcc/documents/rules/2026%2009%2014%20IRC%202024%20Permanent%20Rule.pdf"
      },
      {
        "text": "Solar water-heater panels fitted on a roof in Oklahoma must have a union on every pipe entering and leaving the panel, so the panel can be disconnected mechanically for service or for a reroof.",
        "sourceUrl": "https://oklahoma.gov/content/dam/ok/en/oubcc/documents/rules/2026%2009%2014%20IRC%202024%20Permanent%20Rule.pdf"
      },
      {
        "text": "Where a slab on grade is post-tension reinforced, Oklahoma requires a label on the electrical panel door saying so, as a warning to anyone who later cuts into the floor.",
        "sourceUrl": "https://oklahoma.gov/content/dam/ok/en/oubcc/documents/rules/2026%2009%2014%20IRC%202024%20Permanent%20Rule.pdf"
      },
      {
        "text": "Oklahoma's version of the outdoor GFCI rule reaches at-or-below-grade garages, accessory buildings and boathouses, and it adds that replacing the equipment fed from such an outlet triggers GFCI protection on that outlet. The state excepts lighting outlets and listed HVAC equipment, and deleted the expiry date the national code had put on the HVAC exception.",
        "sourceUrl": "https://oklahoma.gov/content/dam/ok/en/oubcc/documents/rules/2022%2009%2014%20NEC%202023%20Permanent%20Rule.pdf"
      },
      {
        "text": "Oklahoma adds an allowance for a gas-fired central furnace in a dwelling to be cord-and-plug connected, so it can be run temporarily from a portable generator, with a cap on the cord length.",
        "sourceUrl": "https://oklahoma.gov/content/dam/ok/en/oubcc/documents/rules/2022%2009%2014%20NEC%202023%20Permanent%20Rule.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Tulsa charges a flat plumbing permit fee for a water heater, and the city's plumbing permit request form counts the water heater as its own line item. Only a licensed plumbing contractor registered with the city can apply, and the permit fee covers the inspections.",
        "sourceUrl": "https://www.cityoftulsa.org/media/26193/ordinance-no-25351.pdf",
        "fee": "Water heater fee $35.00; a minimum fee of $80.00 shall apply to any permit",
        "feeAsOf": "Ordinance No. 25351, 2024"
      },
      "plumber-service-call": {
        "requirement": "Plumbing work in Tulsa is permitted per fixture against a base fee, and the cost of the permit covers the inspections; extra inspections, partials and re-inspections are charged on top. Replacing or relocating water supply, sewer, drain, gas, waste or vent piping is specifically excluded from the ordinary-repair exemption, so it needs a permit.",
        "sourceUrl": "https://www.cityoftulsa.org/media/26193/ordinance-no-25351.pdf",
        "fee": "Plumbing fixtures, appliances and appurtenances base fee, including the first fixture, appliance or appurtenance $81.00; plus each additional $3.31; minimum fee of $80.00 for any permit; additional inspections $64.00 each; re-inspection $75.00",
        "feeAsOf": "Ordinance No. 25351, 2024"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal is one of the counted items on Tulsa's plumbing permit request form, so swapping one is charged under the city's per-fixture plumbing permit fee and must be applied for by a licensed, city-registered plumbing contractor.",
        "sourceUrl": "https://www.cityoftulsa.org/media/26193/ordinance-no-25351.pdf",
        "fee": "Plumbing fixtures, appliances and appurtenances base fee, including the first fixture, appliance or appurtenance $81.00; plus each additional $3.31; minimum fee of $80.00 for any permit",
        "feeAsOf": "Ordinance No. 25351, 2024"
      },
      "electrician-service-call": {
        "requirement": "For electrical work that is not new construction or a major remodel, Tulsa prices the permit by what is being installed: a band fee for the first fifteen pieces of electrical equipment, a separate service fee by amperage, and a flat reconnect fee. Only a licensed electrical contractor registered with the city may apply.",
        "sourceUrl": "https://www.cityoftulsa.org/media/26193/ordinance-no-25351.pdf",
        "fee": "Electrical equipment, 1-15 $81.00, each additional $2.68; electrical service (first 100 amps) $98.00, each additional 100 amps or portion thereof $18.00; reconnect fee $81.00; minimum fee of $80.00 for any permit",
        "feeAsOf": "Ordinance No. 25351, 2024"
      },
      "smoke-detector-replacement": {
        "requirement": "Tulsa permits fire alarm and detection systems by the number of devices, and the Fire Marshal must approve the plans first, but the city lets a job of five or fewer alarm devices (not counting the panel) be permitted by telephone with no application fee and no plan review. Replacing lamps is listed among the ordinary repairs that need no permit at all.",
        "sourceUrl": "https://www.cityoftulsa.org/media/26193/ordinance-no-25351.pdf",
        "fee": "Fire alarm system permit application fee $75.00; fire alarm system permit, 1-5 devices $113.00 (one inspection), 6-20 devices $157.00; exception: a permit for five or less fire alarm devices, not including the panel, may be issued with approval via telephone without any application fee or plans review",
        "feeAsOf": "Ordinance No. 25351, 2024"
      }
    }
  },
  "vancouver-wa": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Vancouver (WA) Community Development Department, Permit Center",
      "url": "https://www.cityofvancouver.us/business/permits-licenses-and-inspections/"
    },
    "codeEdition": {
      "text": "Vancouver enforces the 2021 I-Codes with Washington State Amendments, effective 03/15/2024, plus the 2023 National Electrical Code effective 04/01/2024. Named editions include the 2021 IRC with WAC 51-51, the 2021 Uniform Plumbing Code with WAC 51-56, the 2021 International Mechanical Code with WAC 51-52, the 2021 International Fuel Gas Code with WAC 51-52-21000, the 2021 Washington State Energy Code, and Vancouver Municipal Code Title 17.",
      "sourceUrl": "https://www.cityofvancouver.us/business/permits-licenses-and-inspections/building-codes-and-regulations/"
    },
    "permitPolicy": {
      "text": "Vancouver issues its own MPE (mechanical, plumbing, electrical) trade permits for standalone jobs such as minor repairs, replacements and alterations that can be inspected in two visits; if the work is part of a remodel it is folded into the Residential Building Permit instead. Under Washington law a person does not need an electrical license or a certified electrician to do electrical work at their own residence, and does not need a plumbing license to do plumbing work at their own residence, though the state exemptions do not override a city's own electrical or plumbing code.",
      "sourceUrl": "https://www.cityofvancouver.us/business/building-construction/residential-building-permits/"
    },
    "registration": {
      "text": "Vancouver requires a city business license (a state-issued license carrying a Vancouver city endorsement) for any business physically located in the city or whose staff engage in business inside city limits, which captures contractors coming in to work. As of January 1, 2026 the annual city fee is $0 for reported in-city gross income of $4,000 or less, $53.00 for over $4,000 through $53,000, and $347.00 plus $165.00 per calculated employee (minimum total $512.00) above $53,000. This is on top of Washington State contractor registration and trade certification.",
      "sourceUrl": "https://www.cityofvancouver.us/business/permits-licenses-and-inspections/business-and-special-licenses/"
    },
    "codeItems": [
      {
        "text": "Washington's amended plumbing code, which Vancouver adopts, requires every water heater to be anchored or strapped against earthquake movement, with straps in the upper third and lower third of the tank's height and the lower strap kept at least four inches away from the controls.",
        "sourceUrl": "https://app.leg.wa.gov/WAC/default.aspx?cite=51-56-0500"
      },
      {
        "text": "Washington requires consumer electric storage water heaters to carry a modular demand-response communications port meeting the March 2018 ANSI/CTA-2045-A standard. Units built before January 1, 2022 (before January 1, 2021 for heat-pump types) are excepted, so this mostly affects what a new replacement tank must have.",
        "sourceUrl": "https://app.leg.wa.gov/WAC/default.aspx?cite=51-56-0500"
      },
      {
        "text": "A fuel-burning water heater in a Vancouver bedroom or bathroom has to sit in a closet used only for the water heater, with a listed gasketed self-closing door, a threshold and bottom seal, and all combustion air drawn from outdoors. The alternative is a direct-vent unit.",
        "sourceUrl": "https://app.leg.wa.gov/WAC/default.aspx?cite=51-56-0500"
      },
      {
        "text": "Washington's amended plumbing code sets a minimum first-hour rating for a replacement water heater based on the number of bedrooms and bathrooms, so a like-for-like swap can still fail if the new unit is undersized for the house.",
        "sourceUrl": "https://app.leg.wa.gov/WAC/default.aspx?cite=51-56-0500"
      },
      {
        "text": "Vancouver sits in radon Zone 1 (High), so residential work is subject to Washington's radon protection and testing provisions in WAC 51-51-R332 and IRC Appendix F. Vancouver also assigns residential Seismic Design Category D1.",
        "sourceUrl": "https://www.cityofvancouver.us/business/permits-licenses-and-inspections/building-codes-and-regulations/"
      },
      {
        "text": "Vancouver requires duct testing on any single-family, mechanical or residential permit where a furnace or air conditioner is added or replaced, and the test affidavit must reach the city before final approval.",
        "sourceUrl": "https://www.cityofvancouver.us/business/permits-licenses-and-inspections/building-codes-and-regulations/"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Vancouver takes an MPE trade permit, a plumbing permit for an electric unit and a mechanical permit for a gas one, and the inspector checks seismic strapping and the water heater's sizing against the number of bedrooms and bathrooms.",
        "sourceUrl": "https://www.cityofvancouver.us/wp-content/uploads/2025/12/Electrical_Mechanical_and_Plumbing-2026.pdf",
        "fee": "Plumbing: water heater $15.14 per item, with a minimum fee of $67.80 for an electric water heater. Mechanical: water heater $14.46 and flue vent for water heater $14.46 per item, with a minimum fee of $67.80 for a gas water heater. Two inspections are included per permit",
        "feeAsOf": "Effective 1/1/2026; revised 12/15/2025"
      },
      "garbage-disposal-replacement": {
        "requirement": "A garbage disposal is a listed plumbing fixture in Vancouver's fee schedule, so replacing one takes a plumbing permit charged per item against the standard MPE minimum fee.",
        "sourceUrl": "https://www.cityofvancouver.us/wp-content/uploads/2025/12/Electrical_Mechanical_and_Plumbing-2026.pdf",
        "fee": "Garbage disposal $15.14 per item; minimum fee $78.99 (consistent for all MPE permits), whichever is greater",
        "feeAsOf": "Effective 1/1/2026; revised 12/15/2025"
      },
      "plumber-service-call": {
        "requirement": "Standalone plumbing repairs, replacements and alterations in Vancouver take an MPE plumbing permit priced per fixture or item, and the permit covers two inspections before trip fees start.",
        "sourceUrl": "https://www.cityofvancouver.us/wp-content/uploads/2025/12/Electrical_Mechanical_and_Plumbing-2026.pdf",
        "fee": "$15.14 per fixture or item for most fixtures; minimum fee $78.99 (consistent for all MPE permits); residential backflow preventer $24.36 with a $67.80 minimum; inspection requested but not ready, or each additional inspection over 2 per permit, $49.00; inspection of an existing installation $97.00",
        "feeAsOf": "Effective 1/1/2026; revised 12/15/2025"
      },
      "electrician-service-call": {
        "requirement": "Vancouver runs its own electrical permit program and charges per item installed or altered, so a service call that adds or changes circuits or replaces a service needs an MPE electrical permit.",
        "sourceUrl": "https://www.cityofvancouver.us/wp-content/uploads/2025/12/Electrical_Mechanical_and_Plumbing-2026.pdf",
        "fee": "Residential branch circuits: 1-4 circuits $63.18, each additional circuit $7.25. Residential replacement or altered service 0-200 amps with feeder $88.20. Maintenance or repair of mast or meter $48.05. Minimum fee $78.99, or the calculated fee, whichever is greater",
        "feeAsOf": "Effective 1/1/2026; revised 12/15/2025"
      },
      "smoke-detector-replacement": {
        "requirement": "Under the Washington residential code Vancouver enforces, a permitted alteration, repair or addition forces the whole dwelling up to new-construction smoke alarm standards, but pure plumbing, electrical or mechanical installation, alteration or repair is expressly exempt from that trigger, and alarms installed under that retrofit rule may be battery powered.",
        "sourceUrl": "https://app.leg.wa.gov/WAC/default.aspx?cite=51-51-0314"
      }
    }
  },
  "virginia-beach-va": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "City of Virginia Beach Department of Planning & Community Development, Permits & Inspections Division",
      "url": "https://planning.virginiabeach.gov/divisions-offices/permits-inspections"
    },
    "codeEdition": {
      "text": "Virginia Beach's Permits & Inspections Division administers the Virginia Uniform Statewide Building Code, and the city's trade permit pages work from the 2021 Virginia codes, including the 2021 Virginia Plumbing Code. Virginia adopted the 2021 I-codes and the 2020 National Electrical Code effective January 18, 2024.",
      "sourceUrl": "https://dhcd.virginia.gov/codes"
    },
    "permitPolicy": {
      "text": "Virginia Beach lets a property owner pull their own trade permits. A contractor's application must carry the company name, the Class A, B or C state contractor registration number and a registered master tradesman's signature; an owner applying instead supplies name, address, the approximate cost of materials as the contract value, and a signature. Either way only one address goes on an application, and an incomplete application is not processed.",
      "sourceUrl": "https://planning.virginiabeach.gov/permits/trade"
    },
    "registration": {
      "text": "The city checks the state credential rather than issuing a local trade license: a trade contractor must give its Class A, B or C Virginia contractor registration number and have the registered master tradesman sign the application, and an application missing that number or signature will not be processed.",
      "sourceUrl": "https://planning.virginiabeach.gov/permits/trade"
    },
    "codeItems": [
      {
        "text": "Virginia Beach exempts residential \"like for like\" mechanical replacements, along with ranges, ovens, grills and dryers, from needing a mechanical permit — but a like-for-like swap does not include equipment with a different refrigerant type or fuel-fired equipment, and those still need the permit and a rough-in inspection.",
        "sourceUrl": "https://planning.virginiabeach.gov/permits/trade"
      },
      {
        "text": "Gas piping is its own permit in Virginia Beach. Installing or replacing any gas line requires a gas permit, and the city's list of triggers names water heaters, boilers, furnaces, gas packs, generators, gas logs, meter relocations and propane-to-natural-gas conversions. Gas work is inspected twice, a pressure test and a final, done alongside the plumbing rough-in and final on new residential work.",
        "sourceUrl": "https://planning.virginiabeach.gov/permits/trade"
      },
      {
        "text": "A new, replacement or removed testable backflow preventer needs a plumbing permit in Virginia Beach, and the test report has to be uploaded to the permit before the final inspection can be approved.",
        "sourceUrl": "https://planning.virginiabeach.gov/permits/trade"
      },
      {
        "text": "A Virginia Beach plumbing permit is not issued until all Public Utilities fees are paid and the receipt is given to permitting staff, and grease traps and on-site water or sewer lines must be reviewed by a plumbing inspector before issuance.",
        "sourceUrl": "https://planning.virginiabeach.gov/permits/trade"
      },
      {
        "text": "Which plumbing inspections you get in Virginia Beach depends on the foundation: a house on crawlspace gets rough-in, shower pan, water, sewer and final, while a house on slab adds a slab and a top-out inspection.",
        "sourceUrl": "https://planning.virginiabeach.gov/permits/trade"
      },
      {
        "text": "Electrical applications for services over 800 amps need an electrical inspector's approval in Virginia Beach, and the meter release to Dominion Energy is generated only once every final inspection and any outside approvals are in.",
        "sourceUrl": "https://planning.virginiabeach.gov/permits/trade"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "A new residential water heater installation in Virginia Beach is mechanical permit work, though the city exempts a straight \"like for like\" residential replacement from the mechanical permit; installing or replacing gas piping for a gas heater is a separate gas permit, and both carry a 2% state levy and a technology fee.",
        "sourceUrl": "https://planning.virginiabeach.gov/permits/trade",
        "fee": "Mechanical permit: $50 plus $5 per $1,000 of construction value (up to $1,000 = $55; up to $5,000 = $75; up to $10,000 = $100). Gas permit: $50 plus $4 per outlet/shutoff. A 2% state levy is assessed on these fees and a $10 technology fee is also required."
      },
      "plumber-service-call": {
        "requirement": "Virginia Beach requires a plumbing permit for new plumbing fixtures or drains, replacing a water or sewer line, connecting or converting to City water or sewer, and new or replacement testable backflow preventers, and it prices the permit as a flat base plus an amount for each fixture or drain.",
        "sourceUrl": "https://planning.virginiabeach.gov/permits/trade",
        "fee": "Plumbing permit: $50 plus $6 per fixture/drain; water line or sewer line conversion/replacement $50 each; plan review $50; re-inspection $75; administrative fee for beginning work without a permit $250. A 2% state levy is assessed on these fees and a $10 technology fee is also required."
      },
      "electrician-service-call": {
        "requirement": "Virginia Beach requires an electrical permit to add circuits, change or upgrade the service, install or relocate wiring, or move or replace a meter base or panel, and it charges by what you are installing: service work is priced by amperage, while added or repaired circuits are a flat base plus a per-circuit amount.",
        "sourceUrl": "https://planning.virginiabeach.gov/permits/trade",
        "fee": "New single-phase service: $50.00 plus $20.00 per 50 amps (100 amps = $90.00; 150 amps = $110.00; 200 amps = $130.00); a change of service is half the new-service fee (up to 200 amps = $65.00). Additions or repairs: $50.00 plus $5.00 per circuit for each piece of equipment connected and each circuit or feeder installed, extended, relocated or repaired. Panel replacement or relocation, meter/meterbase replacement or relocation, subfed panel, generator circuit or temporary service pole: $50.00 each. Re-inspection $75; administrative fee for beginning work without a permit $250. A 2% state levy is assessed on these fees and a $10 technology fee is also required."
      }
    }
  },
  "wichita-ks": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Metropolitan Area Building and Construction Department (MABCD), the joint Wichita-Sedgwick County building authority",
      "url": "https://www.sedgwick.gov/mabcd/"
    },
    "codeEdition": {
      "text": "MABCD's adopted-code list for the City of Wichita and Sedgwick County: 2024 IBC and 2024 IEBC plus the 2018 IRC for building, 2023 NEC for electrical, 2024 IMC and 2021 IFGC for mechanical, and the 2021 Uniform Plumbing Code for plumbing. All of them are enforced as amended by the Wichita-Sedgwick County Unified Building and Trade Code (UBTC); the current consolidated UBTC the department publishes is dated 1/27/25.",
      "sourceUrl": "https://www.sedgwick.gov/mabcd/codes-resolutions-ordinances/"
    },
    "permitPolicy": {
      "text": "A homeowner can pull their own permit in Wichita only if they both own and occupy the home; if they own it but do not live in it, a licensed contractor must do the work. The homeowner files a Homeowner Declaration Form and then, for each trade, either names a licensed sub-contractor or sits a homeowner's exam, scored at 75% to pass. There is a separate water-heater exam alongside the electrical and plumbing ones. If an exam is failed, or if no exam is arranged before the permit issues, a licensed professional has to do that trade work. MABCD warns homeowners to refuse if a contractor asks them to pull the permit.",
      "sourceUrl": "https://www.sedgwick.gov/mabcd/do-i-need-a-permit/"
    },
    "registration": {
      "text": "MABCD licenses trade contractors itself, on top of any state credential, and no building permit is issued to a contractor who has not first obtained that license, is delinquent on the fee, or has had it suspended. Trade licences run two years and cost $360 each for Electrical, Plumbing, Gas Fitter, Mechanical, Air Conditioner & Heating, Drain Cleaner, Drain Layer, Refrigeration, Sheet Metal, Solar and others (trade licences expire in odd years). General licences run two years at $1,000 for Class A, $600 for Class B, $450 for Class C Residential and $360 for Class D Residential Maintenance, which is Wichita jurisdiction only. Liability insurance is also required.",
      "sourceUrl": "https://www.sedgwick.gov/media/55369/fee-table-a.pdf"
    },
    "codeItems": [
      {
        "text": "Wichita turns the usual seismic-strap rule around. UBTC Sec. 3.1.086 amends UPC 507.2 so a water heater may be strapped rather than must be, and when it is, the straps go within the upper third and lower third of the tank height with at least 4 inches of clearance from the controls at the lower strap. The exception is the one that bites: a water heater elevated in an attic, or in or on an attic ceiling assembly, must be anchored or strapped.",
        "sourceUrl": "https://www.sedgwick.gov/media/68299/wichita-sedgwick-county-unified-building-trade-code-ubtc-current-1-27-25-complete-ubtc.pdf"
      },
      {
        "text": "Two local amendments give an installer a way out when the pan drain or the relief line cannot be run anywhere sensible, but both demand an alarm. Under Sec. 3.1.087 the pan drain may be capped if extending it is structurally impractical, provided a water alarm is installed; under Sec. 3.1.155 the temperature-and-pressure relief discharge piping may instead terminate into the water heater pan, again only with a water alarm.",
        "sourceUrl": "https://www.sedgwick.gov/media/68299/wichita-sedgwick-county-unified-building-trade-code-ubtc-current-1-27-25-complete-ubtc.pdf"
      },
      {
        "text": "Wichita deletes the water-heater section of the residential code outright. UBTC Sec. 2.4.900 removes IRC Section G2448 (624) and sends water heaters to Article 3 of the UBTC instead, so a water heater here is judged against the amended Uniform Plumbing Code, not the IRC chapter a national guide would cite.",
        "sourceUrl": "https://www.sedgwick.gov/media/68299/wichita-sedgwick-county-unified-building-trade-code-ubtc-current-1-27-25-complete-ubtc.pdf"
      },
      {
        "text": "The local amendment to UPC 414.3 lets a domestic dishwasher drain into the manufactured opening of a garbage disposal or into a wye branch tailpiece, and requires that the dishwasher discharge line be looped as high as possible inside the sink cabinet and securely fastened. An inspector looking at a disposal changeout will check that loop.",
        "sourceUrl": "https://www.sedgwick.gov/media/68299/wichita-sedgwick-county-unified-building-trade-code-ubtc-current-1-27-25-complete-ubtc.pdf"
      },
      {
        "text": "Wichita rewrites the 2023 NEC's GFCI scope. UBTC Sec. 4.2.165 drops GFCI protection for a cord-and-plug sewage ejector or sump pump on an individual motor branch circuit; Sec. 4.2.166 drops it for a cord-and-plug garage door opener on a single ceiling receptacle directly above the motor; and Secs. 4.2.167 and 4.2.169 push the NEC's 250-volt receptacle and 250-volt outdoor-outlet GFCI requirements out to January 1, 2027.",
        "sourceUrl": "https://www.sedgwick.gov/media/68299/wichita-sedgwick-county-unified-building-trade-code-ubtc-current-1-27-25-complete-ubtc.pdf"
      },
      {
        "text": "Two service-side local rules catch out-of-town electricians: UBTC Sec. 4.2.110 bans splicing service-entrance conductors except in five listed cases, and Sec. 4.2.120 requires any disconnecting means outside a building to sit at least six feet above finish grade unless it is a dead-front pullout or heavy-duty type.",
        "sourceUrl": "https://www.sedgwick.gov/media/68299/wichita-sedgwick-county-unified-building-trade-code-ubtc-current-1-27-25-complete-ubtc.pdf"
      },
      {
        "text": "Smoke-alarm placement is amended locally. UBTC Sec. 2.4.320 rewrites IRC R314.3 to require alarms outside each separate sleeping area in the immediate vicinity of the bedrooms and on each additional story including basements and cellars, and adds that the alarm must be clearly audible in all bedrooms over background noise with all intervening doors closed. The interconnection amendment accepts wireless alarms that all sound together in place of physical interconnection.",
        "sourceUrl": "https://www.sedgwick.gov/media/68299/wichita-sedgwick-county-unified-building-trade-code-ubtc-current-1-27-25-complete-ubtc.pdf"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "Replacing a water heater in Wichita takes a plumbing permit, and MABCD prices the heater as its own line item on top of a flat permit issuance fee.",
        "sourceUrl": "https://www.sedgwick.gov/media/55343/fee-table-h.pdf",
        "fee": "Water Heater New or Replacement $9.00; Permit Issuance Fee $25.00",
        "feeAsOf": "Rev. 5/9/2019"
      },
      "plumber-service-call": {
        "requirement": "Plumbing repair work in Wichita is permitted item by item against a flat permit issuance fee; plumbing work done under a one- or two-family building permit does not need a separate plumbing permit unless it starts more than 180 days after that permit was issued.",
        "sourceUrl": "https://www.sedgwick.gov/media/55343/fee-table-h.pdf",
        "fee": "Permit Issuance Fee $25.00; Waste Openings $4.50; Water Service New or Replacement $5.00; Miscellaneous $9.00; Gas Opening / Pressure Test $9.00",
        "feeAsOf": "Rev. 5/9/2019"
      },
      "electrician-service-call": {
        "requirement": "Almost all electrical work in Wichita needs a permit: the only work the code exempts is listed cord-and-plug temporary decorative lighting and most communication wiring. Charges are per circuit, device or service against a flat permit issuance fee.",
        "sourceUrl": "https://www.sedgwick.gov/media/55335/fee-table-i.pdf",
        "fee": "Permit Issuance Fee $25.00; 120 volt Circuit $2.00; Outlets Added to Existing Circuit $0.75; Service (new/change) 480 volts or less $11.00 per meter up to 100 amps plus $0.06 each additional amp; Miscellaneous $14.00",
        "feeAsOf": "Rev. 5/9/2019"
      },
      "smoke-detector-replacement": {
        "requirement": "Hard-wired smoke detectors are a priced line on Wichita's electrical permit schedule, charged per detector on top of the flat permit issuance fee.",
        "sourceUrl": "https://www.sedgwick.gov/media/55335/fee-table-i.pdf",
        "fee": "Smoke Detectors $0.75 each; Permit Issuance Fee $25.00",
        "feeAsOf": "Rev. 5/9/2019"
      },
      "garbage-disposal-replacement": {
        "requirement": "A disposal swap in Wichita is plumbing permit work - the code exempts no plumbing work from permit - and the inspector applies the local amendment requiring the dishwasher drain line to be looped high inside the sink cabinet and securely fastened.",
        "sourceUrl": "https://www.sedgwick.gov/media/55343/fee-table-h.pdf",
        "fee": "Permit Issuance Fee $25.00",
        "feeAsOf": "Rev. 5/9/2019"
      }
    }
  },
  "winston-salem-nc": {
    "verifiedOn": "2026-10-31",
    "authority": {
      "name": "Winston-Salem/Forsyth County Planning & Development Services Department, Inspections Division",
      "url": "https://www.cityofws.org/343/Inspections-Division"
    },
    "codeEdition": {
      "text": "North Carolina runs one statewide code and Winston-Salem's inspectors enforce it. The 2018 NC Codes took effect January 1, 2019 and remain the ones currently in force; they combine the 2015 International Codes with the 2018 NC Ad-Hoc Committee amendments adopted by the Building Code Council. Electrical work follows the 2020 North Carolina Electrical Code, effective November 1, 2021, which is the NEC plus North Carolina amendments, and accessibility follows ANSI A117.1-2009 under the 2018 building code. A 2024 North Carolina State Building Code has cleared the Rules Review Commission, and the State Fire Marshal issued separate correspondence in March 2025 about when it takes effect.",
      "sourceUrl": "https://www.ncosfm.gov/codes/codes-current-and-past"
    },
    "permitPolicy": {
      "text": "A Winston-Salem homeowner can pull their own trade permit, but the city makes them sign a notarized affidavit per trade and sets real conditions. Under the electrical affidavit, claiming the G.S. 87-43.1(a) exemption, the owner has to own and occupy the structure, keep occupying it for 12 months after the work is finished, and do the work personally — the city states that having anyone else do it, paid or free, violates state law. The owner also has to attest that they understand the principles of the wiring and are qualified to do a safe job, and the city warns that the inspector will not design or lay out the job. The plumbing affidavit is the same shape under G.S. 87-21(c). On a building permit rather than a trade permit, the separate Owner Exemption Affidavit under G.S. 87-1(b)(2) requires the owner to personally superintend the work, to be on site regularly and present for every required inspection unless the plans were drawn and sealed by a licensed architect, and the city transmits a copy to the NC Licensing Board for General Contractors, which can cause the permit to be revoked. Licensed contractors apply for plumbing, electrical and mechanical permits in the BuildIT portal; paper applications are no longer accepted.",
      "sourceUrl": "https://www.cityofws.org/DocumentCenter/View/18100/Electrical-Installation-by-Property-Owner-Affidavit-Fillable-PDF"
    },
    "registration": {
      "text": "Winston-Salem does not publish a separate city trade registration or licence; instead the Inspections Division controls who can buy a trade permit through its BuildIT portal. The city says it creates a contractor ID only for contractors who hold an active state license or a bond/escrow account and who have open or recently purchased permits, and that only a plumbing, mechanical, electrical or refrigeration contractor can purchase permits or schedule their own inspections through the portal. A general contractor can schedule inspections but cannot buy building permits there. Residential permit applications also require a completed Worker's Compensation Coverage Affidavit from whoever is listed as the contractor, including a property owner acting as their own contractor.",
      "sourceUrl": "https://www.cityofws.org/470/BuildIT"
    },
    "codeItems": [
      {
        "text": "Winston-Salem publishes an electrical code split that national guides miss. The city states that the 2020 National Electrical Code took effect November 1, 2021, but that the 2017 NEC remains in effect for one- and two-family dwellings, and that an electrical permit may still use the 2017 NEC for wiring if it is tied to a parent building permit secured before November 1, 2021. So a house job in Winston-Salem can be inspected against an older NEC edition than a commercial job on the same street.",
        "sourceUrl": "https://www.cityofws.org/470/BuildIT"
      },
      {
        "text": "Winston-Salem bundles the electrical side of a water heater swap into the plumbing permit. Its fee schedule lists a plumbing water heater changeout permit as one flat fee and says in the line itself that it includes electrical, so a straight electric heater replacement does not need a second permit from the electrical side.",
        "sourceUrl": "https://www.cityofws.org/DocumentCenter/View/1012/Inspections-Division-Fee-Schedule-PDF"
      },
      {
        "text": "Failed inspections get expensive fast in Winston-Salem, and a homeowner permit can be shut off entirely. The fee schedule charges extra trip fees after the first failure of $50 for the second trip, $75 for the third and $100 for all others, charges $225 for a stop work order, and doubles the permit fee for starting work without a permit. On top of that, the property-owner electrical and plumbing affidavits say that if the job is turned down twice as not meeting the code, or if the city finds someone else did the work, the permit goes to stop-work status and a licensed contractor has to permit and finish the job.",
        "sourceUrl": "https://www.cityofws.org/DocumentCenter/View/1012/Inspections-Division-Fee-Schedule-PDF"
      },
      {
        "text": "Winston-Salem/Forsyth County Utilities sets out what it expects a plumber to do on a sewer backup, and it is more than clearing the line. City crews will investigate and clean any accessible part of the service line inside the public right-of-way at no cost, and will clean or repair a courtesy cleanout stack at the edge of the right-of-way. If the service line is blocked with no water visible at the cleanout, or no cleanout stack can be found, the homeowner hires a plumber, and the city requires that plumber to run a root machine or jet hose through the service line all the way to the sewer main rather than stopping at the cleanout, then CCTV the line and submit the footage to a Utilities field operations supervisor as proof of any damage in the right-of-way. Skipping those steps can cost the homeowner reimbursement under the city's Good Neighbor Policy.",
        "sourceUrl": "https://www.cityofws.org/2953/Sewer-Backup-Info-for-Plumbers"
      },
      {
        "text": "Who inspects your job in Winston-Salem is a county-wide question. The Inspections Division is a joint City-County agency that reviews and inspects building and zoning work throughout Forsyth County, with the exception of the town and city limits of High Point, Kernersville and King, and it enforces the zoning ordinances of Clemmons, Forsyth County, Lewisville, Walkertown and Winston-Salem. The city also notes that the permit office no longer takes walk-in customers or paper permit applications.",
        "sourceUrl": "https://www.cityofws.org/343/Inspections-Division"
      }
    ],
    "byGuide": {
      "water-heater-replacement": {
        "requirement": "A water heater changeout in Winston-Salem is bought as a single flat plumbing permit that already covers the electrical work, and no plumbing permit can come to less than the city's minimum.",
        "sourceUrl": "https://www.cityofws.org/DocumentCenter/View/1012/Inspections-Division-Fee-Schedule-PDF",
        "fee": "Plumbing water heater changeout permits (includes electrical) - Flat fee $100.00; Minimum fee for any Plumbing permit shall not be less than $75.00; in addition a Homeowner's Recovery Fund fee of $10.00 is collected in accordance with G.S. 87-15.6 for new single-family permits and alterations to single family dwellings issued to North Carolina licensed contractors",
        "feeAsOf": "April 2026"
      },
      "garbage-disposal-replacement": {
        "requirement": "Winston-Salem prices a disposal swap as a single plumbed appliance on the plumbing permit — disposals are named in the line — but the permit still cannot cost less than the city's plumbing minimum, so the per-fixture rate only matters once several fixtures are on one permit.",
        "sourceUrl": "https://www.cityofws.org/DocumentCenter/View/1012/Inspections-Division-Fee-Schedule-PDF",
        "fee": "Plumbed fixtures, appliances, interceptors and sewer ejectors to be installed or replaced, including but not limited to sinks, water closets, floor drains, dishwashers, disposals and water heaters, each - Fee $10.00; Minimum fee for any Plumbing permit shall not be less than $75.00",
        "feeAsOf": "April 2026"
      },
      "plumber-service-call": {
        "requirement": "Winston-Salem charges by the fixture or the run for plumbing work in an existing home, with a flat minimum under every plumbing permit, so a one-fixture service call lands on the minimum.",
        "sourceUrl": "https://www.cityofws.org/DocumentCenter/View/1012/Inspections-Division-Fee-Schedule-PDF",
        "fee": "Plumbed fixtures, appliances, interceptors and sewer ejectors to be installed or replaced, each - Fee $10.00; Installation or replacement of building sewer, per 200 feet or part thereof - Fee $16.00; Installation or replacement of building water lines when not in conjunction with one of the items listed above - Fee $75.00; Installation or replacement of gas outlets or gas house connections, each - Fee $8.00; Minimum fee for any Plumbing permit shall not be less than $75.00",
        "feeAsOf": "April 2026"
      },
      "electrician-service-call": {
        "requirement": "Winston-Salem prices residential electrical work by what is being done — a service change and a reconnect each have their own flat line, outlets and fixtures are banded, and individual appliances are charged per unit — with a flat minimum under every electrical permit.",
        "sourceUrl": "https://www.cityofws.org/DocumentCenter/View/1012/Inspections-Division-Fee-Schedule-PDF",
        "fee": "Change of service: Residential - Fee $84.00; Reconnect current: Residential - Fee $75.00; Temporary current, individual meters - Fee $75.00; Temporary saw service - Fee $75.00; Rough hot outlets and fixtures: 1-50 - Fee $24.00, 51-100 - Fee $47.00; Appliances and equipment (including but not limited to ranges, furnaces, dishwashers, subpanels, etc.) each appliance - Fee $7.50; Minimum fee due for any Electrical permit shall not be less than $75.00",
        "feeAsOf": "April 2026"
      }
    }
  }
};

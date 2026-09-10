import { ROLE_CONFIGS } from '../../constants/roles';
import { AvatarRenderer } from '../illustrations/AvatarRenderer';
import { RolePropsRenderer } from '../illustrations/RolePropsRenderer';
import { SocialIcon } from './SocialIcons';

export const MemberCard = ({
  member,
  className = '',
  onEdit,
  showBracketStyle = false,
}) => {
  const config = ROLE_CONFIGS[member.role] || ROLE_CONFIGS.custom;
  const bgColor = member.customColor || config.bgColor;
  const tabColor = config.tabColor || bgColor;

  const isLightText =
    member.textColor === 'light' ||
    (!member.textColor && config.textColor === 'light');

  const textColorClass = isLightText
    ? 'text-white'
    : 'text-[#161a1d]';

  const nameColorClass = isLightText
    ? 'text-white'
    : 'text-[#161a1d]';

  const roleTitle = member.roleTitle || config.title;

  const isSocialValid = (url) => {
    if (!url || typeof url !== 'string') return false;
    const clean = url.trim().toLowerCase();
    return clean !== '' && clean !== '#' && !['n/a', 'n.a.', 'na'].includes(clean);
  };

  // Determine which social icons to show (ONLY available social media for this individual)
  const activeSocialKeys = member.socials
    ? Object.keys(member.socials).filter((key) => isSocialValid(member.socials[key]))
    : [];

  const displayName = showBracketStyle
    ? `[${member.name}]`
    : member.name;

  const memberBio = member.bio || member.quote;

  return (
    <div
      id={`member-card-${member.id}`}
      className={`relative group flex flex-col items-center select-none transition-all duration-200 hover:-translate-y-1.5 ${className}`}
    >
      {/* Main Card Body */}
      <div
        className="relative w-full aspect-[1/1.18] max-w-[285px] min-w-[235px] min-h-[320px] rounded-[28px] overflow-hidden border-[3.5px] border-[#161a1d] shadow-[0_7px_0_rgba(0,0,0,0.25),0_12px_24px_rgba(0,0,0,0.2)] flex flex-col items-center justify-end p-3.5 sm:p-4"
        style={{ backgroundColor: bgColor }}
      >
        {/* Stitched line running along the inside perimeter */}
        <div
          className="absolute inset-[7px] rounded-[21px] border-[2px] border-dashed pointer-events-none z-10"
          style={{ borderColor: config.stitchColor }}
        />

        {/* Role-specific vector illustration props (positioned at top/middle only) */}
        <RolePropsRenderer role={member.role} />

        {/* Central Avatar centered on both X and Y axes */}
        <div className="absolute top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
          <div className="w-[116px] h-[116px] sm:w-[124px] sm:h-[124px] rounded-full border-[3.5px] border-[#161a1d] bg-[#fdfbf7] shadow-inner overflow-hidden flex items-center justify-center">
            <AvatarRenderer
              avatarId={member.avatar || config.defaultAvatar}
              alt={member.name}
              role={member.role}
            />
          </div>
        </div>

        {/* Name, Role Title & Bio */}
        <div className="relative z-20 w-full text-center px-1.5 mb-0.5 flex flex-col items-center justify-center">
          {/* Member Name */}
          <h3
            className={`font-comic font-bold text-[17px] sm:text-[18px] tracking-tight leading-tight drop-shadow-xs truncate max-w-full ${nameColorClass}`}
            title={member.name}
          >
            {displayName}
          </h3>

          {/* Role Title */}
          <p
            className={`font-badge font-extrabold text-[11px] sm:text-[12px] tracking-wider uppercase leading-none mt-0.5 ${textColorClass}`}
          >
            {roleTitle}
          </p>

          {/* Member Bio / Quote */}
          {memberBio && (
            <p
              className={`font-comic italic text-[11px] sm:text-[11.5px] leading-tight opacity-90 mt-1 line-clamp-2 max-w-[95%] ${textColorClass}`}
              title={memberBio}
            >
              "{memberBio}"
            </p>
          )}
        </div>
      </div>

      {/* Connected Bottom Social Tab (Only rendered when available) */}
      {activeSocialKeys.length > 0 && (
        <div
          className="relative -mt-[3.5px] z-20 px-3 py-1 min-w-[80px] max-w-[145px] h-[32px] rounded-b-xl border-x-[3.5px] border-b-[3.5px] border-[#161a1d] shadow-[0_4px_0_rgba(0,0,0,0.2)] flex items-center justify-center gap-2"
          style={{ backgroundColor: tabColor }}
        >
          {activeSocialKeys.map((key) => {
            const url = member.socials[key];
            return (
              <SocialIcon
                key={key}
                type={key}
                url={url}
                className="w-3.5 h-3.5"
              />
            );
          })}
        </div>
      )}
    </div>
  );
};


// ============================================================
// Specialized Individual Role Components
// ============================================================

export const TechnicalMemberCard = (props) => (
  <MemberCard
    {...props}
    member={{
      ...props.member,
      role: 'technical',
    }}
  />
);

export const DesignerMemberCard = (props) => (
  <MemberCard
    {...props}
    member={{
      ...props.member,
      role: 'designer',
    }}
  />
);

export const LeadershipMemberCard = (props) => (
  <MemberCard
    {...props}
    member={{
      ...props.member,
      role: 'leadership',
    }}
  />
);

export const SocialMediaMemberCard = (props) => (
  <MemberCard
    {...props}
    member={{
      ...props.member,
      role: 'social_media',
    }}
  />
);

export const EventManagementMemberCard = (props) => (
  <MemberCard
    {...props}
    member={{
      ...props.member,
      role: 'event_management',
    }}
  />
);

export const PrOutreachMemberCard = (props) => (
  <MemberCard
    {...props}
    member={{
      ...props.member,
      role: 'pr_outreach',
    }}
  />
);

export const FinanceMemberCard = (props) => (
  <MemberCard
    {...props}
    member={{
      ...props.member,
      role: 'finance',
    }}
  />
);

export const ContentWriterMemberCard = (props) => (
  <MemberCard
    {...props}
    member={{
      ...props.member,
      role: 'content_writer',
    }}
  />
);

export const ResearcherMemberCard = (props) => (
  <MemberCard
    {...props}
    member={{
      ...props.member,
      role: 'researcher',
    }}
  />
);

export const ProjectManagerMemberCard = (props) => (
  <MemberCard
    {...props}
    member={{
      ...props.member,
      role: 'project_manager',
    }}
  />
);


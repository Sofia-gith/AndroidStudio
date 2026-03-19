import { StyleSheet } from 'react-native';

// ─── Paleta de cores ────────────────────────────────────────────────
export const C = {
  bg: '#0B0C10',
  surface: '#13151A',
  border: '#1E2028',
  gold: '#D4A853',
  goldLight: '#F0C878',
  white: '#F2F3F5',
  muted: '#7A7F8E',
  accent: '#3E8EDE',
  tag: '#1A1D25',
};

// ─── Estilos ────────────────────────────────────────────────────────
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },

  // Header
  header: {
    alignItems: 'center',
    paddingTop: 36,
    paddingBottom: 8,
  },
  avatarWrap: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatarOuter: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: C.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1C1A14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    color: C.gold,
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: 2,
  },
  avatarRing: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: C.gold,
    opacity: 0.3,
  },
  name: {
    color: C.white,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  title: {
    color: C.gold,
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginTop: 6,
    textAlign: 'center',
  },
  subtitle: {
    color: C.muted,
    fontSize: 12,
    letterSpacing: 2,
    marginTop: 4,
    textAlign: 'center',
  },
  headerDivider: {
    width: 48,
    height: 2,
    backgroundColor: C.gold,
    borderRadius: 1,
    marginVertical: 20,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  contactIcon: {
    fontSize: 12,
  },
  contactText: {
    color: C.muted,
    fontSize: 11,
    letterSpacing: 0.3,
  },

  // Section
  section: {
    marginTop: 32,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    gap: 12,
  },
  sectionTitleText: {
    color: C.gold,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  sectionTitleLine: {
    flex: 1,
    height: 1,
    backgroundColor: C.border,
  },

  // Summary
  summaryText: {
    color: C.muted,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.2,
  },

  // Skills
  skillRow: {
    marginBottom: 14,
  },
  skillLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  skillName: {
    color: C.white,
    fontSize: 13,
    fontWeight: '500',
  },
  skillLevel: {
    color: C.gold,
    fontSize: 11,
    fontWeight: '600',
  },
  skillTrack: {
    height: 3,
    backgroundColor: C.border,
    borderRadius: 2,
    overflow: 'hidden',
  },
  skillFill: {
    height: 3,
    backgroundColor: C.gold,
    borderRadius: 2,
  },

  // Experience
  expCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: C.surface,
    borderRadius: 12,
    overflow: 'hidden',
  },
  expAccentLine: {
    width: 3,
    backgroundColor: C.gold,
    opacity: 0.7,
  },
  expContent: {
    flex: 1,
    padding: 16,
  },
  expRole: {
    color: C.white,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  expMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  expCompany: {
    color: C.gold,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  expPeriod: {
    color: C.muted,
    fontSize: 11,
  },
  expDesc: {
    color: C.muted,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 12,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: C.tag,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  tagText: {
    color: C.muted,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  // Education
  eduCard: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 14,
  },
  eduDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: C.gold,
    marginTop: 5,
    flexShrink: 0,
  },
  eduContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: C.border,
    paddingBottom: 16,
  },
  eduDegree: {
    color: C.white,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 3,
  },
  eduSchool: {
    color: C.gold,
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 2,
  },
  eduPeriod: {
    color: C.muted,
    fontSize: 11,
    marginBottom: 6,
  },
  eduDetail: {
    color: C.muted,
    fontSize: 12,
    lineHeight: 18,
    fontStyle: 'italic',
  },

  // Projects
  projectGrid: {
    gap: 12,
  },
  projectCard: {
    backgroundColor: C.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: C.border,
  },
  projectName: {
    color: C.white,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6,
  },
  projectDesc: {
    color: C.muted,
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 8,
  },
  projectLink: {
    color: C.accent,
    fontSize: 11,
    letterSpacing: 0.3,
  },

  // Footer
  footer: {
    alignItems: 'center',
    marginTop: 40,
    paddingTop: 16,
  },
  footerLine: {
    width: 40,
    height: 1,
    backgroundColor: C.gold,
    opacity: 0.4,
    marginBottom: 12,
  },
  footerText: {
    color: C.muted,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'lowercase',
  },
});
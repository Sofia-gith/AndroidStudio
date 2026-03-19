/**
 * Currículo Fictício — Rafael Mendonça
 */

import React, { useRef, useEffect } from 'react';
import {
  Animated,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { C, styles } from './styles';

// ─── Dados do currículo ─────────────────────────────────────────────
const PROFILE = {
  name: 'Rafael Mendonça',
  title: 'Engenheiro de Software Sênior',
  subtitle: 'Arquitetura · Cloud · Produto',
  location: 'São Paulo, SP — Brasil',
  email: 'rafael.mendonca@devmail.io',
  github: 'github.com/rafaelmdev',
  linkedin: 'linkedin.com/in/rafaelmendonca',
  summary:
    'Engenheiro com +8 anos de experiência construindo sistemas distribuídos de alta disponibilidade. Apaixonado por DX, cultura de engenharia e liderança técnica. Já impactei mais de 12 milhões de usuários com produtos que vão de fintechs a plataformas de saúde.',
};

const SKILLS = [
  { name: 'Go / Golang', level: 95 },
  { name: 'Kubernetes & Docker', level: 90 },
  { name: 'TypeScript / Node.js', level: 88 },
  { name: 'PostgreSQL & Redis', level: 85 },
  { name: 'AWS & GCP', level: 82 },
  { name: 'React / React Native', level: 78 },
  { name: 'Rust', level: 60 },
];

const EXPERIENCE = [
  {
    role: 'Staff Engineer',
    company: 'Vortex Fintech',
    period: '2021 — Presente',
    desc: 'Lidero a equipe de plataforma (12 engenheiros). Redesenhei a camada de processamento de pagamentos para lidar com 120k TPS com latência p99 < 40ms. Migrei monolito legado para microserviços sem downtime em produção.',
    tags: ['Go', 'Kafka', 'Kubernetes', 'PostgreSQL'],
  },
  {
    role: 'Engenheiro Sênior',
    company: 'Saúde Digital S.A.',
    period: '2019 — 2021',
    desc: 'Arquitetei o backend de telemedicina escalável para 3 milhões de consultas/mês. Implementei sistema de filas resiliente com SLA de 99,98% de disponibilidade.',
    tags: ['Node.js', 'RabbitMQ', 'AWS', 'MongoDB'],
  },
  {
    role: 'Desenvolvedor Pleno',
    company: 'Agência Ômega',
    period: '2017 — 2019',
    desc: 'Desenvolvi APIs REST e GraphQL para clientes de e-commerce e logística. Otimizei queries críticas reduzindo tempo de resposta em 60%.',
    tags: ['Python', 'Django', 'GraphQL', 'Redis'],
  },
  {
    role: 'Dev Júnior / Estágio',
    company: 'Startup Lab FAPESP',
    period: '2016 — 2017',
    desc: 'Primeiro contato com desenvolvimento de produto real. Construí MVP de plataforma de matchmaking para projetos de pesquisa.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
  },
];

const EDUCATION = [
  {
    degree: 'Mestrado em Ciência da Computação',
    school: 'USP — Instituto de Matemática e Estatística',
    period: '2018 — 2020',
    detail: 'Foco em sistemas distribuídos e tolerância a falhas.',
  },
  {
    degree: 'Bacharelado em Engenharia de Software',
    school: 'UNICAMP — IC',
    period: '2013 — 2017',
    detail: 'Iniciação científica em compiladores e análise estática.',
  },
];

const PROJECTS = [
  {
    name: 'Galeão',
    desc: 'Framework de testes de carga open-source em Go com 2.4k ★ no GitHub.',
    link: 'github.com/rafaelmdev/galeao',
  },
  {
    name: 'Tereza',
    desc: 'CLI para gerenciar múltiplos clusters Kubernetes com perfis de contexto dinâmicos.',
    link: 'github.com/rafaelmdev/tereza',
  },
  {
    name: 'Tech Talks BR',
    desc: 'Organizador da comunidade de engenharia com +1.2k membros ativos em São Paulo.',
    link: 'techtalksbr.dev',
  },
];

// ─── Componentes ────────────────────────────────────────────────────

function SectionTitle({ label }: { label: string }) {
  return (
    <View style={styles.sectionTitleRow}>
      <Text style={styles.sectionTitleText}>{label}</Text>
      <View style={styles.sectionTitleLine} />
    </View>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{text}</Text>
    </View>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: level,
      duration: 900,
      delay: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  const barWidth = anim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.skillRow}>
      <View style={styles.skillLabelRow}>
        <Text style={styles.skillName}>{name}</Text>
        <Text style={styles.skillLevel}>{level}%</Text>
      </View>
      <View style={styles.skillTrack}>
        <Animated.View style={[styles.skillFill, { width: barWidth as any }]} />
      </View>
    </View>
  );
}

function ExperienceCard({ item }: { item: typeof EXPERIENCE[0] }) {
  return (
    <View style={styles.expCard}>
      <View style={styles.expAccentLine} />
      <View style={styles.expContent}>
        <Text style={styles.expRole}>{item.role}</Text>
        <View style={styles.expMeta}>
          <Text style={styles.expCompany}>{item.company}</Text>
          <Text style={styles.expPeriod}>{item.period}</Text>
        </View>
        <Text style={styles.expDesc}>{item.desc}</Text>
        <View style={styles.tagRow}>
          {item.tags.map(t => <Tag key={t} text={t} />)}
        </View>
      </View>
    </View>
  );
}

function EducationCard({ item }: { item: typeof EDUCATION[0] }) {
  return (
    <View style={styles.eduCard}>
      <View style={styles.eduDot} />
      <View style={styles.eduContent}>
        <Text style={styles.eduDegree}>{item.degree}</Text>
        <Text style={styles.eduSchool}>{item.school}</Text>
        <Text style={styles.eduPeriod}>{item.period}</Text>
        <Text style={styles.eduDetail}>{item.detail}</Text>
      </View>
    </View>
  );
}

function ProjectCard({ item }: { item: typeof PROJECTS[0] }) {
  return (
    <View style={styles.projectCard}>
      <Text style={styles.projectName}>{item.name}</Text>
      <Text style={styles.projectDesc}>{item.desc}</Text>
      <Text style={styles.projectLink}>{item.link}</Text>
    </View>
  );
}

function ContactItem({ icon, text }: { icon: string; text: string }) {
  return (
    <View style={styles.contactItem}>
      <Text style={styles.contactIcon}>{icon}</Text>
      <Text style={styles.contactText}>{text}</Text>
    </View>
  );
}

// ─── Tela principal ─────────────────────────────────────────────────

function ResumeScreen() {
  const insets = useSafeAreaInsets();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 700, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <ScrollView
      style={[styles.root, { paddingTop: insets.top }]}
      contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 32 }]}
      showsVerticalScrollIndicator={false}
    >
      {/* ── HEADER ── */}
      <Animated.View style={[styles.header, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <View style={styles.avatarWrap}>
          <View style={styles.avatarOuter}>
            <View style={styles.avatarInner}>
              <Text style={styles.avatarInitials}>RM</Text>
            </View>
          </View>
          <View style={styles.avatarRing} />
        </View>

        <Text style={styles.name}>{PROFILE.name}</Text>
        <Text style={styles.title}>{PROFILE.title}</Text>
        <Text style={styles.subtitle}>{PROFILE.subtitle}</Text>
        <View style={styles.headerDivider} />

        <View style={styles.contactRow}>
          <ContactItem icon="📍" text={PROFILE.location} />
          <ContactItem icon="✉️" text={PROFILE.email} />
        </View>
        <View style={styles.contactRow}>
          <ContactItem icon="💻" text={PROFILE.github} />
          <ContactItem icon="🔗" text={PROFILE.linkedin} />
        </View>
      </Animated.View>

      {/* ── RESUMO ── */}
      <View style={styles.section}>
        <SectionTitle label="Sobre" />
        <Text style={styles.summaryText}>{PROFILE.summary}</Text>
      </View>

      {/* ── HABILIDADES ── */}
      <View style={styles.section}>
        <SectionTitle label="Habilidades" />
        {SKILLS.map(s => <SkillBar key={s.name} name={s.name} level={s.level} />)}
      </View>

      {/* ── EXPERIÊNCIA ── */}
      <View style={styles.section}>
        <SectionTitle label="Experiência" />
        {EXPERIENCE.map((e, i) => <ExperienceCard key={i} item={e} />)}
      </View>

      {/* ── EDUCAÇÃO ── */}
      <View style={styles.section}>
        <SectionTitle label="Formação" />
        {EDUCATION.map((e, i) => <EducationCard key={i} item={e} />)}
      </View>

      {/* ── PROJETOS ── */}
      <View style={styles.section}>
        <SectionTitle label="Projetos & Comunidade" />
        <View style={styles.projectGrid}>
          {PROJECTS.map((p, i) => <ProjectCard key={i} item={p} />)}
        </View>
      </View>

      {/* ── RODAPÉ ── */}
      <View style={styles.footer}>
        <View style={styles.footerLine} />
        <Text style={styles.footerText}>disponível para propostas · rafael.mendonca@devmail.io</Text>
      </View>
    </ScrollView>
  );
}

// ─── App root ───────────────────────────────────────────────────────

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={C.bg} />
      <ResumeScreen />
    </SafeAreaProvider>
  );
}